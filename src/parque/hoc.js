//componente de ordem superior ,sao componentes que renderizam outros componentes

import React from 'react';
import ReactDom from 'react-dom';

const Info = (props) =>
    (
        <div>
            <h1>Info</h1>
            <p>a informação é:{props.Info}</p>
        </div>
    );

const widthAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>por favor nao compartilhe estas informações</p>}
            <WrappedComponent {...props} />
        </div>

    );
}
const requireAutentication = (WrappedComponent) => {
    return (props) =>
        (
            <div>
                {
                    //verificando se esta autenticado
                    props.isAutenticade ? (
                        <WrappedComponent {...props} />
                    ) : (<p>faça o login para ver a mensagem
                        <img src='https://thumbs.dreamstime.com/z/pare-o-%C3%ADcone-do-sinal-com-m%C3%A3o-no-c%C3%ADrculo-vetor-122482866.jpg)'/>
                        </p>
                       
                    )
                }
            </div>
        )
}

const AdminInfo = widthAdminWarning(Info);
const AuthInfo = requireAutentication(Info);

//ReactDom.render(<AdminInfo isAdmin={true} Info="estes sao os detalhes"/>,document.getElementById('app'));
ReactDom.render(<AuthInfo isAutenticade={false} Info="estes sao os detalhes" />, document.getElementById('app'));