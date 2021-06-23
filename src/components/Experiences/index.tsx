import React, { useEffect, useState } from 'react';

import { experiences } from './experiences';
import { SectionTitle } from 'components/SectionTitle';

import * as S from './styles';

export const Experiences = () => {

  const [slice, setSlice] = useState(3);
  const [exp, setExp] = useState(experiences);

  useEffect(() => {
    setExp(experiences.slice(0, slice));
  }, [slice]);

  return (
    <S.ExperiencesContainer id='experiences'>
      <SectionTitle>Experiences</SectionTitle>
      {exp.map(experience => (
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
      <S.ButtonLink onClick={() => {
        setSlice(slice + 3)
      }} dark={false}>
        More Experiences
      </S.ButtonLink>
    </S.ExperiencesContainer>
  );
};
