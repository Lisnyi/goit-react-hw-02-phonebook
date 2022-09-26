import { nanoid } from "nanoid"

export const Filter = ({filter, handleChange}) => {

    const filterId = nanoid()

    return  <>
                <label htmlFor={filterId}>Find contacts by name</label>
                <input type="text" name="filter" value={filter} id={filterId} onChange={handleChange}/>
            </>
}