export function longestSeries(input) {
    // Write your code here using the input array
    let compteur = 0;
    let nombreSerie = [];

    if(input === undefined || input === null)
        throw("Invalid value");

    if(input.length === 0)
        return 0;

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
