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

