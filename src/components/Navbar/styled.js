import styled from 'styled-components';
import { breakpoint } from '../../utils'

export const Header = styled.header`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 24px rgba(0,0,0,.08);
  padding: 0 60px;
  background-color: var(--white);
  @media only screen and ${breakpoint.device.sm} {
    height: 100px;
  }
`;

export const Nav = styled.nav`
  height: 100%;
  ul {
    height: 100%;
    display: flex;
    li {
      height: 100%;
      margin: 0 25px;
    }
  }
`;

export const NavItem = styled.a`
  height: 100%;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--grey);
  text-decoration: none;
  border-bottom: 6px solid transparent;
  transition: all .2s ease-in-out;
  img {
    margin-right: 10px;
    filter: grayscale(100%);
    transition: all .2s ease-in-out;
  }
  &:after {
    display: ${props => (props.hasSubmenu ? 'block' : 'none')};
    content: '';
    border-bottom: 2px solid var(--grey);
    border-left: 2px solid var(--grey);
    height: 6px;
    width: 6px;
    transform: rotate(-45deg);
    margin-left: 7px;
    transition: all .2s ease-in-out;
  }
  &:hover {
    border-bottom-color: var(--primary);
    color: var(--primary);
    img {
      filter: grayscale(0);
    }
    &:after {
      border-bottom-color: var(--primary);
      border-left-color: var(--primary);
    }
  }
`;

export const UserNav = styled.button`
  display: flex;
  align-items: center;
  &:before {
    display: block;
    content: '';
    width: 1px;
    height: 45px;
    background-color: var(--grey-light);
    margin-right: 40px;
    opacity: .5;
  }
  &:after {
    display: block;
    content: '';
    border-bottom: 3px solid var(--grey-light);
    border-left: 3px solid var(--grey-light);
    height: 10px;
    width: 10px;
    transform: rotate(-45deg);
    margin-left: 13px;
  }
`;