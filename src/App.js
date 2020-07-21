import React, { Component, Fragment } from 'react';
import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './Components/Header';
import Tabela from './Components/Tabela';
import Form from './Components/Formulario';
import PopUp from './Utils/PopUp';

import ApiService from './Api/ApiService';

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
    const updatedCharacters = characters.filter(character => {
        return character.id !== id;
    });

    ApiService.removeCharacter(id)
                .then(res => {
                    if(res.message === 'deleted') {
                        this.setState({ characters : [...updatedCharacters]})
                        PopUp.showMessage("error", "Personagem removido com sucesso!");
                    }
                })
                .catch( err => PopUp.showMessage("error", "Erro ao remover o personagem"));
   }

    submitListener = character => {
        ApiService.CreateCharacter(JSON.stringify(character))
                    .then(res => {
                        if(res.message === 'success') {
                            this.setState({ characters : [...this.state.characters, res.data] });
                            PopUp.showMessage("success", "Personagem adicionado com sucesso!");
                        }
                    })
                    .catch(err => PopUp.showMessage("error", "O personagem não foi criado."));
    }

    componentDidMount() {
        ApiService.ShowCharacters()
                .then(res => {
                    if(res.message === 'success') {
                        this.setState({ characters : [...this.state.characters, ...res.data ]});
                    }
                })
            .catch(err => PopUp.showMessage("error", "Erro ao carregar a lista de personagens."));
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
