import React from "react";
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
function Navbar(){
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type='text' placeholder="search..." />
                    <SearchIcon />
                </div>
                <div className="items">
<div className="item">
    <LanguageOutlinedIcon className="ico"/>
    English
</div>
<div className="item">
    <LanguageOutlinedIcon className="ico"/>
    <div className="counter">1</div>
</div>
<div className="item">
    <LanguageOutlinedIcon className="ico"/>
    <div className="counter">2</div>
</div>
<div className="item">
    <LanguageOutlinedIcon className="ico"/>
    English
</div>
<div className="item">
    <LanguageOutlinedIcon className="ico"/>
    English
</div>

                </div>
            </div>
        </div>
    )
}
export default Navbar;