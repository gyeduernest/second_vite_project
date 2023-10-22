import React from 'react'

export default function MyTestimony(props) {
  const speech = [
    {id: 1, name:"kwame", post:"This App is great i love it"  },
    {id: 2, name:"kwame", post:"This App is great i love it" },
    {id: 3, name:"kweku" , post:"i urge you to download this app it is great"},
    {id: 4, name:"kweku" , post:"i urge you to download this app it is great"},
    {id: 5, name:"kweku" , post:"i urge you to download this app it is great"},
    {id: 6, name:"kweku" , post:"i urge you to download this app it is great"}
                ];

    const Card = speech.map((props) => (

      <div key={props.id} className=" h-40  rounded-lg p-5 ">
        
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
