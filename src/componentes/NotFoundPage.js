import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage=()=>
(
    <div>
        Error 404!
        pagina nao encontrada
        <br></br>
        <Link to="/">Voltar pra casa</Link>
        <br></br>
        <Link to="/"><img src="https://image.freepik.com/vetores-gratis/glitch-error-404-page-background_23-2148072533.jpg"/>
        </Link>
   </div>
);

export default NotFoundPage;