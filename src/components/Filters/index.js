import { useState } from 'react'
import Button from '../Button'
import { 
  FiltersContainer, 
  FiltersBtns, 
  Searchbar, 
  Input,
  Select,
  FiltersMenu
} from './styled'
import plusIcon from '../../assets/svg/plus-white.svg'
import closeIcon from '../../assets/svg/close.svg'
import filtersIcon from '../../assets/svg/filters.svg'
import { contractTypes } from '../../constants/contract-types'
import { status } from '../../constants/status'

const Filters = () => {
  const [filterMenu, setFilterMenu] = useState(false)

  const toggleFilters = () => {
    setFilterMenu(!filterMenu);
  }

  return (
    <>
      <FiltersContainer>
        <Searchbar type="text" placeholder="Search" />
        <FiltersBtns>
          <Button onClick={() => toggleFilters()}>
            {filterMenu ? 
              <>
                <img src={closeIcon} alt="" />
                Close
              </> 
              : 
              <>
                <img src={filtersIcon} alt="" />
                Filter
              </>
            }
          </Button>
          <Button color="primary" size="lg">
            <img src={plusIcon} alt="" />
            New Hire
          </Button>
        </FiltersBtns>
      </FiltersContainer>
      <FiltersMenu isOpen={filterMenu}>
        <Input type="date" placeholder="Start date" maxWidth={'266px'} />
        {contractTypes.length > 0 &&
          <Select maxWidth={'206px'}>
            <option value="" selected disabled>Contract type</option>
            { contractTypes.map((contract, i) => 
              <option key={i} value={contract.value}>{contract.label}</option>
            )}
          </Select>
        }
        <Input type="text" placeholder="Contractor Name" maxWidth={'328px'} />
        {status.length > 0 &&
          <Select maxWidth={'190px'}>
            <option value="" selected disabled>Contract type</option>
            { status.map((status, i) => 
              <option key={i} value={status.value}>{status.label}</option>
            )}
          </Select>
        }
      </FiltersMenu>
    </>
  )
}

export default Filters
