const React = require('react');
const client = require('../client');
const { render, Link } = require("react-router-dom");

function PageNuevoMusico() {
    return (
        <>
        <h2>Nuevo Musico</h2>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoMusico;