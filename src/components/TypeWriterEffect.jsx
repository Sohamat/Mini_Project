import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        if (currentIndex === text.length) {
          clearInterval(interval);
          return prevText;
        }
        return prevText + text[currentIndex];
      });
      currentIndex++;
    }, 300); // Adjust typing speed as needed
    
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="text-zinc-100 text-[8vw]">
      {displayText}
    </div>
  );
};

export default Typewriter;
