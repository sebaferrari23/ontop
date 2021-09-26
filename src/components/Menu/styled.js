import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: absolute;
  right: 0;
  top: 46px;
  min-width: 162px;
  box-shadow: 0px 4px 15px rgba(0,0,0,.1);
  border-radius: var(--border-radius);
  background-color: var(--white);
  text-align: left;
  z-index: 10;
  padding: 5px 10px;
  transform-origin: right top;
  transition: all .1s ease-in-out;
  opacity: ${props => (props.active ? '1' : '0')};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transform: ${props => (props.active ? 'scale(1)' : 'scale(0)')};
  a {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #EBEBEB;
    font-size: 14px;
    padding: 10px 5px;
    transition: all .2s ease-in-out;
    img {
      margin-right: 10px;
    }
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background-color: rgba(0,0,0,.05);
    }
  }
`;