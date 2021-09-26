import { Status } from './styled'

const Statusbar = ({status }) => {
  return (
    <Status color={status}>
      { status === 'active' && <>Active</> }
      { status === 'pending' && <>Signature pending</> }
    </Status>
  )
}

export default Statusbar
