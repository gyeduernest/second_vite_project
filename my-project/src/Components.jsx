import React from "react";
import Card from "./Main_components/Testimonials";
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
                <NavLink to="/register"><button type="button" className="SecondaryBtn">{text}</button></NavLink>

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








   
