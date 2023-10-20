import React from 'react'

export default function MyTestimony(props) {
  const speech = [
    {id: 1, name:"kwame", post:"This App is great i love it" },
    {id:2, name:"yaw" , post:"i urge you to download this app it is great"}
                ];

    const Card = speech.map((props) => (

      <div key={props.id} className="Card">

        <div><h4 className='text-white'>{props.name}</h4></div>
        <div><p>{props.post}</p></div>

      </div>



    ));
  return (

    <div className=" lg:flex gap-5">
      {Card}
    </div>
    
      

      


    
  );
}
