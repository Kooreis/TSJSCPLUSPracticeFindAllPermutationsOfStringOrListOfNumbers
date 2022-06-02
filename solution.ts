else {
        if (input.length === 1) return [input];
        const permutations: number[][] = [];
        for (let i = 0; i < input.length; i++) {
            const num = input[i];
            const remainingNums = input.filter((_, index) => index !== i);
            for (let subPermutation of getPermutations(remainingNums))
                permutations.push([num].concat(subPermutation));
        }
        return permutations;
    }
}