const pairReg = /(\d+)-(\d+),(\d+)-(\d+)/g;

function isIncluded(range1: number[], range2: number[]): boolean {
    const [start1, end1] = range1;
    const [start2, end2] = range2;
    return (start1 >= start2 && end1 <= end2) || (start2 >= start1 && end2 <= end1);
}

export function day4_1(input: string) {
    const assigments = input.split("\n");

    const result = assigments
        .map(a => pairReg.exec(a)!.slice(1).map(Number))
        .map(list => [[list[0], list[1]], [list[2], list[3]]])
        .filter(pair => isIncluded(pair[0], pair[1]))
        .length;

    return result.toString();
}


function overlaps(range1: number[], range2: number[]): boolean {
    const [start1, end1] = range1;
    const [start2, end2] = range2;
    return (start1 <= start2 && end1 >= start2) || (start2 <= start1 && end2 >= start1);
}

export function day4_2(input: string) {
    const assigments = input.split("\n");

    const result = assigments
        .map(a => pairReg.exec(a)!.slice(1).map(Number))
        .map(list => [[list[0], list[1]], [list[2], list[3]]])
        .filter(pair => overlaps(pair[0], pair[1]))
        .length;

    return result.toString();
}