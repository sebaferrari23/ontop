import { BoxTable, TableContainer, TableRow, TableHeader, TableData } from './styled'

const Table = ({ items }) => {
  console.log(items);
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
                {item.name}
              </TableData>
              <TableData>{item.type}</TableData>
              <TableData>{/*item.start_date*/}</TableData>
              <TableData>{item.amount}</TableData>
              <TableData>{item.status}</TableData>
              <TableData>

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
