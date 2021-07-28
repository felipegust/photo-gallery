import React, { useEffect } from "react";
import { useState } from "react"
import '../App.css'

const FilterText = ({ filter, setFilter, filterItems }) => {
    
    const [tempFilter, setTempFilter] = useState("")
    
    const handleChange = () => {
        if (tempFilter !== "") {
            let filterNew = filter.concat(tempFilter);
            setFilter(filterNew)
        }
        setTempFilter("")
    }
    
    const handleDelete = (removedItem) => {
        let filterNew = filter.filter(item => item !== removedItem)
        setFilter(filterNew)
    }
    
    const handleAdd = (e) => {
        console.log(e)
        let filterNew = filter.concat(e.target.value);
        setFilter(filterNew)
    }
    
    return (
        
        <div className="mainFilter">
        <h3>Adicione o filtro:</h3>
        <input type="text" value={tempFilter} onChange={(e) => setTempFilter(e.target.value)} onBlur={() => handleChange()} />
        
        <div className="filterContainer">
        {filter.map(item => {
            return (
                <span className="filterItem">{item}{" "}
                    <a onClick={() => handleDelete(item)}>X</a>
                </span>

                )
            })}
            </div>
            
            <div className="filterList">
            {filterItems.map(item => {
                return (
                    <button className="filterItem" value={item} onClick={(e) => handleAdd(e)}>{item}</button>
                    )
                })}
                
                </div>
                
                </div>
                
                )
            }
            
            export default FilterText