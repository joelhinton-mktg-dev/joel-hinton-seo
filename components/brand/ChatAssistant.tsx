'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import SunriseMark from './SunriseMark';
import AuditForm from './AuditForm';
import { FORMSPREE_HERO_ENDPOINT, SITE_PHONE, SITE_PHONE_TEL } from '@/data/site';

/** Open the assistant from anywhere (for example the Local SEO profile link). */
export function openAssistant() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('aio:open-assistant'));
  }
}

/**
 * The AI chat assistant from the designs, clearly labeled as AI.
 * Its first job is starting the free audit, so the panel carries the
 * two-step audit form. Hidden on landing pages (see globals.css).
 */
const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bubbleDismissed, setBubbleDismissed] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsOpen(true);
      setBubbleDismissed(true);
    };
    window.addEventListener('aio:open-assistant', handler);
    return () => window.removeEventListener('aio:open-assistant', handler);
  }, []);

  return (
    <div className="aio-chat-root fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="w-[92vw] max-w-sm overflow-hidden rounded-3xl border border-hairline bg-paper shadow-2xl">
          <div className="flex items-center gap-3 bg-navy px-5 py-4 text-white">
            <SunriseMark size={36} variant="blue" />
            <div className="flex-1">
              <div className="flex items-center gap-2 font-extrabold leading-tight">
                AIO Assistant
                <span className="rounded bg-white/15 px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wide">
                  AI
                </span>
              </div>
              <div className="text-xs text-white/70">Starts your free audit</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close the assistant"
              className="rounded-full p-1.5 transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-5">
            <p className="mb-4 text-[15px] leading-relaxed text-navy">
              Hey! Want to see where your site is losing calls? Drop your website below and I will
              start your free audit.
            </p>
            <AuditForm
              endpoint={FORMSPREE_HERO_ENDPOINT}
              serviceLabel="Free SEO Audit (Chat Assistant)"
              buttonLabel="Start My Audit"
              formType="custom_form"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Prefer a person? Call{' '}
              <a href={`tel:${SITE_PHONE_TEL}`} className="font-semibold text-brand hover:underline">
                {SITE_PHONE}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {!isOpen && !bubbleDismissed && (
        <button
          onClick={() => {
            setIsOpen(true);
            setBubbleDismissed(true);
          }}
          className="max-w-[240px] rounded-2xl rounded-br-md border border-hairline bg-white px-4 py-3 text-left text-sm font-semibold text-navy shadow-xl transition-transform hover:-translate-y-0.5"
        >
          Want your free audit? I can start it now.
        </button>
      )}

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setBubbleDismissed(true);
        }}
        aria-label={isOpen ? 'Close the assistant' : 'Open the assistant'}
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-xl transition-transform hover:scale-105"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default ChatAssistant;
