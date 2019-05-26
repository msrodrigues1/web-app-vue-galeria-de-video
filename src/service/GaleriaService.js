import { ConfigClass } from '../classes/ConfigClass'

let caminho = '${ConfigClass.getUrlApi().toString()}/galeria/';

export default class GaleriaService{
    constructor(){
    }

    static getTodos(){
        fetch(caminho).then( reponse => {
            return reponse.json();
        })
    }
}