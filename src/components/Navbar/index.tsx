import React, { useState } from 'react';

import { Logo } from 'components/Logo';
import * as S from './styles';

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <S.NavbarContainer open={open}>
      <Logo dark={!open} alt="That's my logo Almafazi" />
      <S.MenuIcon aria-label='Hamburger menu' onClick={() => setOpen(!open)} open={open} />
      <S.NavList open={open}>
        <a onClick={() => open && setOpen(!open)} href='#header'>
          Home
        </a>
        <a onClick={() => open && setOpen(!open)} href='#techs'>
          Techs
        </a>
        <a onClick={() => open && setOpen(!open)} href='#experiences'>
          Experiences
        </a>
        {/* <a onClick={() => open && setOpen(!open)} href='#about'>
          About
        </a> */}
      </S.NavList>
      <S.ButtonLink onClick={() => open && setOpen(!open)} href='#contact' dark={!open}>
        Contact
      </S.ButtonLink>
    </S.NavbarContainer>
  );
};
