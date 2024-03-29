import { useRef, createRef } from 'react'
import Statusbar from '../Statusbar'
import BtnCircle from '../BtnCircle'
import Menu from '../Menu'
import { 
  BoxTable, 
  TableContainer, 
  TableHeader, 
  TableData, 
  TableUser,
  MenuContainer
} from './styled'
import OptionsIcon from '../../assets/svg/options.svg'
import EditIcon from '../../assets/svg/edit-gray.svg'
import SignIcon from '../../assets/svg/sign-gray.svg'
import DocIcon from '../../assets/svg/doc-gray.svg'
import DeleteIcon from '../../assets/svg/delete.svg'

const Table = ({ items }) => {

  // TO FIX
  // const refArr = Array(items.length).fill(createRef());
  // let menusRefs = useRef(refArr);
  let menusRefs = useRef([createRef(), createRef(), createRef()]);

  // Format price
  let formatPrice = Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
    minimumFractionDigits: 0,
  });

  const optionsDate = { year: 'numeric', month: 'short', day: 'numeric' };

  return (
    <BoxTable>
      { items.length > 0 ?
        <TableContainer>
          <thead>
            <tr>
              <TableHeader>Contractor name</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader>Start date</TableHeader>
              <TableHeader>Amount</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
          { items.map((item, i) => 
            <tr key={i}>
              <TableData>
                <TableUser>
                  <img src={item.avatar} alt={item.name} />
                  {item.name}
                </TableUser>
              </TableData>
              <TableData data-th="Type">{item.type}</TableData>
              <TableData data-th="Start date">{item.start_date.toLocaleDateString("en-US", optionsDate)}</TableData>
              <TableData data-th="Amount">{formatPrice.format(item.amount)} USD</TableData>
              <TableData data-th="Status">
                <Statusbar status={item.status} />
              </TableData>
              <TableData data-th="Actions">
                <MenuContainer>
                  <BtnCircle onClick={() => menusRefs.current[i].current.toggle()}>
                    <img src={OptionsIcon} alt="Options" />
                  </BtnCircle>
                  <Menu ref={menusRefs.current[i]}>
                    <a href="/">
                      <img src={EditIcon} alt=""/>
                      Edit
                    </a>
                    <a href="/">
                      <img src={SignIcon} alt=""/>
                      Sign
                    </a>
                    <a href="/">
                      <img src={DocIcon} alt="" />
                      View summary
                    </a>
                    <a href="/">
                      <img src={DeleteIcon} alt=""/>
                      Delete
                    </a>
                  </Menu>
                </MenuContainer>
              </TableData>
            </tr>
          )}
          </tbody>
        </TableContainer>
      : 
        <p>You don't have any contracts</p>
      }
    </BoxTable>
  )
}

export default Table
