import React from "react";
import App from "../App";
import ListForm from "./ListForm";
import ListItem from "./ListItem";

const ListList = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', fontSize: '40px'}}>List</h1>
            {/* <button className="btn1">All</button>
            <button className="btn1">Activ</button>
            <button className="btn1">completed</button> */}
            {props.lists.map((list, index) => 
            <ListItem remove={props.remove} number={index + 1} list={list} key={list}/>
            )}
        </div>
    );
}

export default ListList;