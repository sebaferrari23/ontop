import {useState, createContext} from 'react'

export const Store = createContext();

const StoreProvider = ({children})=>{

  const [contracts, setContracts] = useState([
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      start_date: new Date(2021,3,4),
      amount: 200,
      status: 'Active',
    },
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      start_date: new Date(2021,3,4),
      amount: 200,
      status: 'Active',
    },
    {
      name: 'Darlene Robertson',
      type: 'Traditional',
      start_date: new Date(2021,3,4),
      amount: 200,
      status: 'Signature pending',
    },
  ]);

  return(
    <Store.Provider
      value={{
        contracts,
        setContracts
      }}
    >
      {children}
    </Store.Provider>
  )
}

export default StoreProvider;