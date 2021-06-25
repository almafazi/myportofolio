import React, { useEffect, useState } from 'react';

import { experiences } from './experiences';
import { SectionTitle } from 'components/SectionTitle';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css';

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
        (slice >= experiences.length) ?
          setSlice(3) : setSlice(slice + 3)
      }} dark={false}>
      {(slice >= experiences.length) ?
       <S.ExperienceMoreText>Fewer Experiences</S.ExperienceMoreText> : <S.ExperienceMoreText>More Experiences</S.ExperienceMoreText>
      }
      {(slice >= experiences.length) ?
        <FontAwesomeIcon size='sm' icon={faChevronUp} /> :
        <FontAwesomeIcon size='sm' icon={faChevronDown} />
      }
      </S.ButtonLink>
    </S.ExperiencesContainer>
  );
};
