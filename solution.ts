Here is a TypeScript solution for finding all permutations of a string or list of numbers:

```typescript
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
    } else {
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

console.log(getPermutations('abc'));
console.log(getPermutations([1, 2, 3]));
```

This solution uses a recursive function `getPermutations` to generate all permutations of a string or a list of numbers. The function checks the type of the input and handles it accordingly. If the input is a string, it generates all permutations by picking each character and recursively generating permutations of the remaining characters. If the input is a list of numbers, it generates all permutations by picking each number and recursively generating permutations of the remaining numbers. The generated permutations are then printed to the console.