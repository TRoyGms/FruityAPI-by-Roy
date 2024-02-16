export class FruitView {
    constructor() {
        this.fruitsContainer = document.getElementById('fruits-list');
    }

    renderFruits(fruits) {
        this.fruitsContainer.innerHTML = '';
        fruits.forEach(fruit => this.renderFruitCard(fruit));
    }

    renderFruitCard(fruit) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h2>Nombre: ${fruit.name} - ID: #${fruit.id}</h2>
            ${this.renderNutritionInfo(fruit.nutrition)}
        `;
        this.fruitsContainer.appendChild(card);
    }

    renderNutritionInfo(nutrition) {
        return `
            <p>Calorías: ${nutrition.calories}</p>
            <p>Grasa: ${nutrition.fat}g</p>
            <p>Azúcar: ${nutrition.sugar}g</p>
            <p>Carbohidratos: ${nutrition.carbohydrates}g</p>
            <p>Proteína: ${nutrition.protein}g</p>
        `;
    }
}


export const fruitView = new FruitView();
