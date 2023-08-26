import React from 'react';

import './Remaining.css'

const Remaining = () => {
    let detail = [
        {
            id: 1,
            img: 'img/Pic.jpg',
            random: 'Random Image',
            description: 'Description- You can find & download the most popular Random Lines Vectors on Freepik.',
            author: 'Author name',
        },
        {
            id: 2,
            img: 'img/images.jpg',
            random: 'Random Image',
            description: 'Description- You can find & download the most popular Random Lines Vectors on Freepik.',
            author: 'Author name',
        },
        {
            id: 3,
            img: 'img/images.jpg',
            random: 'Random Image',
            description: 'Description- You can find & download the most popular Random Lines Vectors on Freepik.',
            author: 'Author name',
        }
    ];

    const item = detail.map((elements) => (
        <>
        
        <div className='Main-2' key={elements.id}>

            <div className='Card_1'>
        
                <div className='Card-img_1'>
                    <img src={elements.img} alt='imgs' />
                </div>

                <h1 className='random_1'>{elements.random}</h1>
                <p className='description_1'>{elements.description}</p>
                <h2>{elements.author}</h2>
        
            </div>
            

        </div>
       
        </>


    ));

    return (
        
<div>
        <div>{item}</div>
        
        </div>
            
      

    );
};

export default Remaining;