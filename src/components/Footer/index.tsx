import React from 'react';

import { socialMedias } from './socialMedias';

import * as S from './styles';

export const Footer = () => {
  return (
    <S.FooterContainer id='footer'>
      <S.FooterTitle>Follow me on my social media</S.FooterTitle>
      <S.SocialMediaContainer>
        {socialMedias.map(item => (
          <a key={item.url} href={item.url} rel='noopener'>
            <img src={item.icon} width="45" alt='Social media icon' />
          </a>
        ))}
      </S.SocialMediaContainer>
    </S.FooterContainer>
  );
};
