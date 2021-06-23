import React from 'react';

import { Card, CardDescription, CardTitle } from 'components/Card';
import { SectionTitle } from 'components/SectionTitle';
import { techsItems } from './techs';

import * as S from './styles';

export const Techs = () => {
  return (
    <S.LanguagesContainer id='techs'>
      <SectionTitle>Tech Stack</SectionTitle>
      <S.CardsContainer>
        <S.HorizontalScrollContainer>
          {techsItems.map(item => (
            <Card key={item.title}>
              <CardTitle>{item.title}</CardTitle>
              {item.years ? (
                <CardDescription>{`${item.years} years of experience`}</CardDescription>
              ) : (
                <CardDescription>{`${item.months} months of experience`}</CardDescription>
              )}
              <S.LanguageIcon src={item.iconUrl} alt={`Icon representing ${item.title} programming language`} />
            </Card>
          ))}
        </S.HorizontalScrollContainer>
      </S.CardsContainer>
      <S.SwipeNote>&lt; swipe &gt;</S.SwipeNote>
    </S.LanguagesContainer>
  );
};
