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

export function day1_2(input: string) {
  const elvesItemCalories = input.split("\n");

  const groups: number[] = [];
  let currentElfCalories = 0;
  elvesItemCalories.forEach((itemCalories) => {
    const calories = Number(itemCalories);
    if (!itemCalories) {
      groups.push(currentElfCalories);
      currentElfCalories = 0;
      return;
    }
    currentElfCalories += calories;
  });
  return groups
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((prev, current) => prev + current, 0)
    .toString();
}
