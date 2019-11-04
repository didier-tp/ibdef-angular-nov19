export class Personne {

    // nom: string;
    // prenom: string;
    // age: number;


    constructor(public nom: string = "",
        public prenom: string = "",
        public age: number = 0) {
        /*
        this.nom=nom;
        this.prenom = prenom;
        this.age=age;
        */
    }

    incrementerAge(): void {
        this.age++;
    }
};


