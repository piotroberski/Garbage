import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import mixins from 'styles/mixins';
import home from '../../icons/home.png';
import map from '../../icons/map.png';
import stats from '../../icons/stats.png';
import trucks from '../../icons/trucks.png';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 99;
  background: #70a9a1;
  padding: 13px 20px 13px 13px;
  border-radius: 0 0 40px 0;

  ${mixins.sm`
    padding: 23px 30px 23px 23px;
		border-radius: 0 0 60px 0;
  `}
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  margin-right: 24px;
  padding: 5px;

  &:last-child {
    margin-right: 0;
  }

  ${mixins.sm`
    margin-right: 48px;
  `}

  &.active {
    filter: invert(80%);
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/">
        <img src={home} alt="home" />
      </StyledNavLink>
      <StyledNavLink to="/map">
        <img src={map} alt="map" />
      </StyledNavLink>
      <StyledNavLink to="/stats">
        <img src={stats} alt="stats" />
      </StyledNavLink>
      <StyledNavLink to="/trucks">
        <img src={trucks} alt="trucks" />
      </StyledNavLink>
    </StyledNav>
  );
};

export default Navbar;
