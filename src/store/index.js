import {useState, createContext} from 'react'
import Avatar1 from '../assets/png/contractor-avatar1.png';
import Avatar2 from '../assets/png/contractor-avatar2.png';
import Avatar3 from '../assets/png/contractor-avatar3.png';

export const Store = createContext();

const StoreProvider = ({children})=>{

  const [contracts, setContracts] = useState([
    {
      name: 'Darlene Robertson',
      avatar: Avatar1,
      type: 'Traditional',
      start_date: new Date(2021,4,12),
      amount: 700,
      status: 'active',
    },
    {
      name: 'Darlene Robertson',
      avatar: Avatar2,
      type: 'Pay per task/time',
      start_date: new Date(2021,3,3),
      amount: 200,
      status: 'active',
    },
    {
      name: 'Darlene Robertson',
      avatar: Avatar3,
      type: 'Results Driven',
      start_date: new Date(2021,5,24),
      amount: 1530,
      status: 'pending',
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