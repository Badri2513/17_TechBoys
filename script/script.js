document.getElementById('meal-plan-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const goal = document.getElementById('goal').value;
  const diet = document.getElementById('diet').value;
  const budget = parseFloat(document.getElementById('budget').value);
  const servings = parseInt(document.getElementById('servings').value);

  // Sample recipe database
  const recipeDatabase = {
    weight_loss: {
      vegetarian: [
        { name: "Quinoa Salad", ingredients: "Quinoa, Tomatoes, Cucumber, Olive Oil", instructions: "Mix all ingredients together.", price: 5 },
        { name: "Quinoa Salad", ingredients: "Quinoa, Tomatoes, Cucumber, Olive Oil", instructions: "Mix all ingredients together.", price: 5 },
        { name: "Vegetable Stir Fry", ingredients: "Broccoli, Carrots, Tofu, Soy Sauce", instructions: "Stir-fry vegetables and tofu.", price: 4 }
      ],
      gluten_free: [
        { name: "Grilled Chicken Salad", ingredients: "Chicken, Lettuce, Tomatoes, Olive Oil", instructions: "Grill chicken and mix with veggies.", price: 7 },
        { name: "Grilled Chicken Salad", ingredients: "Chicken, Lettuce, Tomatoes, Olive Oil", instructions: "Grill chicken and mix with veggies.", price: 7 },
        { name: "Zucchini Noodles", ingredients: "Zucchini, Garlic, Olive Oil", instructions: "Spiralize zucchini and sauté with garlic.", price: 6 }
      ],
      vegan: [
        { name: "Lentil Soup", ingredients: "Lentils, Onions, Carrots", instructions: "Boil lentils with vegetables.", price: 3 },
        { name: "Lentil Soup", ingredients: "Lentils, Onions, Carrots", instructions: "Boil lentils with vegetables.", price: 3 },
        { name: "Chickpea Salad", ingredients: "Chickpeas, Tomatoes, Olive Oil", instructions: "Mix chickpeas with vegetables.", price: 4 }
      ]
    },
    muscle_gain: {
      vegetarian: [
        { name: "Lentil Soup", ingredients: "Lentils, Onions, Carrots", instructions: "Boil lentils with vegetables.", price: 5 },
        { name: "Lentil Soup", ingredients: "Lentils, Onions, Carrots", instructions: "Boil lentils with vegetables.", price: 5 },
        { name: "Chickpea Salad", ingredients: "Chickpeas, Tomatoes, Olive Oil", instructions: "Mix chickpeas with vegetables.", price: 6 }
      ],
      gluten_free: [
        { name: "Steak with Veggies", ingredients: "Steak, Broccoli, Sweet Potatoes", instructions: "Grill steak and steam vegetables.", price: 12 },
        { name: "Egg Scramble", ingredients: "Eggs, Bell Peppers, Spinach", instructions: "Scramble eggs with vegetables.", price: 8 }
        { name: "Egg Scramble", ingredients: "Eggs, Bell Peppers, Spinach", instructions: "Scramble eggs with vegetables.", price: 8 }
      ],
      vegan: [
        { name: "Tofu Stir Fry", ingredients: "Tofu, Bell Peppers, Soy Sauce", instructions: "Stir-fry tofu with vegetables.", price: 5 },
        { name: "Tofu Stir Fry", ingredients: "Tofu, Bell Peppers, Soy Sauce", instructions: "Stir-fry tofu with vegetables.", price: 5 }
        { name: "Vegan Curry", ingredients: "Potatoes, Carrots, Coconut Milk", instructions: "Cook vegetables with coconut milk.", price: 4 }
      ]
    }
  };

  const meals = recipeDatabase[goal][diet];
  if (!meals) {
    alert('No meals available for this combination!');
    return;
  }

  // Display meal plan
  const recipeContainer = document.getElementById('recipes');
  recipeContainer.innerHTML = '';

  meals.forEach(meal => {
    const totalCost = (meal.price * servings).toFixed(2);
    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('col-md-6');

    recipeDiv.innerHTML = `
      <div class="recipe-card">
        <h3>${meal.name}</h3>
        <p><strong>Ingredients:</strong> ${meal.ingredients}</p>
        <p><strong>Instructions:</strong> ${meal.instructions}</p>
        <p><strong>Servings:</strong> ${servings}</p>
        <p><strong>Total Cost:</strong> $${totalCost}</p>
      </div>
    `;

    recipeContainer.appendChild(recipeDiv);
  });
});
