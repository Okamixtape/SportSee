import React from "react";
import { NavLink } from "react-router-dom";

export default function Error () {
    return (
        <div className="error">
            <h2 className="error__404"> Erreur 404</h2>
            <p className="error__text">Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="error__homeLink">
                Retourner sur la page d’accueil
            </NavLink>
        </div>
    );
}
