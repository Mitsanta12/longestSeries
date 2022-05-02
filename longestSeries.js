export function longestSeries(input) {
    //this is my code
    let compteur = 0;
    let nombreSerie = [];


     //le pprogramme return un erreur si les valeures sont "undifened" ou "null"
    if(input === undefined || input === null)
        throw("Invalid value");

    // reeturn 0 si la longueur du tableau est egale à 0
    if(input.length === 0)
        return 0;

    //parcour du tableau pour trouver les elements pareil
    for (let i = 0; i < input.length ; i++) {
        if (input[i] == input[i + 1])
            compteur++;
        
        else{
            nombreSerie.push(compteur);
            compteur = 1;
        }
    }
    return Math.max(...nombreSerie);
}
const tab = [10, 5, 3, 3, 4, 9, 9, 9, 9, 9, 6];
console.log(longestSeries(tab));
//ce programme permet de connaitre le plus long serie de chiffre dans un tableau et qui retourne en meme temps le chiffre et la longueur de la serie

