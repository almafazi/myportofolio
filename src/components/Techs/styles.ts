import styled from 'styled-components';

import { WithTheme } from 'models/interfaces';

type HorizontalScrollContainerProps = WithTheme;

export const LanguagesContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const CardsContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 10px 1fr 10px;
  cursor: pointer;

  &::before {
    content: '';
  }
  &::after {
    content: '';
  }
`;

export const HorizontalScrollContainer = styled.div<HorizontalScrollContainerProps>`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${({ theme }: HorizontalScrollContainerProps) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }
`;

export const LanguageIcon = styled.img`
  width: 15%;
  position: absolute;
  right: 8px;
  bottom: 8px;
`;

export const SwipeNote = styled.span`
  display: none;
  @media (max-width: ${({ theme }: HorizontalScrollContainerProps) => theme.breakpoints.xs}) {
    display: block;
    color: #ececec;
    font-style: italic;
    margin-top: 12px;
  }
`;
