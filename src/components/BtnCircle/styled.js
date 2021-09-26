import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 5px;
  border-radius: 50%;
  transition: all .3s ease-in-out;
  &:hover {
    background-color: rgba(0,0,0,.05);
  }
  &:active {
    background-color: rgba(0,0,0,.1);
  }
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
