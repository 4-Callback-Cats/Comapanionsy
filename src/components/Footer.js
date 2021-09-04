import React from "react";
import { AiOutlineHeart } from 'react-icons/ai';
import { FooterStyle } from "./styles/Footer";

const Footer = () => {
    return (
        <footer>
            <FooterStyle>
                <p>Created With Love <AiOutlineHeart style={{color:"red"}}/></p>
                <p>Team Callback Cats</p>
            </FooterStyle>
        </footer>
    );
}

export default Footer;