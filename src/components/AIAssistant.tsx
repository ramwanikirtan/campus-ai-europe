'use client';

import { useState, useRef, useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Minus, Bot, User } from 'lucide-react';
import { ChatMessage } from '@/lib/types';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIAssistant() {
  const { isAuthenticated, isChatOpen, toggleChat, chatMessages, addChatMessage, profile } = useAppStore();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  useEffect(() => {
    if (isChatOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChatOpen]);

  const generateResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    const field = profile?.fieldOfStudy || 'your field';
    const country = profile?.countryPreferences?.join(', ') || 'Europe';
    const budget = profile?.monthlyBudgetEur || 700;
    const gpa = profile?.gpaNormalized || 3.5;

    if (msg.includes('scholarship') || msg.includes('funding') || msg.includes('financial')) {
      return `Based on your profile (${field}, GPA: ${gpa}/4.0, Budget: €${budget}/month), here are scholarships I'd recommend:\n\n🏆 **DAAD Scholarship** — €934/month + travel\n• Open to all nationalities\n• Requires GPA 3.0+\n• Deadline: October 15\n\n🏆 **Erasmus Mundus** — Full tuition + €1,400/month\n• Very competitive but excellent coverage\n• Deadline: January 10\n\n🏆 **Holland Scholarship** — €5,000 one-time\n• For non-EEA students in Netherlands\n• Deadline: February 1\n\nWould you like details about any of these?`;
    }

    if (msg.includes('germany') || msg.includes('german')) {
      return `Great choice! Germany is excellent for ${field} students. Key facts:\n\n🎓 **Tuition**: Most public universities are tuition-FREE (even for international students!)\n\n💰 **Living costs**: €850–€950/month on average\n\n📋 **Requirements for your profile**:\n• GPA: Your ${gpa}/4.0 is competitive\n• Language: Most Master's programs in English, but learning German helps\n\n🏛️ **Top universities for ${field}**:\n1. TU Munich (QS #37)\n2. RWTH Aachen (QS #106)\n3. TU Berlin (QS #154)\n\n⚠️ **Important**: You'll need a blocked account (Sperrkonto) of ~€11,208 for your student visa.\n\nWould you like more details about any of these universities?`;
    }

    if (msg.includes('visa') || msg.includes('blocked account') || msg.includes('sperrkonto')) {
      return `For a student visa in Germany, you'll need:\n\n📄 **Required Documents**:\n1. University admission letter\n2. Blocked account (Sperrkonto): ~€11,208\n3. Health insurance proof\n4. Passport (valid 6+ months)\n5. Financial proof\n6. Motivation letter\n\n💰 **Blocked Account Providers**:\n• **Expatrio** — Most popular, ~€5 setup fee\n• **Deutsche Bank** — Traditional option\n• **Coracle** — Newer alternative\n\nYou'll receive €934/month from the blocked account. Given your €${budget}/month budget, ${budget >= 934 ? "you're well covered!" : "the blocked account requirement exceeds your stated budget. Consider applying for scholarships to cover the gap."}\n\nNeed help finding scholarships?`;
    }

    if (msg.includes('deadline') || msg.includes('when') || msg.includes('apply')) {
      return `Here are upcoming deadlines for ${field} programs in ${country}:\n\n📅 **Upcoming Deadlines**:\n• DAAD Scholarship — **Oct 15, 2025**\n• TU Munich — **Oct 15, 2025**\n• ETH Zurich — **Dec 15, 2025**\n• TU Delft — **Dec 1, 2025**\n• Erasmus Mundus — **Jan 10, 2026**\n• RWTH Aachen — **Mar 1, 2026**\n\n⚡ **Tip**: Start applications 2–3 months before deadlines to gather all documents.\n\nWould you like help planning your application timeline?`;
    }

    if (msg.includes('cost') || msg.includes('budget') || msg.includes('expensive') || msg.includes('cheap') || msg.includes('affordable')) {
      return `Here's a cost comparison for ${field} students:\n\n🏷️ **Most Affordable Options**:\n\n| Country | Tuition | Living Cost |\n|---------|---------|-------------|\n| Germany | €0/year | €850/month |\n| Poland | €3,200/year | €600/month |\n| Czech Republic | €5,000/year | €650/month |\n| Austria | €726/year | €900/month |\n\n💡 With your €${budget}/month budget, **Germany** and **Poland** are your best fits!\n\nWant me to find programs that fit your budget?`;
    }

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return `Hey there! 👋 I'm your Campus AI assistant. I can help you with:\n\n🎓 University recommendations\n💰 Scholarship information\n📋 Application requirements\n🌍 Country comparisons\n💶 Cost of living details\n📄 Visa guidance\n\nI know your profile — ${field} ${profile?.degreeLevel || 'student'}, GPA ${gpa}, budget €${budget}/month. What would you like to know?`;
    }

    return `That's a great question! Based on your profile (${field}, GPA: ${gpa}/4.0):\n\nI can help you with:\n• 🎓 Finding matching universities\n• 💰 Scholarship opportunities\n• 📋 Application requirements & deadlines\n• 🌍 Country comparisons (costs, visas)\n• 📄 Document preparation tips\n\nTry asking something specific like:\n• "What scholarships can I get?"\n• "Tell me about studying in Germany"\n• "What are the cheapest countries?"\n• "When are the deadlines?"\n\nI'm here to help! 😊`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };
    addChatMessage(userMsg);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateResponse(userMsg.content);
      const botMsg: ChatMessage = {
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content: response,
        timestamp: new Date().toISOString(),
      };
      addChatMessage(botMsg);
      setIsTyping(false);
    }, 1000 + Math.random() * 1500);
  };

  if (!isAuthenticated) return null;

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform pulse-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open AI Assistant"
      >
        {isChatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-8rem)] rounded-2xl overflow-hidden flex flex-col glass border border-border shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-gradient-to-r from-[oklch(0.70_0.18_250_/_0.1)] to-transparent">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Campus AI Assistant</p>
                  <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleChat}>
                  <Minus className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleChat}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.70_0.18_250_/_0.2)] to-[oklch(0.65_0.18_290_/_0.2)] flex items-center justify-center mx-auto mb-4">
                    <Bot className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">Ask me anything!</h3>
                  <p className="text-xs text-muted-foreground mb-4 max-w-[250px] mx-auto">
                    I can help you find universities, scholarships, and answer questions about studying in Europe.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['Scholarships for me?', 'Tell me about Germany', 'What are deadlines?'].map((q) => (
                      <button
                        key={q}
                        onClick={() => { setInput(q); }}
                        className="text-xs px-3 py-1.5 rounded-full border border-border hover:bg-secondary transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)]'
                        : 'bg-secondary'
                    }`}>
                      {msg.role === 'user'
                        ? <User className="w-3.5 h-3.5 text-white" />
                        : <Bot className="w-3.5 h-3.5" />
                      }
                    </div>
                    <div className={`rounded-2xl px-3.5 py-2.5 text-sm whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] text-white'
                        : 'bg-secondary'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="rounded-2xl px-4 py-3 bg-secondary">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0.15s' }} />
                      <div className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '0.3s' }} />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about studying in Europe..."
                  className="flex-1 bg-secondary rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isTyping}
                  className="rounded-xl bg-gradient-to-r from-[oklch(0.70_0.18_250)] to-[oklch(0.65_0.18_290)] hover:opacity-90 h-10 w-10 flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
