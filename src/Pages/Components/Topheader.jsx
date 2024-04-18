import React from "react";
import Logo from '../../assets/LogoYF.png'

const Topheader = (props) => {
    return (
        <header >
            <div className="d-flex justify-content-between" style={{ marginLeft: "5%", marginRight: "5%" }}>
                <nav class="navbar navbar-expand-sm">
                    <div class="d-flex justify-content-center align-items-center">
                        <h4 style={{ fontSize: "30px" }} className="me-5">
                            <img alt="logo" src={Logo} style={{ height: "70px", }} />
                            YouFinance
                        </h4>
                        <div id="navbarNav" >
                            <ul class="navbar-nav" >
                                <li class="nav nav-item me-4" >
                                    <a id="nav-item-1" class="nav-link">{props.navElements[0]}</a>
                                </li>
                                <li class="nav nav-item me-4">
                                    <a id="nav-item-2" class="nav-link">{props.navElements[1]}</a>
                                </li>
                                <li class="nav nav-item me-4">
                                    <a id="nav-item-3" class="nav-link" >{props.navElements[2]}</a>
                                </li>
                                <li class="nav nav-item me-4">
                                    <a id="nav-item-4" class="nav-link" >{props.navElements[3]}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div>{props.finalItem}</div>
            </div>
        </header>
    )
}

export default Topheader;