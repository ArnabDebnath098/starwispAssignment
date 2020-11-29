import React from 'react';
import "./TabCard.css";

function TabCard({color,heading,time,message,r,g,b,a}) {
    return (
        <div className="tabCard">
            <div className="tabCardprofile" style={{backgroundColor:`${color}`}}></div>
            <div className="tabCardcontent">
                <h4>{heading}</h4>
                <h5>your faculty uploaded the syllabus</h5>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default TabCard
