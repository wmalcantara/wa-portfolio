import React from 'react';

import { FooterContainer, FooterContent } from './styled';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p className="walter">Made with ❤ by
          <a href="https://github.com/wmalcantara" target='_blank' rel="noreferrer">
            Walter
          </a>
        </p>
      </FooterContent>
    </FooterContainer>
  );
}
