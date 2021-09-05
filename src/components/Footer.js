import React from "react";
import { AiOutlineHeart } from 'react-icons/ai';
import {FaCat} from 'react-icons/fa';
import { FooterStyle } from "./styles/Footer";

const Footer = () => {
    return (
        <footer>
            <FooterStyle>
                <p>Crafted With Love <AiOutlineHeart style={{ color: "red" }} /></p>
                <p>Team Callback Cats <FaCat/></p>
            </FooterStyle>
        </footer>
    );
}

export default Footer;