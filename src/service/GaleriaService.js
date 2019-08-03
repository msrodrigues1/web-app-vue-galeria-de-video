import { ConfigClass } from '../classes/ConfigClass'

let caminho = `${ConfigClass.getUrlApi().toString()}/galeria/`;

export default class GaleriaService{
    constructor(){
    }

    static getTodos(){
        return fetch(caminho).then( reponse => {
            return reponse.json();
        })
    }

    static adicionar(formData){
        return fetch(caminho,
            {
                method: "POST",
                body: formData
            }
        ).then( reponse => {
            return reponse.json();
        })
    }
}