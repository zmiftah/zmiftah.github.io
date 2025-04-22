import { useEffect, useState } from "react";

// First, let's modify the hook to return the display text
export default function TypingAnimation() {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    
    const textOptions = [
      'Software Developer',
      'Data Analyst',
      'Solution Architect'
    ];
  
    useEffect(() => {
      let timeout: string | number | NodeJS.Timeout;
      
      if (isTyping) {
        if (charIndex < textOptions[textIndex].length) {
          timeout = setTimeout(() => {
            setDisplayText(prev => prev + textOptions[textIndex][charIndex]);
            setCharIndex(prev => prev + 1);
          }, Math.random() * 50 + 70);
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, 2000);
        }
      } else {
        if (charIndex > 0) {
          timeout = setTimeout(() => {
            setDisplayText(prev => prev.slice(0, -1));
            setCharIndex(prev => prev - 1);
          }, 40);
        } else {
          timeout = setTimeout(() => {
            setTextIndex(prev => (prev + 1) % textOptions.length);
            setIsTyping(true);
          }, 500);
        }
      }
      
      return () => clearTimeout(timeout);
    }, [charIndex, isTyping, textIndex, textOptions]);

    return displayText;
}
