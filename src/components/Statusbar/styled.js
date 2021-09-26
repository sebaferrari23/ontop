import styled from 'styled-components';

export const Status = styled.span`
  display: inline-flex;
  align-items: center;
  background-color: ${props => 
    (props.color === 'active' ? 'rgba(54,207,130,.18);' : 
    'rgba(242,157,66,.3);'
  )};
  color: ${props => (props.color === 'active' ? '#36CF82' : '#F29D42')};
  padding: 0 20px 0 30px;
  font-size: 0.75rem;
  font-weight: 700;
  min-width: 160px;
  height: 30px;
  border-radius: 15px;
  position: relative;
  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${props => (props.color === 'active' ? '#36CF82' : '#F29D42')};
    left: 15px;
  }
`;