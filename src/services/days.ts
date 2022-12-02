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
  return groups.sort((a, b) => b - a).slice(0, 3).reduce((prev, current) => prev + current, 0);
}

export function day2_1(input: string) {
  let result = 0;

  const turns = input.split("\n").map(r => r.split(" "));

  turns.forEach(turn => {
    const his = turn[0].charCodeAt(0) - "A".charCodeAt(0) + 1;
    const mine = turn[1].charCodeAt(0) - "X".charCodeAt(0) + 1;
    result += mine;
    if (his === mine) {
      result += 3;
    }
    else {
      const diff = mine - his;
      if (diff === 1 || diff === -2) {
        result += 6;
      }
    }
  });

  return result.toString();
}

export function day2_2(input: string) {
  let result = 0;

  const turns = input.split("\n").map(r => r.split(" "));

  turns.forEach(turn => {
    const his = turn[0].charCodeAt(0) - "A".charCodeAt(0) + 1;
    let mine;
    switch (turn[1]) {
      case "X":
        mine = his === 1 ? 3 : his - 1;
        break;
      case "Y":
        mine = his;
        break;
      case "Z":
      default:
        mine = his === 3 ? 1 : his + 1;
        break;
    }

    result += mine;
    if (his === mine) {
      result += 3;
    }
    else {
      const diff = mine - his;
      if (diff === 1 || diff === -2) {
        result += 6;
      }
    }
  });

  return result.toString();
}