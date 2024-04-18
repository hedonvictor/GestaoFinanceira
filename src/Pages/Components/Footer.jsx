import React from "react";
import { CardFooter } from "react-bootstrap";

const Footer = () => {
    return (
        <CardFooter className="CardFooter">
            <div className="d-flex justify-content-around p-2">
                <p className="">
                    Houve algum problema ? contate nosso <a href="mailto:projetointegradorengsoft@gmail.com">suporte</a>
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </p>
            </div>
        </CardFooter>
    )
}

export default Footer;