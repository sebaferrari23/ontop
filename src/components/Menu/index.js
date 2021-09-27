import { useState, useEffect, forwardRef, useImperativeHandle, useRef } from 'react'
import { MenuContainer } from './styled'

const Menu = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      toggle: () => toggle(),
    };
  });

  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [open])

  const toggle = () => {
    setOpen(!open);
  };
  
  const checkIfClickedOutside = e => {
    if (open && ref.current && !menuRef.current.contains(e.target)) {
      setOpen(false)
    }
  }
  
  return (
    <MenuContainer active={open} ref={menuRef}>
      {props.children}
    </MenuContainer>
  )
});

export default Menu
