import React from "react";
import Card from "./Main_components/nested_comps";

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
                <button type="button" className="SecondaryBtn">{text}</button>

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








   
