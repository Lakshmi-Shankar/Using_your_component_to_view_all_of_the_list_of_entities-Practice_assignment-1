/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// // write the book component code here
import React from 'react';
import '../App.css'

const Bookcard = ({name, image, genre, author}) => {
    return (
        <div className='bookCard'>
            <img src={image} />
            <h3>{name}</h3>
            <h6>{genre}</h6>
            <p>{author}</p>
        </div>
    );
}

export default Bookcard;

