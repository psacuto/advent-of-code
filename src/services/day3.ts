export function day3_1(input: string) {
  const rucksacks = input.split("\n");

  const aCode = "a".charCodeAt(0);
  const ACode = "A".charCodeAt(0);

  const result = rucksacks
    .map((rucksack) => [
      rucksack.slice(0, rucksack.length / 2).split(""),
      rucksack.slice(rucksack.length / 2).split(""),
    ])
    .map(
      (compartment) =>
        compartment[0].filter((item) => compartment[1].includes(item))[0]
    )
    .map((item) => item.charCodeAt(0))
    .reduce(
      (acc, code) =>
        acc + (code >= aCode ? code - aCode : code - ACode + 26) + 1,
      0
    );

  return result.toString();
}

export function day3_2(input: string) {
  const rucksacks = input.split("\n");

  const aCode = "a".charCodeAt(0);
  const ACode = "A".charCodeAt(0);

  const result = rucksacks
    .reduce<string[][]>((acc, curr, index) => {
      const destinationIndex = Math.floor(index / 3);
      if (destinationIndex >= acc.length) {
        acc.push([]);
      }
      acc[destinationIndex].push(curr);
      return acc;
    }, [])
    .map((arr) => arr.map((s) => s.split("")))
    .map(
      (arr) =>
        arr[0].filter(
          (item) => arr[1].includes(item) && arr[2].includes(item)
        )[0]
    )
    .map((item) => item.charCodeAt(0))
    .reduce(
      (acc, code) =>
        acc + (code >= aCode ? code - aCode : code - ACode + 26) + 1,
      0
    );

  return result.toString();
}
