'use client';
import { useRouter } from 'next/navigation';

export function useTransitionHook() {
  const router = useRouter();
  const nav = async (to: string) => {
    const cover = (window as any).__pageTransitionCover as undefined | (() => Promise<void>);
    if (cover) await cover();      
    router.push(to);                
  };

  return nav;
}
