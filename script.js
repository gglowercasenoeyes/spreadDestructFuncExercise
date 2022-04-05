const jPDinos = [
    "Velociraptors", 
    "Tyrannosaurus Rex", 
    "Dilophosaurus"
];
function seeDinos(i, ...j){
    console.log(i);
    console.log(j);
};
seeDinos(...jPDinos);
const jPCharacters = {
    alanGrant: `Sam Neil`,
    ellieSattler: `Laura Dern`,
    ianMalcom: 'Jeff Goldblum'
}
seeCharacters = ({ellieSattler}) => (ellieSattler);
console.log(seeCharacters(jPCharacters));

// BONUS
const jurassicParkMovies = [{
    one: `Jurassic Park`,
    two: `The Lost World: Jurassic Park`,
    three: 'Jurassic Park III'
}, {
    four: `Jurassic World`,
    five: `Jurassic World Fallen Kingdom`,
    six: `Jurassic World Dominion`
}
 