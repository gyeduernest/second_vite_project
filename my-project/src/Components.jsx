import React from "react";
import { NavLink } from "react-router-dom";

export const PrimaryBtn = ({text}) => {
  return ( 
            <>
            <div>
                <button type="button" className="PrimaryBtn">{text}</button>

             </div>
            </>

    );
}
export const SecondaryBtn = ({text}) => {
  return ( 
            <>  
            <div>
                <NavLink to="/signup"><button type="button" className="SecondaryBtn">{text}</button></NavLink>

            </div>
            </>

    );
}
export const TertiaryBtn = ({text}) => {
  return ( 
            <>  
            <div>
                <button type="button" className="TertiaryBtn">{text}</button>

            </div>
            </>

    );
}








   
