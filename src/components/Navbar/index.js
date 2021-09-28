import { useContext } from 'react'
import { Store } from '../../store'
import LogoOntop from '../../assets/png/logo-ontop.png'
import UserIcon from '../../assets/svg/user.svg'
import DocIcon from '../../assets/svg/doc.svg'
import CardIcon from '../../assets/svg/card.svg'
import CalendarIcon from '../../assets/svg/calendar.svg'

import { 
  Header, 
  Logo, 
  Nav, 
  NavItem, 
  UserNav, 
  BtnMenuMobile 
} from './styled';

const Navbar = () => {

  const data = useContext(Store);
  const { userInfo } = data;

  return (
    <Header>
      <BtnMenuMobile><span></span></BtnMenuMobile>
      <Logo><a href="/"><img src={LogoOntop} alt="Ontop" /></a></Logo>
      <Nav>
        <ul>
          <li>
            <NavItem href="/" hasSubmenu isActive>
              <img src={UserIcon} alt="" />
              Contracts
            </NavItem>
          </li>
          <li>
            <NavItem href="/" hasSubmenu>
              <img src={DocIcon} alt="" />
              Documents
            </NavItem>
          </li>
          <li>
            <NavItem href="/" hasSubmenu>
              <img src={CardIcon} alt="" />
              Payout
            </NavItem>
          </li>
          <li>
            <NavItem href="/" hasSubmenu>
              <img src={CalendarIcon} alt="" />
              Time
            </NavItem>
          </li>
        </ul>
      </Nav>
      <UserNav>
        <img src={userInfo.avatar} alt={userInfo.name} />
      </UserNav>
    </Header>
  )
}

export default Navbar
