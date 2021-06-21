import React from 'react';

import { experiences } from './experiences';
import { SectionTitle } from 'components/SectionTitle';

import * as S from './styles';

export const Experiences = () => {
  return (
    <S.ExperiencesContainer id='experiences'>
      <SectionTitle>Experiences</SectionTitle>
      {experiences.map(experience => (
        <S.ExperienceItem key={experience.company}>
          <S.ExperienceTitle>{experience.company}</S.ExperienceTitle>
          <S.ExperienceDate>
            {experience.startDate} until {experience.endDate || 'now'}
          </S.ExperienceDate>
          <S.ExperienceJobTitle>{experience.jobTitle}</S.ExperienceJobTitle>
          <S.ExperienceDescription>{experience.description}</S.ExperienceDescription>
          <S.ChipsContainer>
            {experience.techs?.map(tech => (
              <S.Chip key={tech.title}>{tech.title}</S.Chip>
            ))}
          </S.ChipsContainer>
        </S.ExperienceItem>
      ))}
    </S.ExperiencesContainer>
  );
};
