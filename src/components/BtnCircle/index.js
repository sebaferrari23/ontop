import { Btn } from './styled'

const BtnCricle = ({ children, onClick }) => {
  return (
    <Btn type="button" onClick={onClick}>
      {children}
    </Btn>
  )
}

export default BtnCricle
