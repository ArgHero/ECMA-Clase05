//Algoritmo de ventana deslizante
/*
Tecnica de optimización para estructuras de datos lineales: Array-Cadenas
Encontrar sub arreglos con propiedades específicas
Reduce la complejidad algoritmica de O(n**2) -> O(n)
-> Limitado a problemas muy específicas con estructuras continuas.
 */
function maximoSubarray(arr, user) {
  let inicio = 0,
    sumatoria = 0,
    maxLength = 0;

    for (let fin = 0; fin < arr.length; fin++) {
        sumatoria += arr[fin]
        while(sumatoria > user){
            sumatoria -= arr[inicio];
            inicio++;
        }
        if(maxLength<(fin-inicio+1)){
            maxLength = Math.max(maxLength,fin-inicio+1);
            subArray = arr.slice(inicio,fin+1);
        }
        
    }
    return {maxLength,subArray};
}
const array = [2,4,5,1,2,4,5];
const U = 17;
console.log(maximoSubarray(array,U));


