import React from 'react';

import * as S from './styles';

export const Contact = () => {
  return (
    <S.HireMeContainer id='contact'>
      <S.HireMeDraw alt='Draw of a person sending email' />
      <S.HireMeTextContainer>
        <S.HireMeTitle>Let&apos;s talk</S.HireMeTitle>
        <S.HireMeEmail href='mailto:almafazi@yahoo.com'>almafazi@yahoo.com</S.HireMeEmail>
      </S.HireMeTextContainer>
    </S.HireMeContainer>
  );
};
