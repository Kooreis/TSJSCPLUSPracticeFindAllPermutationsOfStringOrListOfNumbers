# Question: How do you find all permutations of a string or list of numbers? JavaScript Summary

The provided JavaScript code defines a function, `getPermutations`, that generates all possible permutations of a given string. The function uses recursion and a for loop to achieve this. If the input string only contains one character, the function simply returns an array containing that single character string. However, if the string contains more than one character, the function iterates over each character in the string. For each character, it removes that character from the string and recursively calls `getPermutations` on the remaining characters. This generates all permutations of the remaining characters. The function then prepends the removed character to each of these permutations and adds the resulting strings to the `results` array. This process is repeated for each character in the string, ensuring that all possible permutations are generated. The function finally returns the `results` array, which contains all permutations of the input string.

---

# TypeScript Differences

The TypeScript version of the solution is more versatile than the JavaScript version as it can handle both strings and arrays of numbers, while the JavaScript version only handles strings. 

In the TypeScript version, the function `getPermutations` is defined with a parameter `input` that can be either a string or an array of numbers (`string | number[]`). The function then checks the type of the input using the `typeof` operator and handles the input accordingly. 

The TypeScript version also uses the `let` keyword for variable declaration, which is block-scoped and thus generally considered better practice than the function-scoped `var` keyword used in the JavaScript version. 

The TypeScript version uses the `filter` method to create the `remainingNums` array, which is a more modern and functional approach compared to the `substring` method used in the JavaScript version to create the `charsLeft` string. 

The TypeScript version also uses the `for...of` loop to iterate over the `subPermutation` of `getPermutations(remainingString)` or `getPermutations(remainingNums)`, which is more readable and easier to understand than the traditional `for` loop used in the JavaScript version.

Finally, the TypeScript version uses explicit type annotations (`: string[] | number[][]` and `: string[]` or `: number[][]`) to specify the return type of the function and the type of the `permutations` variable, which can help catch potential type errors at compile time. The JavaScript version does not have this feature as JavaScript is a dynamically typed language.

---

# C++ Differences

The JavaScript version and the C++ version both solve the problem using recursion, but they use different approaches.

The JavaScript version uses a recursive function that removes one character at a time from the string, then generates all permutations for the remaining characters, and then combines the removed character with each of these permutations. The base case for the recursion is when the string has only one character left. The JavaScript version uses the `substring` method to remove characters from the string and the `push` method to add new permutations to the results array.

The C++ version uses a recursive function that swaps each character of the string with the first character, then generates all permutations for the remaining characters, and then swaps the characters back. The base case for the recursion is when the first character is the last character of the string. The C++ version uses the `swap` function from the `<algorithm>` library to swap characters in the string and the `cout` object from the `<iostream>` library to print each permutation. The C++ version also uses the `size` method to get the length of the string.

In terms of language features, the JavaScript version uses dynamic typing and automatic memory management, while the C++ version uses static typing and manual memory management. The JavaScript version also uses string concatenation to combine characters, while the C++ version uses character swapping. The C++ version also uses standard input and output for user interaction, while the JavaScript version does not.

---
