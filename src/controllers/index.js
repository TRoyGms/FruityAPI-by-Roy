// Inicialización y manejo de eventos
import { FruitController } from '../controllers/controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const fruitController = new FruitController();
    const loadDataBtn = document.getElementById('loadDataBtn');

    loadDataBtn.addEventListener('click', async () => {
        await fruitController.fetchFruits();
    });
});