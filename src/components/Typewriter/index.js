import { useEffect } from 'react';

import { TypewriterWrapper } from './styled.js';

export default function Typewriter({ children }) {
  useEffect(() => {
    const typewriterTarget = document.querySelector('.typewriter-title');

    if (typewriterTarget !== null) {
      var textArr = typewriterTarget.innerHTML.split('');

      typewriterTarget.innerHTML = '';
      textArr.forEach((letter, i) => {
        setTimeout(() => (typewriterTarget.innerHTML += letter), 70 * i);
      });
    }
  }, []);

  return (
    <TypewriterWrapper className="typewriter-title">
      {children}
    </TypewriterWrapper>
  );
}
