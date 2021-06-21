import React from 'react';
import Typed from 'react-typed';

import * as S from './styles';

export const Header = () => {
  return (
    <S.HeaderContainer id='header'>
      <S.HeroTextContainer>
        <S.HeroTitle>
          Hello I&apos;m <S.HeroTextOrange>Almafazi</S.HeroTextOrange>
        </S.HeroTitle>
        <S.HeroText>and I&apos;m a </S.HeroText>
        <S.HeroDescription>Software Developer.</S.HeroDescription>
        <S.HeroText>
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "<span class='accent'>Web Developer.</span>",
              "<span class='accent'>Mobile Developer.</span>",
              "<span class='accent'>Full Stack.</span>",
            ]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar='|'
            className='typed'
          />
        </S.HeroText>
      </S.HeroTextContainer>
      <S.HeroDraw alt='Draw of a programmer using a computer' />
    </S.HeaderContainer>
  );
};
