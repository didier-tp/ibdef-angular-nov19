import { Personne } from "./personne";

export class Employe extends Personne {
    numero: number;
    salaire:number;

    constructor(public nom: string = "",
                public prenom: string = "",
                public age: number = 0){
        super(nom,prenom,age);
        this.numero=0;
        this.salaire=0.0;
    }
}