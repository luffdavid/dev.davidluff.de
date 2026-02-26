'use client';

import FluidCursor from '@/components/FluidCursor';
import FooterBigBlurred from '@/components/hefo/footer-big-blurred';
import HomeHeader from '@/components/hefo/home-header';
import HomeIntro from '@/components/home/home-intro';
import HomeCta from '@/components/home/home-cta';
import { placeholders } from '@/data/chat-input-placeholder';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const [input, setInput] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("");

  useEffect(() => {
    let charIndex = 0;
    let forward = true;

    const interval = setInterval(() => {
      const currentText = placeholders[placeholderIndex];

      if (forward) {
        setDisplayedPlaceholder(currentText.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentText.length) {
          forward = false;
          setTimeout(() => { }, 1500); // kurze Pause am Ende
        }
      } else {
        setDisplayedPlaceholder(currentText.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          forward = true;
          setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [placeholderIndex]);

  const goToChat = (query: string) =>
    router.push(`/chat?query=${encodeURIComponent(query)}`);


  useEffect(() => {
    const img = new window.Image();
    img.src = '/landing-memojis.png';

    const linkWebm = document.createElement('link');
    linkWebm.rel = 'prefetch';
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pb-10 md:pb-20">

      <HomeHeader isMobile={isMobile} goToChat={goToChat} />

      <div className="z-10 mt-4 w-full max-w-7xl px-2 md:px-4">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 lg:gap-16">
          {/* left side on desktop*/}
          <HomeIntro />
          {/* right: CTA + input */}
          <HomeCta
            goToChat={goToChat}
            input={input}
            setInput={setInput}
            inputRef={inputRef}
            displayedPlaceholder={displayedPlaceholder}
          />
        </div>
      </div>
      <FluidCursor />
      <FooterBigBlurred />
    </div>
  );
}
