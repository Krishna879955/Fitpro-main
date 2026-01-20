import React, { useState } from "react";

const MealPlanner = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const dietPlans = {
    Underweight: [
      {
        dayOfWeek: "Sunday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "Whole grain toast with peanut butter and banana slices",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "Greek yogurt with honey and almonds",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "Chicken or tofu stir-fry with vegetables and brown rice",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description:
              "Smoothie with spinach, banana, almond milk, and protein powder",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "Salmon with quinoa and steamed broccoli",
          },
        ],
      },
      {
        dayOfWeek: "Monday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "Whole grain toast with avocado slices and poached eggs",
          },
          {
            time: "Mid-Morning Snack (11:00-11:30AM)",
            description: "Greek yogurt with granola and mixed berries",
          },
          {
            time: "Lunch (1:00-1:30PM)",
            description:
              "Grilled chicken breast with quinoa and steamed vegetables",
          },
          {
            time: "Afternoon Snack (4:00-4:30PM)",
            description: "Apple slices with almond butter",
          },
          {
            time: "Dinner (7:00-7:30PM)",
            description:
              "Salmon fillet with sweet potato mash and sautéed spinach",
          },
        ],
      },
      {
        dayOfWeek: "Tuesday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description: "Oatmeal with sliced bananas and a drizzle of honey",
          },
          {
            time: "Mid-Morning Snack (11:00-11:30AM)",
            description: "Smoothie with spinach, berries, and protein powder",
          },
          {
            time: "Lunch (1:00-1:30PM)",
            description:
              "Turkey wrap with whole grain tortilla, lettuce, and tomatoes",
          },
          {
            time: "Afternoon Snack (4:00-4:30PM)",
            description:
              "Greek yogurt with chopped nuts and a sprinkle of cinnamon",
          },
          {
            time: "Dinner (7:00-7:30PM)",
            description:
              "Grilled shrimp with quinoa salad and roasted vegetables",
          },
        ],
      },

      {
        dayOfWeek: "Thursday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description: "Scrambled eggs with avocado on whole grain toast",
          },
          {
            time: "Mid-Morning Snack (11:00-11:30AM)",
            description: "Greek yogurt with sliced fruits and granola",
          },
          {
            time: "Lunch (1:00-1:30PM)",
            description:
              "Chicken salad with mixed greens, cherry tomatoes, and olive oil dressing",
          },
          {
            time: "Afternoon Snack (4:00-4:30PM)",
            description:
              "Homemade trail mix with nuts, dried fruits, and dark chocolate chips",
          },
          {
            time: "Dinner (7:00-7:30PM)",
            description: "Salmon fillet with quinoa pilaf and steamed broccoli",
          },
        ],
      },
      {
        dayOfWeek: "Friday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description: "Scrambled eggs with avocado on whole grain toast",
          },
          {
            time: "Mid-Morning Snack (11:00-11:30AM)",
            description: "Greek yogurt with sliced fruits and granola",
          },
          {
            time: "Lunch (1:00-1:30PM)",
            description:
              "Chicken salad with mixed greens, cherry tomatoes, and olive oil dressing",
          },
          {
            time: "Afternoon Snack (4:00-4:30PM)",
            description:
              "Homemade trail mix with nuts, dried fruits, and dark chocolate chips",
          },
          {
            time: "Dinner (7:00-7:30PM)",
            description: "Salmon fillet with quinoa pilaf and steamed broccoli",
          },
        ],
      },
      {
        dayOfWeek: "Saturday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description: "Scrambled eggs with avocado on whole grain toast",
          },
          {
            time: "Mid-Morning Snack (11:00-11:30AM)",
            description: "Greek yogurt with sliced fruits and granola",
          },
          {
            time: "Lunch (1:00-1:30PM)",
            description:
              "Chicken salad with mixed greens, cherry tomatoes, and olive oil dressing",
          },
          {
            time: "Afternoon Snack (4:00-4:30PM)",
            description:
              "Homemade trail mix with nuts, dried fruits, and dark chocolate chips",
          },
          {
            time: "Dinner (7:00-7:30PM)",
            description: "Salmon fillet with quinoa pilaf and steamed broccoli",
          },
        ],
      },
    ],
    Overweight: [
      {
        dayOfWeek: "Sunday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 cup banana shake",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "1 cup strawberry smoothie + 1 cup vegetable poha",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1.5 cup chicken curry + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Monday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "3 onion stuffed parantha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 cup mango shake",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup moong dal/ chicken curry + 1 cup potato and caulifllower vegetable + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "1 cup pomegranate juice + 2 butter toasted bread",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1 cup beans potato vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Tuesday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "3 paneer stuffed besan cheela + green chutney + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 apple smoothie with maple syrup",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description:
              "1 cup tomato soup with bread crumbs + 1 cup aloo chaat",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1 cup carrot peas vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Wednesday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "1.5 cup vegetable bread upma + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 cup ripe banana with 2 tsp ghee",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup rajma curry + 1 cup spinach potato + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "1 cup vegetable juice + 1 cup upma",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1.5 cup parwal vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Thursday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "2 cucumber potato sandwich + 1 tsp green chutney + 1 orange juice + 3 cashews + 2 walnuts + 4 almonds",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 cup buttermilk + 1 cup sweet potato chaat",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup white chana/ fish curry + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "1 cup almond milk + banana",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description:
              "1 cup cauliflower potato vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Friday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "2 cup vegetable poha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "2 cups watermelon juice",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup chana dal + 1 cup bhindi vegetable + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description:
              "1 cup sprouts salad + 2 potato cheela + green chutney",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1 cup peas mushroom vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Saturday",
        meals: [
          // Saturday meals
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "3 vegetable suji cheela + 1 cup strawberry shake + 4 cashews + 4 almonds + 3 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 cup coconut water + 1 cup pomegranate",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup mix dal + 1 cup soybean curry + 3 chapatti + 1/2 cup curd + salad",
          },
          { time: "Evening (4:00-4:30PM)", description: "...add evening meal" },
          { time: "Dinner (8:00-8:30PM)", description: "...add dinner meal" },
        ],
      },
    ],
    Obese: [
      {
        dayOfWeek: "Sunday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "2 egg brown bread sandwich + green chutney + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 cup banana shake",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup arhar dal + 1 cup potato curry + 3 chapatti + 1/2 cup rice + 1/2 cup low fat curd + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "1 cup strawberry smoothie + 1 cup vegetable poha",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1.5 cup chicken curry + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Monday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "3 onion stuffed parantha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 cup mango shake",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup moong dal/ chicken curry + 1 cup potato and cauliflower vegetable + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "1 cup pomegranate juice + 2 butter toasted bread",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1 cup beans potato vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Tuesday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "3 paneer stuffed besan cheela + green chutney + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 apple smoothie with maple syrup",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup masoor dal + 1 cup calocasia + 3 chapatti + 1/2 cup rice + 1 cup low curd + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description:
              "1 cup tomato soup with bread crumbs + 1 cup aloo chaat",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1 cup carrot peas vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Wednesday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "1.5 cup vegetable bread upma + 1 cup milk + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 cup ripe banana with 2 tsp ghee",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup rajma curry + 1 cup spinach potato + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "1 cup vegetable juice + 1 cup upma",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1.5 cup parwal vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Thursday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "2 cucumber potato sandwich + 1 tsp green chutney + 1 orange juice + 3 cashews + 2 walnuts + 4 almonds",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 cup buttermilk + 1 cup sweet potato chaat",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup white chana/ fish curry + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "1 cup almond milk + banana",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description:
              "1 cup cauliflower potato vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Friday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "2 cup vegetable poha + 1 cup curd + 3 cashews + 4 almonds + 2 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "2 cups watermelon juice",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup chana dal + 1 cup bhindi vegetable + 3 chapatti + 1/2 cup rice + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description:
              "1 cup sprouts salad + 2 potato cheela + green chutney",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1 cup peas mushroom vegetable + 3 chapatti + salad",
          },
        ],
      },
      {
        dayOfWeek: "Saturday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "3 vegetable suji cheela + 1 cup strawberry shake + 4 cashews + 4 almonds + 3 walnuts",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "1 cup coconut water + 1 cup pomegranate",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "1 cup mix dal + 1 cup soybean curry + 3 chapatti + 1/2 cup curd + salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description:
              "1 cup fruit salad + 4 pc vegetable cutlets + green chutney",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "1 cup karela vegetable + 3 chapatti + salad",
          },
        ],
      },
    ],
    NormalWeight: [
      {
        dayOfWeek: "Sunday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "Oatmeal with mixed berries and a dollop of Greek yogurt",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "A piece of fruit (e.g., apple or pear)",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "Grilled chicken or fish with quinoa and steamed vegetables",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "Carrot sticks with hummus",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "Baked salmon with sweet potato and broccoli",
          },
        ],
      },
      {
        dayOfWeek: "Monday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "Smoothie bowl with spinach, banana, almond milk, and granola",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "Greek yogurt with mixed nuts",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description: "Turkey and avocado wrap with a side salad",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "A handful of almonds or walnuts",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description:
              "Grilled chicken breast with quinoa and roasted vegetables",
          },
        ],
      },
      {
        dayOfWeek: "Tuesday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "Whole grain toast with mashed avocado and poached eggs",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "Cottage cheese with sliced peaches",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "Chickpea salad with feta cheese and lemon vinaigrette",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "Green smoothie (kale/spinach, banana, almond milk)",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "Grilled shrimp skewers with brown rice and asparagus",
          },
        ],
      },
      {
        dayOfWeek: "Wednesday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description: "Yogurt parfait with granola and fresh berries",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "A small handful of trail mix",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "Vegetarian stir-fry with tofu, bell peppers, and broccoli",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "Whole grain crackers with hummus",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description:
              "Grilled salmon with quinoa pilaf and mixed greens salad",
          },
        ],
      },
      {
        dayOfWeek: "Thursday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description: "Spinach and feta omelette with whole wheat toast",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "Sliced cucumber with tzatziki dip",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description: "Lentil soup with a side of multigrain bread",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "A piece of dark chocolate and a small apple",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description: "Grilled chicken with quinoa and roasted vegetables",
          },
        ],
      },
      {
        dayOfWeek: "Friday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description:
              "Banana pancakes made with oat flour and topped with yogurt and berries",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "A handful of mixed nuts and dried fruits",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "Caprese salad with fresh mozzarella, tomatoes, and basil",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "Vegetable sticks with guacamole",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description:
              "Grilled fish tacos with cabbage slaw and avocado crema",
          },
        ],
      },
      {
        dayOfWeek: "Saturday",
        meals: [
          {
            time: "Breakfast (8:00-8:30AM)",
            description: "Whole grain waffles with mixed fruit compote",
          },
          {
            time: "Mid-Meal (11:00-11:30AM)",
            description: "Greek yogurt with honey and sliced almonds",
          },
          {
            time: "Lunch (2:00-2:30PM)",
            description:
              "Quinoa salad with black beans, corn, and cherry tomatoes",
          },
          {
            time: "Evening (4:00-4:30PM)",
            description: "Fresh fruit salad with a drizzle of honey",
          },
          {
            time: "Dinner (8:00-8:30PM)",
            description:
              "Grilled chicken with whole wheat pasta and marinara sauce",
          },
        ],
      },
    ],
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const Alert = () => {
    <div class="alert alert-danger" role="alert">
      A simple danger alert—check it out!
    </div>;
  };
  const generateMealPlan = () => {
    if (selectedOption && dietPlans[selectedOption]) {
      return dietPlans[selectedOption].map((dayPlan, index) => (
        <div className="card" key={index}>
          <div class="content">
            <div class="price">{dayPlan.dayOfWeek}</div>
            {dayPlan.meals.map((meal, mealIndex) => (
              <div class="price" key={mealIndex}>
                <div class="description">
                  <strong>{meal.time}</strong>: {meal.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ));
    } else {
      return Alert;
    }
  };

  return (
    <div>
      <h2>Meal Planner</h2>
      <label>
        Select your weight category:
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="">Select...</option>
          <option value="Underweight">Underweight</option>
          <option value="NormalWeight">Normal Weight</option>
          <option value="Overweight">Overweight</option>
          <option value="Obese">Obese</option>
        </select>
      </label>
      <div>{generateMealPlan()}</div>
    </div>
  );
};

export default MealPlanner;
