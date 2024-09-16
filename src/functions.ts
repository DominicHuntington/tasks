/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 * for this i simply put the temperature variable into the equation for f
 */
export function fahrenheitToCelius(temperature: number): number {
    return (temperature - 32) * 5/  9; 
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero. 
 * I did it by having it check if the number in first is greater than 0, if so then it gives back that value to be added
 * otherwise first returns 0. This repeats for all 3 adding them as it goes
 */
export function add3(first: number, second: number, third: number): number {
    return (first > 0? first :0) + (second > 0? second :0) + (third > 0? third :0);
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 * I just had it convert to upper case and then added a "!"
 */
export function shout(message: string): string {
    return message.toUpperCase() + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 * For this i just had it check if it ended with a "?" or not
 */

export function isQuestion(message: string): boolean {
    return message.endsWith("?");
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 * I had it check over if the word was yes or YES in which case it returns true or no or NO in which case
 * it returns false, otherwise it returns null
 */
export function convertYesNo(word: string): boolean | null {
    return word =="yes" ? true : word == "YES" ? true : word == "no" ? false: word == "NO" ? false: null;
    
}
