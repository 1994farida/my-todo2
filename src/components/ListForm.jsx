import React, { useState } from "react";
import App from "../App";



const ListForm = ({create}) =>{

    const [list, setList] = useState({body: ''})

    const addNewList = (e) => {
        e.preventDefault();

        const newList = {
            ...list, id: Date.now(),statusNew:false,
        }
        create(newList)
        setList({body: ''})
    }

    return (
        <form style={{textAlign: 'center'}}>
            <input  className="int2" type='text' placeholder="List status" value={list.status} onChange={e => setList({...list, status: e.target.value})}/>
            <input  className="int1" type='text' placeholder="List body" value={list.body} onChange={e => setList({...list, body: e.target.value})}/>
            <button className="btn1" onClick={addNewList}>Add</button>
        </form>
    );
}

export default ListForm;