export function day3_1(input: string) {
    const rucksacks = input.split("\n");

    const aCode = "a".charCodeAt(0);
    const ACode = "A".charCodeAt(0);

    const result = rucksacks
        .map(r => [r.slice(0, r.length / 2).split(""), r.slice(r.length / 2).split("")])
        .map(comp => comp[0].find(item => comp[1].includes(item)) || "")
        .map(c => c.charCodeAt(0))
        .reduce((acc, code) => acc + (code >= aCode ? code - aCode : code - ACode + 26) + 1, 0);

    return result.toString();
}



export function day3_2(input: string) {
    const rucksacks = input.split("\n");

    const aCode = "a".charCodeAt(0);
    const ACode = "A".charCodeAt(0);

    const result = rucksacks.reduce<string[][]>(
        (acc, curr, index) => {
            const destinationIndex = Math.floor(index / 3);
            if (destinationIndex >= acc.length) {
                acc.push([]);
            }
            acc[destinationIndex].push(curr);
            return acc;
        },
        [])
        .map(arr => arr.map(s => s.split("")))
        .map(arr => arr[0].filter(c => arr[1].some(c1 => c1 === c) && arr[2].some(c2 => c2 === c))[0])
        .map(c => c.charCodeAt(0))
        .reduce((acc, code) => acc + (code >= aCode ? code - aCode : code - ACode + 26) + 1, 0);
        
    return result.toString();
}