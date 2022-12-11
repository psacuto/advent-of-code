interface Operation {
    operands: string[];
    operator: string;
}

type ThrowRule = {
    against: number;
    ifTrue: string;
    ifFalse: string;
};

// Monkey 0:
// Starting items: 79, 98
// Operation: new = old * 19
// Test: divisible by 23
//   If true: throw to monkey 2
//   If false: throw to monkey 3

interface Monkey {
  code: string;
  items: number[];
  operation: Operation;
  test: ThrowRule;
  inspected: number;
}

function parseMonkeysInput(input: string) {
  const monkeys: Array<Monkey> = [];

  for (const section of input.split("\n\n")) {
    const lines = section.split("\n").map((s) => s.trim());

    const code = lines[0].split(" ")[1].slice(0, -1);

    const items = lines[1]
      .split(":")[1]
      .split(",")
      .map((s) => Number(s.trim()!));

    const m = /new = (old|\d+) (\*|\+) (old|\d+)/g.exec(lines[2])!;
    const operation = { operands: [m[1], m[3]], operator: m[2] };

    const test = {
      against: Number(lines[3].split(" ").at(-1)!),
      ifTrue: lines[4].split(" ").at(-1)!,
      ifFalse: lines[5].split(" ").at(-1)!,
    };
    monkeys.push({
      code: code,
      items: items,
      operation: operation,
      test: test,
      inspected: 0,
    });
  }
  return monkeys;
}

function computeItemValuePart1(
  item: number,
  operation: Operation
): number {
  const [left, right] = operation.operands.map((op) =>
    op === "old" ? item : Number(op)
  );

  const result1 = operation.operator === "*" ? left * right : left + right;

  const result2 = Math.floor(result1 / 3);
  return result2;
}

function computeItemValuePart2(
  item: number,
  operation: Operation
): number {
  const [left, right] = operation.operands.map((op) =>
    op === "old" ? item : Number(op)
  );

  const result1 = operation.operator === "*" ? left * right : left + right;
  return result1;
}

function throwItem(monkeys: Monkey[], to: string, item: number) {
  const monkey = monkeys.find((m) => m.code === to)!;
  monkey.items.push(item);
}

function reduced(value: number, factor: number): any {
  let result = factor + (value % factor);

  return result;
}

function shenanigans1(monkeys: Monkey[]) {
  for (const monkey of monkeys) {
    for (const item of monkey.items) {
      let newItemValue = computeItemValuePart1(item, monkey.operation);
      const check = newItemValue % monkey.test.against === 0;

      if (check) {
        throwItem(monkeys, monkey.test.ifTrue, newItemValue);
      } else {
        throwItem(monkeys, monkey.test.ifFalse, newItemValue);
      }
      monkey.inspected++;
    }

    monkey.items = [];
  }
}

function shenanigans2(monkeys: Monkey[], factor: number) {
  for (const monkey of monkeys) {
    for (const item of monkey.items) {
      let newItemValue = computeItemValuePart2(
        reduced(item, factor),
        monkey.operation
      );
      const check = newItemValue % monkey.test.against === 0;

      if (check) {
        throwItem(monkeys, monkey.test.ifTrue, newItemValue);
      } else {
        throwItem(monkeys, monkey.test.ifFalse, newItemValue);
      }
      monkey.inspected++;
    }

    monkey.items = [];
  }
}

export function day11_1(input: string) {
  const monkeys = parseMonkeysInput(input);

  for (let round = 0; round < 20; round++) {
    shenanigans1(monkeys);
  }

  const [max1, max2] = monkeys.map((m) => m.inspected).sort((a, b) => b - a);

  return (max1 * max2).toString();
}

export function day11_2(input: string) {
  const monkeys = parseMonkeysInput(input);

  let factor = 1;
  for (const test of monkeys.map((m) => m.test.against)) {
    factor *= test;
  }
  for (let round = 0; round < 10000; round++) {
    shenanigans2(monkeys, factor);
  }

  const [max1, max2] = monkeys.map((m) => m.inspected).sort((a, b) => b - a);

  return (max1 * max2).toString();
}
