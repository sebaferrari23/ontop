import styled from 'styled-components';

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  height: 60px;
  border-radius: var(--border-radius);
  background-color: ${props => (props.color === 'primary' ? 'var(--primary)' : '#EBEBEB')};
  color: ${props => (props.color === 'primary' ? 'var(--white)' : '#1C0B11')};
  font-size: ${props => (props.size === 'lg' ? '1.125rem' : '1rem')};
  padding: ${props => (props.size === 'lg' ? '0 40px' : '0 20px')};
  box-shadow: ${props => (props.size === 'lg' ? '0 2px 10px rgba(0,0,0,.2)' : 'none')};
  font-weight: 700;
  white-space: nowrap;
  transition: all .3s ease-in-out;
  &:hover {
    transform: ${props => (props.size === 'lg' ? 'translateY(-4px)' : 'translateY(0)')};
    box-shadow: ${props => (props.size === 'lg' ? '0 4px 20px rgba(0,0,0,.15)' : 'none')};
    background-color: ${props => (props.color !== 'primary' ? 'var(--grey-light)' : 'var(--primary)')};
  }
  img {
    margin-right: 8px;
  }
`;