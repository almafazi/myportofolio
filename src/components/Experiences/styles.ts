import { WithTheme } from 'models/interfaces';
import styled from 'styled-components';

type ExperienceTitleProps = WithTheme;
type ExperienceDateProps = WithTheme;
type ExperienceJobTitleProps = WithTheme;
type ExperienceDescriptionProps = WithTheme;
type ChipProps = WithTheme;
type ExperiencesItemProps = WithTheme;
interface ButtonLinkProps extends WithTheme {
  dark: boolean;
}

export const ExperiencesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const ExperienceTitle = styled.h3<ExperienceTitleProps>`
  font-weight: 600;
  font-size: ${({ theme }: ExperienceTitleProps) => theme.fontSizes.large};
  color: ${({ theme }: ExperienceTitleProps) => theme.colors.white};
`;

export const ExperienceDate = styled.p<ExperienceDateProps>`
  font-weight: 400;
  font-size: ${({ theme }: ExperienceDateProps) => theme.fontSizes.small};
  color: ${({ theme }: ExperienceDateProps) => theme.colors.typography.main};
`;

export const ExperienceJobTitle = styled.h4<ExperienceJobTitleProps>`
  font-weight: 600;
  font-size: ${({ theme }: ExperienceJobTitleProps) => theme.fontSizes.default};
  color: ${({ theme }: ExperienceJobTitleProps) => theme.colors.white};
`;

export const ExperienceDescription = styled.p<ExperienceDescriptionProps>`
  font-weight: 400;
  font-size: ${({ theme }: ExperienceDescriptionProps) => theme.fontSizes.default};
  color: ${({ theme }: ExperienceDescriptionProps) => theme.colors.typography.main};
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 0;
  margin: 8px 0px;
`;

export const Chip = styled.div<ChipProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  background-color: ${({ theme }: ChipProps) => theme.colors.primary.main};
  font-weight: 600;
  font-size: ${({ theme }: ChipProps) => theme.fontSizes.extraSmall};
  color: ${({ theme }: ChipProps) => theme.colors.white};
  text-transform: uppercase;
  padding: 2px 12px;
  border-radius: 10px;
  margin-right: 8px;
  margin-bottom: 8px;

  @media (min-width: ${({ theme }: ChipProps) => theme.breakpoints.sm}) {
    padding: 2px 18px;
    height: 24px;
    border-radius: 20px;
  }
`;

export const ExperienceItem = styled.div<ExperiencesItemProps>`
  margin: 16px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;

  @media (min-width: ${({ theme }: ExperiencesItemProps) => theme.breakpoints.lg}) {
    width: 60%;
  }
`;

export const ButtonLink = styled.a<ButtonLinkProps>`
  cursor: pointer;
  display: ${({ dark }: ButtonLinkProps) => (dark ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  grid-column: 1 / 3;
  grid-row: 3;
  height: 40px;
  background-color: ${({ dark, theme }: ButtonLinkProps) => (dark ? theme.colors.primary.main : theme.colors.secondary.main)};
  font-weight: 600;
  color: ${({ theme }: ButtonLinkProps) => theme.colors.white};
  font-size: ${({ theme }: ButtonLinkProps) => theme.fontSizes.default};
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  justify-self: center;
  align-self: center;
  margin-top: 15px;
  text-decoration: none;
  transition: background-color 500ms;

  &:hover {
    background-color: ${({ dark, theme }: ButtonLinkProps) => (dark ? theme.colors.primary.dark : theme.colors.secondary.dark)};
  }

  @media (min-width: ${({ theme }: ButtonLinkProps) => theme.breakpoints.md}) {
    animation: unset;
    font-size: ${({ theme }: ButtonLinkProps) => theme.fontSizes.small};
    display: flex;
    grid-column: unset;
    grid-row: unset;
  }

  @media (max-width: ${({ theme }: ButtonLinkProps) => theme.breakpoints.xs}) {
    justify-self: flex-start;
  }
`;