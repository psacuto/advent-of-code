function parseCrateStacksSection(crateStacksSection: string[]): string[][] {
  const [bottom, ...stacks] = [...crateStacksSection].reverse();
  const stacksNumber = bottom.split(" ").filter((s) => !!s).length;
  const initialState: string[][] = Array.from(
    { length: stacksNumber },
    () => []
  );

  const crateReg = /\[(?<crate>[A-Z])\]|\s{3,4}/g;
  for (const current of stacks) {
    const matches = current.matchAll(crateReg)!;

    let idx = 0;
    for (let match of matches) {
      const crate = match.groups!.crate;
      if (crate) {
        initialState[idx].push(crate);
      }
      idx++;
    }
  }
  return initialState;
}

export function day5_1(input: string) {
  const [crateStacksSection, movesSection] = input
    .split("\n\n")
    .map((s) => s.split("\n"));

  const crateStacks = parseCrateStacksSection(crateStacksSection);

  const moveReg = /move (\d+) from (\d+) to (\d+)/gm;

  for (const move of movesSection) {
    const arr = move.matchAll(moveReg)!.next().value.slice(1);
    for (let i = 0; i < Number(arr[0]); i++) {
      const crate = crateStacks[Number(arr[1]) - 1].pop()!;
      crateStacks[Number(arr[2]) - 1].push(crate);
    }
  }

  return crateStacks.map((stack) => stack[stack.length - 1]).join("");
}

export function day5_2(input: string) {
  const [crateStacksSection, movesSection] = input
    .split("\n\n")
    .map((s) => s.split("\n"));

  const crateStacks = parseCrateStacksSection(crateStacksSection);

  const moveReg = /move (\d+) from (\d+) to (\d+)/gm;

  for (const move of movesSection) {
    const arr = move.matchAll(moveReg)!.next().value.slice(1);
    const pack = [];
    for (let i = 0; i < Number(arr[0]); i++) {
      const crate = crateStacks[Number(arr[1]) - 1].pop()!;
      pack.unshift(crate);
    }
    for (let i = 0; i < pack.length; i++) {
      crateStacks[Number(arr[2]) - 1].push(pack[i]);
    }
  }

  return crateStacks.map((stack) => stack[stack.length - 1]).join("");
}
