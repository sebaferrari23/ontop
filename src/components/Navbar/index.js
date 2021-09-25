import Logo from '../../assets/png/logo-ontop.png'
import Avatar from '../../assets/png/user-avatar.png'
import UserIcon from '../../assets/svg/user.svg'
import DocIcon from '../../assets/svg/doc.svg'
import CardIcon from '../../assets/svg/card.svg'
import CalendarIcon from '../../assets/svg/calendar.svg'

import { Header, Nav, NavItem, UserNav } from './styled';

const Navbar = () => {
  return (
    <Header>
      <h1><a href="/"><img src={Logo} alt="Ontop" /></a></h1>
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
        <img src={Avatar} alt="" />
      </UserNav>
    </Header>
  )
}

export default Navbar
