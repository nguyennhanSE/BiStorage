// components/chat/ChatPanelShell.tsx
'use client';
import React, { useEffect, useRef } from 'react';

export default function ChatPanel({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus khi mở + ESC để đóng
  useEffect(() => {
    if (open) inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div className={`fixed inset-0 bg-black/30 z-[100] transition-opacity ${ open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Chat panel */}
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed bottom-12 right-15 w-[380px] max-h-[70vh] z-[100]
        bg-white rounded-2xl border border-black/10
        shadow-[0_12px_40px_rgba(0,0,0,0.18)]
        overflow-hidden flex flex-col
        transition-all duration-300 ease-out
        ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <header className="px-4 py-3 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-violet-600 text-white grid place-items-center text-xs">
              AI
            </div>
            <span className="font-semibold">BiChat</span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900"
            aria-label="Close chat"
          >
            ✕
          </button>
        </header>

        {/* Body (demo) */}
        <div className="flex-1 p-4 overflow-auto space-y-3">
          <div className="text-sm text-gray-500 text-center">
            Ask me anything about your files…
          </div>
          <div className="max-w-[85%] rounded-lg bg-gray-100 px-3 py-2 text-sm">
            Hello! How can I help?
          </div>
          <div className="max-w-[85%] rounded-lg bg-violet-50 px-3 py-2 text-sm ml-auto">
            Can you summarize my storage?
          </div>
        </div>

        {/* Input */}
        <div className="p-3 border-t flex gap-2">
          <input
            ref={inputRef}
            className="flex-1 rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-violet-300"
            placeholder="Message AI…"
          />
          <button className="px-3 py-2 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-sm hover:opacity-95">
            Send
          </button>
        </div>
      </div>
    </>
  );
}
