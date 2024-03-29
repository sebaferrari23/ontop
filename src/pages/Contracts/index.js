import { useContext } from 'react'
import { Store } from '../../store'
import Layout from "../../components/Layout"
import Table from "../../components/Table"
import Filters from "../../components/Filters"

const Contracts = () => {

  const data = useContext(Store);
  const { contracts, userInfo } = data;
  
  return (
    <Layout title={`Contracts for ${userInfo.name}`}>
      <Filters />
      <Table items={contracts} />
    </Layout>
  )
}

export default Contracts
