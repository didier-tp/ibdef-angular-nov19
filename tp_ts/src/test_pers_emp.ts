import { Employe } from "./employe";
import { Personne } from "./personne";

let emp1 = new Employe("Bon" , "jean" , 40);
emp1.numero=2;
emp1.salaire=2500;
console.log(emp1);

let p1 = new Personne(); p1.age = 50; p1.incrementerAge();
console.log(p1.age); console.log(p1.nom);

let p2 = new Personne("Dupond", "jean", 35);
console.log(JSON.stringify(p2));