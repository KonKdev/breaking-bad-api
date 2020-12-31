import React,{useState} from 'react'

const Search = ({getQuery}) => {
 
const [text,setText] = useState('')

const onChange = (q) =>{
    setText(q)
    getQuery(q)
}

    return (
        <div className='search'>
            <form>
                <input 
                    type='text' 
                    className='form-cotrol'
                    placeholder='Search characters'
                    onChange={(e) => 
                        onChange(e.target.value)
                    }
                    value={text}
                    autoFocus
                    >
                </input>
            </form>
        </div>
    )
}

export default Search
