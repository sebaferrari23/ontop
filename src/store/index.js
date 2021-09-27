import {useState, createContext} from 'react'
import UserAvatar from '../assets/png/user-avatar.png'
import Avatar1 from '../assets/png/contractor-avatar1.png';
import Avatar2 from '../assets/png/contractor-avatar2.png';
import Avatar3 from '../assets/png/contractor-avatar3.png';

export const Store = createContext();

const StoreProvider = ({children})=>{

  const [userInfo, setUserInfo] = useState({
    name: 'Sebastian Ferrari',
    avatar: UserAvatar
  })

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
      name: 'Marianela Zaccaro',
      avatar: Avatar2,
      type: 'Pay per task/time',
      start_date: new Date(2021,3,3),
      amount: 200,
      status: 'active',
    },
    {
      name: 'Jazmin Fernandez',
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
        setContracts,
        userInfo,
        setUserInfo
      }}
    >
      {children}
    </Store.Provider>
  )
}

export default StoreProvider;