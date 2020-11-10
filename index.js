/*Dado varios arrays de elementos recorreremos uno de estos, 
y usando el método .reduce junto con la posición del elemento para crear un objeto 
con los índices como claves, que tengan valores como objetos con los campos name, age y race 
apuntando al de su correspondiente índice en el array original.
*/

const names = ['Frodo', 'Gandalf', 'Balrog', 'Galadriel'];
const ages = [30, 400, 2000, 1200];
const races = ['hobbit', 'human', 'demon', 'elf'];

/*Recorreremos uno de estos, y usando el método .reduce junto con la posición del elemento, crearemos lo siguiente:

{
  0: {
    name: 'Frodo',
    age: 30,
    race: 'hobbit'
  },
  1: {
    name: 'Gandalf',
    age: 400,
    race: 'human'
  }
  ...
}

*/

const orderObjPositions = names.reduce((acc, next, index) => {
   
    const [name, age, race] = next
    return {
      ...acc,
      [index]: {
        name: names[index],
        age: ages[index],
        race: races[index]
        
      }
    }
 }, {});
 
