import React from 'react';

import { NavLink } from 'react-router-dom';

//Criação do High Order Component
const LinkWrapper = props => {

    //Recebo TODAS as props e uso-as utilizando o spread operator
    //Além disso, insiro uma estilização no link ativo ANTES das props para que seja sobreposto caso haja a necessidade
    return (
        <NavLink activeStyle={{fontWeight: "bold"}} {...props} />
    )
}

export default LinkWrapper;