import styled from 'styled-components';
import { breakpoint } from '../../utils'

export const Section = styled.section`
  padding: 90px 0 80px 0;
  @media only screen and ${breakpoint.device.sm} {
    padding: 160px 0 60px 0;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  @media only screen and ${breakpoint.device.sm} {
    max-width: 100%;
  }
  @media only screen and ${breakpoint.device.md} {
    max-width: 1024px;
  }
  @media only screen and ${breakpoint.device.lg} {
    max-width: 1080px;
  }
`;

export const Title = styled.h2`
  color: var(--black);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
  @media only screen and ${breakpoint.device.sm} {
    font-size: 32px;
    margin-bottom: 60px;
  }
`;