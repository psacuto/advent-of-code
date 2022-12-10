
export function day10_1(input: string) {
    const commands = input.split("\n").map(s => s.split(" "));
    let x = 1;
    let cycle = 0;
    let score = 0;

    for (const command of commands) {
        cycle++;

        if (isKeyCycle()) {
            score += cycle * x;
        }

        const [keyword, parameter] = command;

        if (keyword === "addx") {
            cycle++;

            if (isKeyCycle()) {
                score += cycle * x;
            }
            x += Number(parameter);
        }
    }

    return score.toString();

    function isKeyCycle() {
        return cycle === 20 || (cycle - 20) % 40 === 0;
    }
}

export function day10_2(input: string) {
    const commands = input.split("\n").map(s => s.split(" "));
    let x = 1;
    let cycle = 0;
    const pixels: string[] = [];

    for (const command of commands) {
        cycle++;

        putPixel(isSpriteVisible());

        const [keyword, parameter] = command;

        if (keyword === "addx") {
            cycle++;
            
            putPixel(isSpriteVisible());
            x += Number(parameter);
        }
    }

    const display = [];
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        const row = pixels.slice(rowIndex * 40, rowIndex * 40 + 39).join("");
        display.push(row);
    }

    return display.join("\n");

    function isSpriteVisible() {
        return [x - 1, x, x + 1].includes(cycle % 40 - 1);
    }

    function putPixel(lit: boolean) {
        pixels.push(lit ? "#" : ".");
    }
}


