import { nanoid } from "nanoid"

export const Filter = ({onHandleChange}) => {

    const filterId = nanoid()

    return  <>
                <label htmlFor={filterId}>Find contacts by name</label>
                <input type="text" name="filter" id={filterId} onChange={onHandleChange}/>
            </>
}