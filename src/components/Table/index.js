import Statusbar from '../Statusbar';
import { 
  BoxTable, 
  TableContainer, 
  TableRow, 
  TableHeader, 
  TableData, 
  TableUser 
} from './styled'
import OptionsIcon from '../../assets/svg/options.svg'

const Table = ({ items }) => {

  console.log(items);

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
          <TableRow>
            <TableHeader>Contractor name</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Start date</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
          { items.map((item, i) => 
            <TableRow key={i}>
              <TableData>
                <TableUser>
                  <img src={item.avatar} alt={item.name} />
                  {item.name}
                </TableUser>
              </TableData>
              <TableData>{item.type}</TableData>
              <TableData>{item.start_date.toLocaleDateString("en-US", optionsDate)}</TableData>
              <TableData>{formatPrice.format(item.amount)} USD</TableData>
              <TableData>
                <Statusbar status={item.status} />
              </TableData>
              <TableData>
                <button type="button">
                  <img src={OptionsIcon} alt="Options" />
                </button>
              </TableData>
            </TableRow>
          )}
        </TableContainer>
      : 
        <p>You don't have any contracts</p>
      }
    </BoxTable>
  )
}

export default Table
