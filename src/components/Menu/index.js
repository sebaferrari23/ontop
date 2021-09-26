import { MenuContainer } from './styled'

const Menu = ({ children, active }) => {
  return (
    <MenuContainer active={active}>
      {children}
    </MenuContainer>
  )
}

export default Menu
