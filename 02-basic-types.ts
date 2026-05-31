let userName: string = "Hardik";
let age: number = 20;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Hardik", "Bholu"];

// Tuples
let person: [string, number] = ["Hardik", 20];



// Any (avoid)
let randomValue: any = 10;
randomValue = "string";
randomValue = true;

// Unknown (safer than any)
let userInput: unknown;
userInput = 5;
userInput = "text";

// Void (for functions that don't return)
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;
