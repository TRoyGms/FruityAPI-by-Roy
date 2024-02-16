import { Nutrition } from '../models/nutritions.js';

export class FruitModel {
    constructor(id, name, nutritionData) {
        this.id = id;
        this.name = name;
        this.nutrition = new Nutrition(
            nutritionData.calories,
            nutritionData.fat,
            nutritionData.sugar,
            nutritionData.carbohydrates,
            nutritionData.protein
        );
    }
}

