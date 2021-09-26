import styled from 'styled-components';
import { breakpoint } from '../../utils'

export const BoxTable = styled.div`
  background-color: var(--white);
  padding: 10px 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,.1);
  border-radius: var(--border-radius);
`;

export const TableContainer = styled.table`
  border-collapse: separate;
  border-spacing: 0 20px;
  margin-top: -20px;
  width: 100%;
`;

export const TableHeader = styled.th`
  font-weight: 700;
  text-align: left;
  padding: 20px;
  &:first-child,
  &:last-child {
    text-align: center;
  }
`;

export const TableData = styled.td`
  vertical-align: middle;
  padding: 25px 20px;
  font-size: 14px;
  background-color: var(--bg-primary);
  &:last-child {
    text-align: center;
  }
`;

export const TableUser = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 15px;
  }
`;

export const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;