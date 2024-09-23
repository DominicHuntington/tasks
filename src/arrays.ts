/**
 *checks if the arrays length is 0, if so returns a empty array
 then if its only 1 it returns an array with that one  element twice
 otherwise it returns a array with the first element and the last element
 */
export function bookEndList(numbers: number[]): number[] {

    if (numbers.length === 0) {
        return [];
      } else if (numbers.length === 1) {
        return numbers = [numbers[0], ...numbers]; 
      } else {
        return [numbers[0], numbers[numbers.length - 1]]; 
      }
}
/**
 *simply uses map to iterate through the array multiplying each element by 3
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map(num => num * 3);
}
/**iterates through the array changing each string to a int. If its a invalid change it defaults to returning 0 for that element
 *
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map(num => Number(num) || 0);
}
/**
 *
 */
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map (amounts => {const removessign = amounts.replace(/^\$/,''); return Number(removessign)||0;
    });
};
/**
 *
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    return messages
    .filter(messages => !messages.endsWith('?'))
    .map(messages => messages.endsWith('!')?messages.toUpperCase() : messages);
};
/**
 * This one simply filters out the words that are 4 or less and then returns the length of that new array
 */
export function countShortWords(words: string[]): number {
    return words.filter(words => words.length <4).length;
}
/**
 * 
 */
export function allRGB(colors: string[]): boolean {
    return colors.every(colors => colors === 'red' || colors === 'green' || colors === 'blue');
}
/**
 *
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((currenttotal,num)=> currenttotal+num,0);
    const stringform = addends.length > 0 ? addends.join('+'):0;
    return sum + '=' + stringform;
}

/**
 * 
 */
export function injectPositive(values: number[]): number[] {
    let sum = 0; 
    let negintindex = -1; 
    values.some((value, index) => {
        if (value < 0 && negintindex === -1) {
            negintindex = index;
            return true;
        }
        sum += value;
        return false;
    });
    if (negintindex !== -1) {
        return [
            ...values.slice(0,negintindex + 1), 
            sum, 
            ...values.slice(negintindex + 1) 
        ];
    } else {
        
        return [...values, sum];
    }
}
