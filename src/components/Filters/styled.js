import styled from 'styled-components';
import { breakpoint } from '../../utils'
import searchIcon from '../../assets/svg/search-gray.svg'

export const FiltersContainer = styled.div`
  margin-bottom: 30px;
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
`;

export const FiltersBtns = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  padding: 10px 5px;
  background: #fff;
  z-index: 999;
  left: 0;
  right: 0;
  @media only screen and ${breakpoint.device.sm} {
    position: static;
    z-index: 1;
    margin-left: auto;
    width: auto;
    padding: 0;
    background-color: transparent;
  }
  button {
    margin: 0 5px;
    width: 100%;
    @media only screen and ${breakpoint.device.sm} {
      width: auto;
      margin: 0 0 0 20px;
    }
  }
`;

export const Searchbar = styled.input`
  background-color: var(--white);
  width: 100%;
  height: 50px;
  border: 1px solid #C4C4C4;
  color: var(--grey);
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 10px center;
  padding: 0 20px 0 45px;
  font-family: var(--main-font);
  font-size: 1.115rem;
  border-radius: var(--border-radius);
  @media only screen and ${breakpoint.device.sm} {
    height: 60px;
    padding: 0 20px 0 60px;
    font-size: 1rem;
    background-position: 20px center;
  }
  ::placeholder {
    color: #C4C4C4;
  }
  ::-ms-input-placeholder {
    color: #C4C4C4;
  }
  &:focus {
    outline-color: var(--primary);
  }
`;

export const Input = styled.input`
  background-color: var(--white);
  width: 100%;
  height: 50px;
  border: none;
  color: var(--grey);
  padding: 0 15px;;
  font-family: var(--main-font);
  font-size: 1rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
  transition: all .2s ease-in-out;
  @media only screen and ${breakpoint.device.sm} {
    height: 40px;
    font-size: 0.75rem;
    max-width: ${props => (props.maxWidth ? props.maxWidth : 'none')};
  }
  &:focus {
    box-shadow: 0 4px 20px rgba(0,0,0,.1);
    outline: none;
  }
  ::placeholder {
    color: #C4C4C4;
  }
  ::-ms-input-placeholder {
    color: #C4C4C4;
  }
`;

export const Select = styled.select`
  background-color: var(--white);
  width: 100%;
  height: 50px;
  border: none;
  color: var(--grey);
  padding: 0 15px;
  font-family: var(--main-font);
  font-size: 1rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
  transition: all .2s ease-in-out;
  @media only screen and ${breakpoint.device.sm} {
    height: 40px;
    font-size: 0.75rem;
    max-width: ${props => (props.maxWidth ? props.maxWidth : 'none')};
  }
  &:focus {
    box-shadow: 0 4px 20px rgba(0,0,0,.1);
    outline: none;
  }
  ::placeholder {
    color: #C4C4C4;
  }
  ::-ms-input-placeholder {
    color: #C4C4C4;
  }
`;

export const FiltersMenu = styled.div`
  display: grid;
  background-color: var(--white);
  grid-gap: 1rem;
  position: relative;
  transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(100%)')};
  box-shadow: 0 -4px 15px rgba(0,0,0,.1);
  transition: all .3s ease-in-out;
  position: fixed;
  z-index: 900;
  left: 0;
  right: 0;
  padding: 1rem;
  bottom: 80px;
  @media only screen and ${breakpoint.device.sm} {
    margin-bottom: ${props => (props.isOpen ? '30px' : '-40px')};
    z-index: ${props => (props.isOpen ? '1' : '-1')};
    opacity: ${props => (props.isOpen ? '1' : '0')};
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    transform: none;
    display: flex;
    position: static;
    grid-gap: 1rem;
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }
`;
