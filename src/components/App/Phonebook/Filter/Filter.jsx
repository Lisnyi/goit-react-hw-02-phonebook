import { nanoid } from "nanoid"
import PropTypes from 'prop-types'

export const Filter = ({filter, handleChange}) => {

    const filterId = nanoid()

    return  <>
                <label htmlFor={filterId}>Find contacts by name</label>
                <input type="text" name="filter" value={filter} id={filterId} onChange={handleChange}/>
            </>
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}