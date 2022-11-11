import React from "react";
import App from "../App";
import ListForm from "./ListForm";
import ListList from "./ListList";

const ListItem = (props) => {

    // const newLists = props.lists.filter((list) => { return list !== props.number});
    // setLists(newLists)
    return (
        <div>
            <div className="lists">
                <div className="lists_cont">
                    <h2>#:{props.number}</h2>
                    <hr></hr>
                    <h2>Status: {props.list.status}</h2>
                    <hr></hr>
                    {/* <input type= 'checkbox'/> */}
                    <h1>Name: {props.list.body}</h1>
                    <hr></hr>
                    <input type={"checkbox"} value={props.list.statusNew}  />
                    {/* <select  value={value} onChange={event => onChange(event.target.value)}>
                    <select>
                    <option>{props.list.status}</option>
                    </select> */}
                    
                    <button className='btn2' onClick={()=>props.remove(props.list)}>Delet</button>
                    
                </div>
            </div>
        </div>
    )
}

export default ListItem;