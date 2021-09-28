import styled from 'styled-components';
import { breakpoint } from '../../utils'

export const BoxTable = styled.div`
  @media only screen and ${breakpoint.device.sm} {
    background-color: var(--white);
    padding: 10px 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,.1);
    border-radius: var(--border-radius);
  }
`;

export const TableContainer = styled.table`
  width: 100%;
  display: block;
  @media only screen and ${breakpoint.device.sm} {
    display: table;
    border-collapse: separate;
    border-spacing: 0 10px;
    margin-top: -10px;
  }
  @media only screen and ${breakpoint.device.md} {
    border-spacing: 0 20px;
    margin-top: -20px;
  }
  thead {
    display: none;
    @media only screen and ${breakpoint.device.sm} {
      display: table-header-group;
    }
  }
  tbody {
    display: block;
    @media only screen and ${breakpoint.device.sm} {
      display: table-row-group;
    }
    tr {
      display: block;
      margin-bottom: 20px;
      background-color: var(--white);
      box-shadow: 0 4px 15px rgba(0,0,0,.1);
      border-radius: var(--border-radius);
      position: relative;
      @media only screen and ${breakpoint.device.sm} {
        display: table-row;
        box-shadow: none;
        border-radius: 0;
        background-color: transparent;
        margin-bottom: 0;
      }
    }
  }
`;

export const TableHeader = styled.th`
  font-weight: 700;
  text-align: left;
  padding: 10px;
  font-size: 0.75rem;
  @media only screen and ${breakpoint.device.md} {
    padding: 20px;
    font-size: 1rem;
  }
  &:first-child,
  &:last-child {
    @media only screen and ${breakpoint.device.md} {
      text-align: center;
    }
  }
`;

export const TableData = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
  border-top: 1px solid #EBEBEB;
  @media only screen and ${breakpoint.device.sm} {
    display: table-cell;
    vertical-align: middle;
    padding: 15px 10px;
    font-size: 0.75rem;
    background-color: var(--bg-primary);
    border-top: none;
  }
  @media only screen and ${breakpoint.device.md} {
    padding: 25px 20px;
    font-size: 0.875rem;
  }
  &:first-child {
    font-weight: 700;
    background-color: var(--white);
    border-radius: 5px 5px 0 0;
    border-top: none;
    padding: 25px 20px;
    @media only screen and ${breakpoint.device.sm} {
      font-weight: 400;
      padding: 15px 10px;
      background-color: var(--bg-primary);
      border-radius: 0;
    }
    @media only screen and ${breakpoint.device.md} {
      padding: 25px 20px;
    }
    &:before {
      display: none;
    }
  }
  &:last-child {
    border-top: none;
    padding: 0;
    &:before {
      display: none;
    }
    @media only screen and ${breakpoint.device.sm} {
      display: table-cell;
      text-align: center;
    }
  }
  &:before {
    display: block;
    content: attr(data-th);
    font-weight: 700;
    @media only screen and ${breakpoint.device.sm} {
      display: none;
    }
  }
`;

export const TableUser = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 15px;
    display: none;
    @media only screen and ${breakpoint.device.md} {
      display: block;
    }
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  @media only screen and ${breakpoint.device.sm} {
    position: relative;
    top: 0;
    right: 0;
    display: inline-block;
  }
`;