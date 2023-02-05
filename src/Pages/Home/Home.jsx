import { BackGround } from 'Compnents/Background/BackGround';
import { Body } from 'Compnents/Body/Body';
import { Footer } from 'Compnents/Footer/Footer';
import NavBar from 'Compnents/NavBar/NavBar';
import React from 'react'
import './home.scss';

export const Home = () => {
    return (
        <div>
            <NavBar />
            <BackGround />
            <Body />   
            <Footer />         
        </div>
    )
}
