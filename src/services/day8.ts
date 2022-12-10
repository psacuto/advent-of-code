function isVisibleInRow(
  height: number,
  trees: number[][],
  colIndex: number,
  rowIndex: number,
  dir: 1 | -1
) {
  for (let y2 = rowIndex + dir; y2 < trees.length && y2 >= 0; y2 += dir) {
    const element = trees[y2][colIndex];
    if (element >= height) return false;
  }
  return true;
}

function isVisibleInCol(
  height: number,
  trees: number[][],
  colIndex: number,
  rowIndex: number,
  dir: 1 | -1
) {
  for (let x2 = colIndex + dir; x2 < trees[0].length && x2 >= 0; x2 += dir) {
    const element = trees[rowIndex][x2];
    if (element >= height) return false;
  }
  return true;
}

export function day8_1(input: string) {
  const trees = input.split("\n").map((s) => s.split("").map(Number));

  let visibleTrees = 0;

  for (let rowIndex = 0; rowIndex < trees.length; rowIndex++) {
    const row = trees[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const height = row[colIndex];
      if (
        isVisibleInRow(height, trees, colIndex, rowIndex, 1) ||
        isVisibleInRow(height, trees, colIndex, rowIndex, -1)
      ) {
        visibleTrees++;
      } else if (
        isVisibleInCol(height, trees, colIndex, rowIndex, 1) ||
        isVisibleInCol(height, trees, colIndex, rowIndex, -1)
      ) {
        visibleTrees++;
      }
    }
  }

  return visibleTrees.toString();
}

function countTreesAheadInRow(
  height: number,
  trees: number[][],
  colIndex: number,
  rowIndex: number,
  dir: 1 | -1
) {
  let count = 0;
  for (let y2 = rowIndex + dir; y2 < trees.length && y2 >= 0; y2 += dir) {
    const element = trees[y2][colIndex];
    if (element >= height) return count + 1;
    else count++;
  }
  return count;
}

function countTreesAheadInCol(
  height: number,
  trees: number[][],
  colIndex: number,
  rowIndex: number,
  dir: 1 | -1
) {
  let count = 0;
  for (let x2 = colIndex + dir; x2 < trees[0].length && x2 >= 0; x2 += dir) {
    const element = trees[rowIndex][x2];
    if (element >= height) return count + 1;
    else count++;
  }
  return count;
}

export function day8_2(input: string) {
  const trees = input.split("\n").map((s) => s.split("").map(Number));

  let bestScore = 0;

  for (let rowIndex = 0; rowIndex < trees.length; rowIndex++) {
    const row = trees[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const height = row[colIndex];

      const score =
        countTreesAheadInRow(height, trees, colIndex, rowIndex, 1) *
        countTreesAheadInRow(height, trees, colIndex, rowIndex, -1) *
        countTreesAheadInCol(height, trees, colIndex, rowIndex, 1) *
        countTreesAheadInCol(height, trees, colIndex, rowIndex, -1);

      if (score > bestScore) bestScore = score;
    }
  }

  return bestScore.toString();
}
