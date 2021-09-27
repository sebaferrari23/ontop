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

export const FiltersMenu = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  margin-bottom: 30px;
`;
