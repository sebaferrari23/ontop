import { useContext } from 'react'
import { Store } from '../../store'
import Layout from "../../components/Layout"
import Table from "../../components/Table"

const Contracts = () => {

  const data = useContext(Store);
  const { contracts } = data;
  
  return (
    <Layout title="Contracts for Client">
      <Table items={contracts} />
    </Layout>
  )
}

export default Contracts
