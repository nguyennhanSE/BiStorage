import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import AOS from 'aos';
import 'aos/dist/aos.css';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const initAOS = () => {
  AOS.init({
    duration: 1000,
    once: false,
    mirror : true 
  });
};