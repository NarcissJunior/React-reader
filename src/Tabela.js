import React, { Component } from 'react';
import './App.css';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Vocação</th>
                <th>Sexo</th>
                <th>Level</th>
                <th>Mundo</th>
                <th>Residência</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const linhas = props.characters.map((linha) => {
        return (
            <tr key={linha.id}>
                <td>{linha.nome}</td>
                <td>{linha.vocacao}</td>
                <td>{linha.sexo}</td>
                <td>{linha.level}</td>
                <td>{linha.mundo}</td>
                <td>{linha.residencia}</td>
                <td><button className="btn btn-danger" onClick = { () => { props.removeCharacter(linha.id) }}>Remover</button></td>
            </tr>
        );
    });
    
    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

class Tabela extends Component {

    render() {

        const { characters, removeCharacter } = this.props;

        return (
            <table>
                <TableHead />
                <TableBody characters = { characters } removeCharacter = { removeCharacter } />
            </table>
        );
    }

}

export default Tabela;