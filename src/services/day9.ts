
function normalized(pos1: number[], pos2: number[]) {
    return [Math.sign(pos1[0] - pos2[0]), Math.sign(pos1[1] - pos2[1])];
}

function distance(pos1: Array<number>, pos2: Array<number>) {
    const diffX = pos1[0] - pos2[0];
    const diffY = pos1[1] - pos2[1];
    return Math.sqrt(diffX * diffX + diffY * diffY);
}

function moveNode(node: number[], v: number[]) {
    return [node[0] + v[0], node[1] + v[1]];
}

const conf: {
    [key: string]: number[];
} = {
    R: [1, 0],
    L: [-1, 0],
    U: [0, 1],
    D: [0, -1]
};

export function day9_1(input: string) {
    const explored = new Set();
    const moves = input.split("\n");
    let zeroXY = [0, 0];

    let tailPos = [...zeroXY];
    let headPos = [...zeroXY];
    for (const move of moves) {
        const [dir, count] = move.split(" ");

        const headVector = conf[dir];
        for (let i = 0; i < Number(count); i++) {
            const nextHeadPos = [headPos[0] + headVector[0], headPos[1] + headVector[1]];
            const dist = distance(tailPos, nextHeadPos);
            if (dist >= 2) { // let's move
                const vector = normalized(nextHeadPos, tailPos);
                tailPos = moveNode(tailPos, vector);
            }
            headPos = nextHeadPos;
            explored.add(tailPos.toString());
        }
    }

    return explored.size.toString();
}

export function day9_2(input: string) {
    const explored = new Set();
    const moves = input.split("\n");
    let zeroXY = [0, 0];

    const rope = new Array(10).fill(zeroXY);
    const prevVector = new Array(10).fill(zeroXY);
    for (const move of moves) {
        const [dir, count] = move.split(" ");

        prevVector[0] = conf[dir];
        for (let i = 0; i < Number(count); i++) {
            const nextHeadPos = moveNode(rope[0], prevVector[0]);
            let prevNode = nextHeadPos;
            for (let nIndex = 1; nIndex < rope.length; nIndex++) {
                let currentNode = rope[nIndex];

                const dist = distance(prevNode, currentNode);
                if (dist >= 2) { // let's move
                    const vector = normalized(prevNode, currentNode);
                    currentNode = moveNode(currentNode, vector);
                }
                rope[nIndex] = currentNode;
                prevVector[nIndex] = prevVector[nIndex - 1];
                prevNode = currentNode;
            }
            rope[0] = nextHeadPos;
            explored.add(rope[rope.length - 1].toString());
        }
    }
    return explored.size.toString();
}
