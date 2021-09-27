import { useState } from 'react'
import Button from '../Button'
import { 
  FiltersContainer, 
  FiltersBtns, 
  Searchbar, 
  FiltersMenu
} from './styled'
import plusIcon from '../../assets/svg/plus-white.svg'
import closeIcon from '../../assets/svg/close.svg'
import filtersIcon from '../../assets/svg/filters.svg'

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
        <input type="date" />
        <select>
            <option value="" selected disabled>Contract type</option>
            <option value=""></option>
        </select>
        <input type="text" placeholder="Contractor Name" />
        <select>
            <option value="" selected disabled>Status</option>
            <option value=""></option>
        </select>
      </FiltersMenu>
    </>
  )
}

export default Filters
