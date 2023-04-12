// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
const height = process.argv[3]; // Altura
const barReps = process.argv[4]; // Repetições com barra
const barSeconds = process.argv[5]; // Tempo das repetições com barra 
const abs = process.argv[6]; // Abdominais
const runDistance = process.argv[7]; // Distância da corrida
const runTime = process.argv[8]; // Tempo da corrida
const swimDistance = process.argv[9]; // Distância da natação
const swimTime = process.argv[10]; // Tempo da natação
const diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"
    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

/* Se o gênero for igual a masculino, altura mínima 1.70, 6 repetições na barra ou a duração da barra for maior ou igual a 15 segundos, pelo menos 41 abdominais, distância da corrida for de no mínimo 3km em 12 minutos ou de 5km em 20 minutos e a natação for de pelo menos 100 metros em até 1 minutos ou no máximo 30 segundos de mergulho então passou no teste */
if (gender == 'male' && height >= 1.70 && (barReps >= 6 || barSeconds >= 15) && abs >= 41 && (runDistance >= 3000 && runTime <= 720 || runDistance >= 5000 && runTime <= 1200) && (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30)) 
{
    passed = true;
}
/* Se o gênero for igual a feminino, altura mínima 1.60, 5 repetições na barra ou a duração da barra for maior ou igual a 12 segundos, pelo menos 41 abdominais, distância da corrida for de no mínimo 4km em 15 minutos ou de 6km em 22 minutos e a natação for de pelo menos 100 metros em até 1 minutos ou no máximo 30 segundos de mergulho então passou no teste */
if (gender == 'female' && height >= 1.60 && (barReps >= 5 || barSeconds >= 12) && abs >= 41 && (runDistance >= 4000 && runTime <= 900 || runDistance >= 6000 && runTime <= 1320) && (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30)) 
{
    passed = true;
}
/* Como o valor inicial do 'passed' é 'false' não vi a necessidade de utilizar 'else', ja que ao não ser 'true' automaticamente se torna 'false' */

/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed);
