function getPermutations(input: string | number[]): string[] | number[][] {
    if (typeof input === 'string') {
        if (input.length === 1) return [input];
        const permutations: string[] = [];
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            if (input.indexOf(char) != i) continue;
            const remainingString = input.slice(0, i) + input.slice(i + 1, input.length);
            for (let subPermutation of getPermutations(remainingString))
                permutations.push(char + subPermutation);
        }
        return permutations;
    }