import React from "react";
import "../../Styles/ComponentsCss/Footer.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import pokeballfooter  from "../../assets/pokemon.png"
import homePage from "../../views/homePage/HomePage";

const Footer = ()=>{

    return(
        <div>
            <footer className="text-white py-4 bg-dark ">
                <div className="container" >
                    <nav className="row">
                    <Router>
                    <Link to="/" className="col-12 col-md-3 d-flex align-items-center justify-content-center">
                            <img src={ pokeballfooter } className="mx-2" height="80">

                            </img>
                        </Link>
                        <ul className="col-12 col-md-3 list-unstyled align-self-center" >
                            <li className="font-weight-bold text-center">Pokemon</li>
                            <li className="text-center">En este sitio encontrarás información sobre todos los Pokemons</li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled align-self-center" >
                            <li className="font-weight-bold text-center">Enlaces</li>
                            <li className="text-center">
                                <Link to="/" className="text-reset">Pokemon</Link>
                            </li>
                        </ul>
                        <ul className="col-12 col-md-3 list-unstyled align-self-center">
                            <li className="font-weight-bold text-center">Siguenos</li>
                            <li className="d-flex justify-content-between">
                                <i className="bi bi-facebook"></i>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-twitter"></i>
                            </li>
                        </ul>
                    </Router>
                        
                    </nav>
                </div>

            </footer>

        </div>
    )


}
export default Footer;