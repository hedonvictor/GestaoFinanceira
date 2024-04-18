import React from "react";

import appImage from "../../../assets/appImageDef.png"

export default function Home() {
    return (
        <section className="container d-flex justify-content-around mt-5">
        <div className="card border-0 mt-5" style={{ width: "470px", background: "none" }}>
            <div className="card-body">
                <h1>
                    Precisando de
                </h1>
                <h1>
                    organização ?
                </h1>
                <h1>
                    Seu proximo passo
                </h1>
                <h1>
                    é usar o YouFinance.
                </h1>
                <a id="startnowbtn" className="card-link btn btn-primary">
                    COMECE AGORA
                </a>
            </div>
        </div>
        <div id="ImgCardapp" class="card border-0 mb-5">
            <img id="ImgCardapp" alt="appImage" src={appImage} />
        </div>
    </section>
    );
};