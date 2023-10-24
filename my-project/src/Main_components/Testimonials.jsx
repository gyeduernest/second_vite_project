import React from 'react'
import avatar1 from'./avatar1.jpg';
import avatar2 from'./avatar2.png';
import avatar3 from'./avatar3.png';
import avatar5 from'./avatar5.jpg';
import avatar6 from'./avatar6.png';
import avatar7 from'./avatar7.png';


export default function MyTestimony() {
  const speech = [
    {id: 1, name:"kwame", post:"This App is great i love it" ,avatar: {avatar1}},
    {id: 2, name:"kwaku", post:"This App is great i love it" ,avatar: {avatar2} },
    {id: 3, name:"Yaw" , post:"i urge you to download this app it is great" ,avatar: {avatar3} },
    {id: 4, name:"kwesi" , post:"i urge you to download this app it is great" ,avatar: {avatar5} },
    {id: 5, name:"kwabena" , post:"i urge you to download this app it is great" ,avatar: {avatar6} },
    {id: 6, name:"kojo" , post:"i urge you to download this app it is great" ,avatar: {avatar7} }
                ];

    const Card = speech.map((props) => (
      <div key={props.id} className=" h-40  rounded-lg p-5 ">
        <img src={Object.values(props.avatar)[0]} alt="" className='lg:w-40 lg:h-40 w-20 h-20' />
        <div><h5 className='text-white'>{props.name}</h5></div>
        <div><p>{props.post}</p></div>

      </div>



    ));
  return (

    <div className="lg:flex lg:px-20 grid-cols-3">
      {Card}
    </div>
    
      

      


    
  );
}
