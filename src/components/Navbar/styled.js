import styled from 'styled-components';
import { breakpoint } from '../../utils'

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 900;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 24px rgba(0,0,0,.08);
  padding: 0 1rem;
  background-color: var(--white);
  @media only screen and ${breakpoint.device.sm} {
    height: 80px;
  }
  @media only screen and ${breakpoint.device.md} {
    padding: 0 40px;
    height: 100px;
  }
  @media only screen and ${breakpoint.device.lg} {
    padding: 0 60px;
  }
`;

export const Logo = styled.h1`
  a {
    display: block;
    img {
      max-width: 100%;
      max-height: 30px;
      @media only screen and ${breakpoint.device.sm} {
        max-height: none;
      }
    }
  }
`;

export const Nav = styled.nav`
  height: 100%;
  display: none;
  @media only screen and ${breakpoint.device.md} {
    display: block;
  }
  ul {
    height: 100%;
    display: flex;
    li {
      height: 100%;
      margin: 0 20px;
      @media only screen and ${breakpoint.device.lg} {
        margin: 0 25px;
      }
    }
  }
`;

export const NavItem = styled.a`
  height: 100%;
  padding: 0 10px;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: ${props => (props.isActive ? 'var(--primary)' : 'var(--grey)')};
  text-decoration: none;
  border-bottom-style: solid;
  border-bottom-width: 6px;
  border-bottom-color: ${props => (props.isActive ? 'var(--primary)' : 'transparent')};
  transition: all .2s ease-in-out;
  @media only screen and ${breakpoint.device.lg} {
    font-size: 1.125rem;
  }
  img {
    margin-right: 10px;
    filter: ${props => (props.isActive ? 'grayscale(0)' : 'grayscale(100%)')};
    transition: all .2s ease-in-out;
  }
  &:after {
    display: ${props => (props.hasSubmenu ? 'block' : 'none')};
    content: '';
    border-bottom: 2px solid ${props => (props.isActive ? 'var(--primary)' : 'var(--grey)')};
    border-left: 2px solid ${props => (props.isActive ? 'var(--primary)' : 'var(--grey)')};
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
  @media only screen and ${breakpoint.device.md} {
    margin-left: 40px;
  }
  img {
    max-width: 30px;
    @media only screen and ${breakpoint.device.sm} {
      max-width: 50px;
    }
    @media only screen and ${breakpoint.device.md} {
      max-width: 65px;
    }
  }
  &:before {
    @media only screen and ${breakpoint.device.md} {
      display: block;
      content: '';
      position: relative;
      left: -40px;
      width: 1px;
      height: 45px;
      background-color: var(--grey-light);
      opacity: .5;
    }
  }
  &:after {
    @media only screen and ${breakpoint.device.md} {
      display: block;
      content: '';
      border-bottom: 3px solid var(--grey-light);
      border-left: 3px solid var(--grey-light);
      height: 10px;
      width: 10px;
      transform: rotate(-45deg);
      margin-left: 13px;
    }
  }
`;

export const BtnMenuMobile = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 28px;
  height: 28px;
  @media only screen and ${breakpoint.device.sm} {
  width: 50px;
  }
  @media only screen and ${breakpoint.device.md} {
    display: none;
  }
  span,
  &:before,
  &:after,
  span {
    content: '';
    display: block;
    background-color: var(--primary);
    height: 2px;
    width: 28px;
    left: 50%;
    margin-left: -14px;
    position: absolute;
    transition: all .4s ease;
  }
  &:before {
    transform: translateY(-7px);
  }
  &:after {
    transform: translateY(7px);
  }
`;