import styled from 'styled-components';
import { breakpoint } from '../../utils'

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
  height: 30px;
  border-radius: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  @media only screen and ${breakpoint.device.sm} {
    width: 100%;
  }
  @media only screen and ${breakpoint.device.md} {
    min-width: 160px;
  }
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