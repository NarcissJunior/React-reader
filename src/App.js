import React, { Component, Fragment } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';
import PopUp from './PopUp';

import ApiService from './api/ApiService';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            characters: [],
        };
    }


    removeCharacter = id => {

    const { characters } = this.state;

    //Verifica qual foi a posição clicada (pois o array será percorrido em todas as posições)
    //Após isso, ele retorna quais posições deverão ser mantidas.
    this.setState(
        {
            characters : characters.filter((character) => {
            //quando o index for igual á posição atual (clicada) o elemento será retirado.
            return character.id !== id;
            }),
        }
    );
    PopUp.showMessage("error", "Personagem removido com sucesso!");

    ApiService.removeCharacter(id);
   }

    submitListener = character => {

        ApiService.CreateCharacter(JSON.stringify(character))
                                .then(res => res.data)
                                .then(character => {
                                    this.setState({ characters : [...this.state.characters, character] });
                                    PopUp.showMessage("success", "Personagem adicionado com sucesso!");
                                });
    }

    componentDidMount() {
        ApiService.ShowCharacters()
            .then(res => {
                this.setState({ characters : [...this.state.characters, ...res.data ]});
            });
    }

    render () {
        return (
            <Fragment>
                <Header />
                <div className="container mb-10">
                    <h1>React Reader</h1>
                    <Tabela characters = { this.state.characters } removeCharacter = { this.removeCharacter } />
                    <Form submitListener = { this.submitListener } />
                </div>
            </Fragment>
        );
  }

}

export default App;
