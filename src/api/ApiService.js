const ApiService = {

    //tentativa de criar uma variavel chamada base URL
    // const baseUrl = "http://localhost:8000/api/";

    ShowCharacters: () => {
        return fetch('http://localhost:8000/api/autor')
            .then(res => ApiService.TraitErrors(res))
                .then(res => res.json());
    },

    CreateCharacter: character => {
        return fetch('http://localhost:8000/api/character', { method: 'POST', headers: {'content-type': 'application/json'}, body: character })
            .then(res => ApiService.TraitErrors(res))
                .then(res => res.json());
    },

    ShowNames: () => {
        return fetch('http://localhost:8000/api/autor/nome')
            .then(res => ApiService.TraitErrors(res))
                .then(res => res.json());
    },

    ShowWorlds: () => {
        return fetch('http://localhost:8000/api/character/world')
            .then(res => ApiService.TraitErrors(res))
                .then(res => res.json());
    },

    RemoveCharacter: id => {
        return fetch(`http://localhost:800/api/character/${id}`, { method: 'DELETE', headers: {'content-type': 'application/json'}})
    },

    TraitErrors : res => {
        if(!res.ok) {
            throw  Error(res.responseText);
        }
        return res;
    }

}

export default ApiService;