class File {
    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }

    public name: string;
    public size: number;
}

class Dir {
    private fullSize: number | null = null;
    private files: File[] = [];
    private dirs: Dir[] = [];

    public readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    public addDir(dir: Dir) {
        this.dirs.push(dir);
    }

    public addFile(file: File) {
        this.files.push(file);
    }

    public getFullSize(): number {
        if (!this.fullSize) {
            this.fullSize = this.files.reduce((acc, f) => acc + f.size, 0) + this.dirs.reduce((acc, subdir) => acc + subdir.getFullSize(), 0)
        }
        return this.fullSize;
    }

    public findBy(criteria: (d: Dir) => boolean): Dir[] {
        let flat = this.dirs.filter(criteria);
        for (const dirs of this.dirs.map(d => d.findBy(criteria))) {
            flat.push(...dirs);
        }
        return flat;
    }
}


function evalPath(currentPath: string, destination: string): string {
    const split = currentPath.split("/");
    if (destination === "..") split.pop();
    else if (destination === "/") {
        return "/";
    }
    else {
        split.push(destination);
    }

    const dest = split.join("/");
    return dest;
}

function pushEntry(keywords: string[], currentPath: string, rootDir: Dir) {
    let destinationDir = parsePath(currentPath, rootDir);

    if (keywords[0] === "dir") {
        destinationDir.addDir(new Dir(keywords[1]));
    }
    else {
        destinationDir.addFile(new File(keywords[1], Number(keywords[0])));
    }
}

function parsePath(path: string, rootDir: Dir) {
    const splitPath = path.split("/");
    let dir = rootDir;
    for (const part of splitPath) {
        const found = dir.findBy(d => d.name === part);
        if (found.length) {
            dir = found[0];
        }
    }
    return dir;
}

function readFileStructureFromInput(input: string) {
    const shellLines = input.split("\n");

    let currentPath = "";
    let listing = false;
    let rootDir: Dir = new Dir("");
    for (const line of shellLines) {
        const keywords = line.split(" ");
        if (keywords[0] === "$") {
            listing = false;
            const command = keywords[1];
            switch (command) {
                case "cd":
                    currentPath = evalPath(currentPath, keywords[2]);
                    continue;
                case "ls":
                    listing = true;
                    continue;
                default:
                    continue;
            }
        }
        if (listing) {
            pushEntry(keywords, currentPath, rootDir!);
        }
    }
    return rootDir;
}

export function day7_1(input: string) {
    let rootDir: Dir = readFileStructureFromInput(input);

    const sum = rootDir.findBy(d => d.getFullSize() <= 100000).reduce((acc, d) => acc + d.getFullSize(), 0);

    return sum.toString();
}

export function day7_2(input: string) {
    const rootDir: Dir = readFileStructureFromInput(input);

    const totalSize = 70000000;
    const requiredSpace = 30000000;
    const occupiedSpace = rootDir.getFullSize();
    const freeSpace = totalSize - occupiedSpace;

    let result = rootDir.findBy(d => d.getFullSize() + freeSpace >= requiredSpace).map(d => d.getFullSize()).sort((s1, s2) => s1 - s2)[0];
    return result.toString();
}    
