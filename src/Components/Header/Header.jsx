import { useState } from 'react';
import "./Header.css";
import Logo from "../../assets/nav/logo.png";
import Home from "../../assets/nav/home.png";
import Comment from "../../assets/nav/comment.png";
import Add from "../../assets/nav/add.png";
import Compass from "../../assets/nav/compass.png";
import Heart from "../../assets/nav/heart.png";
import Avatar from "../../assets/nav/avatar.png";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
    const [search, setSearch] = useState(false);

    const handleInput = (event) => {
        const inputValue = event.target.value;
        setSearch(inputValue === "");
    };

    return (
        <header>
            <img src={Logo} alt="Logo" />
            <div className='search-container'>
                <AiOutlineSearch style={{ display: search ? 'block' : 'none' }} />
                <input type='text' placeholder='         Search' onInput={handleInput} />
            </div>
            <div className='header-icons-container'>
                <img src={Home} alt='home' />
                <img src={Comment} alt='comment' />
                <img src={Add} alt='add' />
                <img src={Compass} alt='comp' />
                <img src={Heart} alt='heart' />
                <img src={Avatar} alt='avatar' />
            </div>
        </header>
    );
}

export default Header;
