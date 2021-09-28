import styled from 'styled-components';
import searchIcon from '../../assets/svg/search-gray.svg'

export const FiltersContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const FiltersBtns = styled.div`
  display: flex;
  margin-left: auto;
  button {
    margin-left: 20px;
  }
`;

export const Searchbar = styled.input`
  background-color: var(--white);
  width: 100%;
  height: 60px;
  border: 1px solid #C4C4C4;
  color: var(--grey);
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 25px center;
  padding: 0 20px 0 60px;
  font-family: var(--main-font);
  font-size: 1rem;
  border-radius: var(--border-radius);
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
  height: 40px;
  border: none;
  color: var(--grey);
  padding: 0 15px;;
  font-family: var(--main-font);
  font-size: 0.75rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
  max-width: ${props => (props.maxWidth ? props.maxWidth : 'none')};
  transition: all .2s ease-in-out;
  margin: 0 14px;
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
  height: 40px;
  border: none;
  color: var(--grey);
  padding: 0 15px;;
  font-family: var(--main-font);
  font-size: 0.75rem;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 10px rgba(0,0,0,.1);
  max-width: ${props => (props.maxWidth ? props.maxWidth : 'none')};
  transition: all .2s ease-in-out;
  margin: 0 14px;
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
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  margin-bottom: ${props => (props.isOpen ? '30px' : '-40px')} ;
  position: relative;
  z-index: ${props => (props.isOpen ? '1' : '-1')} ;
  opacity: ${props => (props.isOpen ? '1' : '0')} ;
  display: flex;
  margin-left: -14px;
  margin-right: -14px;
  transition: all .3s ease-in-out;
`;
