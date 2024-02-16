import { FruitModel } from '../models/fruits.js';  // Importa la clase Fruit del modelo
import { fruitView } from '../view/cardview.js';  // Importa la instancia de la vista

export class FruitController {
    constructor() {
        this.fruits = [];  // Un arreglo para almacenar las frutas recuperadas de la API
    }

    // Método asíncrono que realiza la solicitud a la API y maneja la respuesta
    async fetchFruits() {
        try {
            // Utiliza 'await' para esperar a que la Promesa de 'fetch' se resuelva
            const response = await fetch('https://www.fruityvice.com/api/fruit/all');
            
            // Utiliza 'await' para esperar a que la Promesa de 'response.json()' se resuelva
            const data = await response.json();

            // Mapea los datos a objetos de la clase Fruit
            this.fruits = data.map(fruit => new FruitModel(fruit.id, fruit.name, fruit.nutritions));

            // Ordena directamente los objetos Fruit por ID
            this.fruits.sort((a, b) => a.id - b.id);

            // Llama al método renderFruits de la vista para mostrar las frutas
            fruitView.renderFruits(this.fruits);
        } catch (error) {
            // Manejo de errores: muestra un mensaje en la consola si ocurre un problema
            console.error('Error al obtener datos de la API:', error);
        }
    }
}
