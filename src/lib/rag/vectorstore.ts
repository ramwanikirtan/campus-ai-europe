import { FaissStore } from '@langchain/community/vectorstores/faiss';
import { Document } from '@langchain/core/documents';
import { getEmbeddings } from './embeddings';
import path from 'path';
import fs from 'fs';

const INDEX_DIR = path.join(process.cwd(), 'faiss_index');

let vectorStoreInstance: FaissStore | null = null;

/**
 * Build a FAISS index from documents and save to disk.
 */
export async function buildAndSaveIndex(documents: Document[]): Promise<FaissStore> {
  console.log(`Building FAISS index from ${documents.length} documents...`);

  const embeddings = getEmbeddings();
  const store = await FaissStore.fromDocuments(documents, embeddings);

  // Ensure directory exists
  if (!fs.existsSync(INDEX_DIR)) {
    fs.mkdirSync(INDEX_DIR, { recursive: true });
  }

  await store.save(INDEX_DIR);
  console.log(`FAISS index saved to ${INDEX_DIR}`);

  vectorStoreInstance = store;
  return store;
}

/**
 * Load the FAISS index from disk. Returns null if not found.
 */
export async function loadIndex(): Promise<FaissStore | null> {
  if (vectorStoreInstance) return vectorStoreInstance;

  const indexPath = path.join(INDEX_DIR, 'faiss.index');
  if (!fs.existsSync(indexPath)) {
    console.warn('FAISS index not found. Run `npm run build:index` first.');
    return null;
  }

  const embeddings = getEmbeddings();
  vectorStoreInstance = await FaissStore.load(INDEX_DIR, embeddings);
  console.log('FAISS index loaded from disk.');
  return vectorStoreInstance;
}

/**
 * Get the vector store instance (loads from disk if needed).
 */
export async function getVectorStore(): Promise<FaissStore> {
  const store = await loadIndex();
  if (!store) {
    throw new Error(
      'FAISS index not found. Run `npm run build:index` to generate it.'
    );
  }
  return store;
}
