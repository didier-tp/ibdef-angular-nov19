// DTO "Resultat Conversion"
// après appel de 
//http://localhost:8282/
//    devise-api/public/convert?source=EUR&target=USD&amount=200
export class ResConv {
    source : string; //code monnaie source "EUR" , "USD"
    target : string; //code monnaie cible
    amount : number; //montant de départ à convertir
    result: number;  //resultat de la conversion de devise
}