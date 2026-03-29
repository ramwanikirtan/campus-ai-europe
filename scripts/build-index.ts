/**
 * Build FAISS vector index from all university + scholarship data in PostgreSQL.
 *
 * Usage:
 *   npx tsx scripts/build-index.ts
 *   npm run build:index
 */

import { config } from 'dotenv';
import path from 'path';

// Load .env.local before any imports that use env vars
config({ path: path.join(process.cwd(), '.env.local') });

// Use DIRECT_URL for scripts (bypasses pgbouncer connection pooler)
if (process.env.DIRECT_URL) {
  process.env.DATABASE_URL = process.env.DIRECT_URL;
}

async function main() {
  console.log('============================================================');
  console.log('  Campus AI Europe — Building FAISS Vector Index');
  console.log('============================================================\n');

  if (!process.env.OPENAI_API_KEY) {
    console.error('ERROR: OPENAI_API_KEY not set in .env.local');
    process.exit(1);
  }

  // Dynamic imports after env is loaded
  const { loadAllDocuments } = await import('../src/lib/rag/embeddings');
  const { buildAndSaveIndex } = await import('../src/lib/rag/vectorstore');

  console.log('Step 1: Loading documents from database...');
  const docs = await loadAllDocuments();
  console.log(`  Loaded ${docs.length} documents`);

  const uniDocs = docs.filter((d) => d.metadata.type === 'university').length;
  const progDocs = docs.filter((d) => d.metadata.type === 'program').length;
  const schDocs = docs.filter((d) => d.metadata.type === 'scholarship').length;
  console.log(`    - ${uniDocs} university documents`);
  console.log(`    - ${progDocs} program documents`);
  console.log(`    - ${schDocs} scholarship documents`);

  console.log('\nStep 2: Generating embeddings and building FAISS index...');
  console.log('  (This may take a few minutes for the first run)');
  await buildAndSaveIndex(docs);

  console.log('\n============================================================');
  console.log('  Index built successfully!');
  console.log('  Location: ./faiss_index/');
  console.log('============================================================');

  process.exit(0);
}

main().catch((err) => {
  console.error('Failed to build index:', err);
  process.exit(1);
});
