'use client';

import { ChatRequestOptions } from 'ai';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import React, { useEffect } from 'react';

interface ChatBottombarProps {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  isLoading: boolean;
  stop: () => void;
  input: string;
  isToolInProgress: boolean;
}

export default function ChatBottombar({
  input,
  handleInputChange,
  handleSubmit,
  isLoading,
  stop,
  isToolInProgress,
}: ChatBottombarProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.nativeEvent.isComposing &&
      !isToolInProgress &&
      input.trim()
    ) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full pb-2 md:pb-8"
    >
      <form onSubmit={handleSubmit} className="relative w-full md:px-4">
        <div className="mx-auto flex items-center rounded-full border border-neutral-200 bg-white/30 py-2 pr-2 pl-6 backdrop-blur-lg transition-all hover:border-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-neutral-600">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            placeholder={
              isToolInProgress ? 'Tool wird ausgeführt...' : 'Frag mich etwas...'
            }
            className="text-md w-full border-none bg-transparent text-neutral-800 placeholder:text-neutral-500 focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-500"
            disabled={isToolInProgress || isLoading}
          />

          <button
            type="submit"
            disabled={isLoading || !input.trim() || isToolInProgress}
            className="flex items-center justify-center rounded-full bg-[#0171E3] p-2 text-white transition-colors hover:bg-blue-600 disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={(e) => {
              if (isLoading) {
                e.preventDefault();
                stop();
              }
            }}
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}
