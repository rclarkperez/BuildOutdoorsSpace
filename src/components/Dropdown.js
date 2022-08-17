import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const Dropdown = ({labelString, options, selected, setSelection, type, labelId, toggleVisibility, isHeader, name}) => {
    const [open, setAsOpen] = useState(false);   
    const ref = useRef();
    
    const onBodyClick = (e) => {
        if (ref.current.contains(e.target)) {
            return;
        }
        setAsOpen(false);
    } 

    useEffect(() => {
        document.body.addEventListener("click", onBodyClick, { capture: true });
                document.body.addEventListener("click", onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener("click", onBodyClick, { capture: true });
        };
    },[]);
    
           
    const renderOptionHeader = options.map((option) => {
            return (
                <div className="item" 
                key ={option.label}>
                    <Link className='item' 
                    onClick={() => {window.matchMedia("(max-width: 700px)").matches? toggleVisibility(false) :toggleVisibility(true) }}
                    to={`${option.label}`}>
                    {option.label}
                    </Link>
                </div>
        
    )});


    return (
        <div ref={ref} className="field ui form">
            <label>{labelString}</label>
                <div value={selected} 
                onMouseEnter={()=>setAsOpen(!open)}
                onMouseLeave={()=>setAsOpen(!open)}
                className={`ui ${type} dropdown ${open ? 'visible active': ''}`}>
                    <div className="text" id={labelId}>{selected}</div>
                    {type? <i className="dropdown icon"></i>: <></>}
                    <div className={`menu ${open ? 'visible transition': ''}`}>
                        {renderOptionHeader}
                    </div>
                </div>
                   
            </div>
    );
};

export default Dropdown;
