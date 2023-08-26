import React from 'react';
import './Card.css';


const Card=()=>{
    let details=[
    {
        id:1, 
        img:'img/images.jpg',
        random:'Random Image',
        description:'Description- You can find & download the most popular Random Lines Vectors on Freepik.',
        author:'Author name',
    },
    
    {
        id:2, 
        img:'img/images.jpg',
        random:'Random Image',
        description:'Description- You can find & download the most popular Random Lines Vectors on Freepik.',
        author:'Author name',
    },{
        id:3, 
        img:'img/images.jpg',
        random:'Random Image',
        description:'Description- You can find & download the most popular Random Lines Vectors on Freepik.',
        author:'Author name',
    }
    ,{
        id:4, 
        img:'img/images.jpg',
        random:'Random Image',
        description:'Description- You can find & download the most popular Random Lines Vectors on Freepik.',
        author:'Author name',
    }
];

const items = details.map((element)=>{
    return(
        <>
        <div className='Main'>
        <div className='Card'>
            <div className='Card-img' key={element.id}>
                <img src={element.img} alt='imgs' />
            </div>
            <div className='Card-make'>
            <h1 className='random'>{element.random}</h1>
            <p className='description'>{element.description}</p>
            <h2>{element.author}</h2>
            
            </div>
        </div>
        </div>
        

        </>
    );
})
return (
    <>
     {items} 
        </>
);
}
export default Card;

