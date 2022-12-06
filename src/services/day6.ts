export function day6_1(input: string) {
    const arr = input.split("");

    const markerSize = 4;

    const packetMarker = markerSize + arr.findIndex((_, index) => {
        const packet = input.slice(index, index + markerSize);

        for (const char of packet) {
            if (packet.split(char).length > 2) {
                return false;
            }
        }
        return true;
    });

    return packetMarker.toString();
}

export function day6_2(input: string) {
    const arr = input.split("");

    const markerSize = 14;

    const messageMarker = markerSize + arr.findIndex((_, index) => {
        const packet = input.slice(index, index + markerSize);

        for (const char of packet) {
            if (packet.split(char).length > 2) {
                return false;
            }
        }
        return true;
    });

    return messageMarker.toString();
}
