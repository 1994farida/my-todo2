import React from "react";
import App from "../App";
import ListForm from "./ListForm";
import ListItem from "./ListItem";
import ListList from "./ListList";

const ListSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <div>
        <select className="select" value={value} onChange={event => onChange(event.target.value)}>
          <option disablet value="">{defaultValue}</option>
          {options.map(option => 
          <option key={option.value} value={option.value}>{option.name}</option>
          )}

          {/* <option value='value2'>По описанию</option> */}
        </select>
      </div>

    )

};

export default ListSelect;