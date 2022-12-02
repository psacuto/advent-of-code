export function day1_1(input: string) {
  const elvesCalories = input.split("\n");

  let maxCalories = 0;
  let currentCalories = 0;

  elvesCalories.forEach((itemCalories) => {
    const calories = Number(itemCalories);
    if (!itemCalories) {
      maxCalories = Math.max(maxCalories, currentCalories);
      currentCalories = 0;
      return;
    }
    currentCalories += calories;
  });

  return maxCalories.toString();
}
