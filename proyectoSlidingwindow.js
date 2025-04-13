
function findLongestWord(str) {
    const words = str.replace(".",'').split(/\s+/);
    let longestWord = ''; // Inicializar la palabra más larga
    let maxLength = 0;
    words.forEach(word => {
        if(word.length>maxLength){
            maxLength = word.length;
            longestWord=word; 
        }
    });
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje  hjklafdhakhlkafhjkfhdakljhfda  de programación increíble para  aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"