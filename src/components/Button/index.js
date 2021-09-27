import { Btn } from './styled'

const Button = ({ onClick, children, color, size }) => {
  return (
    <Btn onClick={onClick} color={color} size={size}>
      { children }
    </Btn>
  )
}

export default Button
