import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';
import bankImage from '../../assets/bank3D.png';
import './Home.css';

const Home = () =>{
    return(
        <div className='homePage'>
            <div className='imageContainer'>
                <img src={bankImage} alt="Home Page Photo" />
            </div>
            <div className='formContainer'>
                <Register />
                
            </div>
        </div>
    )
}

export default Home;