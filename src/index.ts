export {};

// Conversion of type 'X' to type 'Y' may be a mistake in TS

// EXAMPLE 1 - Widen the type to `unknown` to solve the error

const num = 5;

const str: string = num as unknown as string;

console.log(str);

// ---------------------------------------------------

// // EXAMPLE 2 - Another example of a wide type

// // 👇️ const numOrStr: "bobbyhadz" | 100
// const numOrStr = Math.random() > 0.5 ? 'bobbyhadz' : 100;

// // ✅ Works fine
// const str: string = numOrStr as string;
// console.log(str);

// ---------------------------------------------------

// // EXAMPLE 3 - Using a type assertion

// // 👇️ const num: 42
// const num = 42;

// // 👇️ const result: number
// const result = num as number;
// console.log(result);
