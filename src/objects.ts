import { Question, QuestionType } from "./interfaces/question";

export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    return {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
}

/**
I have it check if the answer after being trimmed is equal tto the expected. I  have it toUppercase and toLowercase so that
its capitalization doesnt matter
 */

export function isCorrect(question: Question, answer: string): boolean {
    return answer.trim().toLowerCase() === question.expected || answer.trim().toUpperCase() === question.expected;
}

/**
I have it check what type the question is. if it is short answer then it just goes to valid or true. But if
its multiple choice i have it check the options to see if the answer is in the options
 */
export function isValid(question: Question, answer: string): boolean {
    if(question.type === 'short_answer_question'){
        return true;
    }else if (question.type === 'multiple_choice_question'){
        return question.options.includes(answer);
    }
    return false;
}

/**
I just have it make a new const called short form and have that be set to a substring made up of spaces 0-10
 */
export function toShortForm(question: Question): string {
    const shortform = question.name.substring(0,10);
    return `${question.id}: ${shortform}`; // prints it formatted
}

/**
 */
export function toMarkdown(question: Question): string {
    let markdown = `# ${question.name}\n${question.body}`;// formats it to be name then newline then body
    if (question.type === 'multiple_choice_question'){
        question.options.forEach(option => { // goes through each option that is stored in question.options and to be added to markdown for printing
            markdown += `\n- ${option}`; // makes sure they are newlined and printed formatted
        });
    }
    return markdown;

}

/**
 I did it this way so that it has all of the info copied but didnt mutate the original and instead made
 a new question
 */
export function renameQuestion(question: Question, newName: string): Question {
    return {
        id: question.id,
        name: newName, 
        type: question.type,
        body: question.body,
        expected: question.expected,
        options: question.options,
        points: question.points,
        published: question.published,
    };
}

/**
Like the last one I made a new question that copied the olds info but then I used ! to invert whatever
the original questions published to be for the new copy
 */
export function publishQuestion(question: Question): Question {
    return {
        id: question.id,
        name: question.name, 
        type: question.type,
        body: question.body,
        expected: question.expected,
        options: question.options,
        points: question.points,
        published: !question.published,
    };
}

/**
 I just have it make a new one with all the infro from the original except I have it change the name
 to be the string "copy of" added to the oldquestion.name
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
        return{
        id: id,
        name: "Copy of " + oldQuestion.name, 
        type: oldQuestion.type,
        body: oldQuestion.body,
        expected: oldQuestion.expected,
        options: oldQuestion.options,
        points: oldQuestion.points,
        published: false,
        };
}

/**
I just have it make a new one using all of the info from the original except I have it
add the given addOption to the list that is in question.options
 */
export function addOption(question: Question, newOption: string): Question {
    return {
        id: question.id,
        name: question.name, 
        type: question.type,
        body: question.body,
        expected: question.expected,
        options: [...question.options,newOption], 
        points: question.points,
        published: question.published,
    };
}

/**

 */

export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }

): Question {
    return {
        id,                        // sets the given id
        name,                      // sets the given name
        body: contentQuestion.body, // sets the body from contentQuestion
        type: contentQuestion.type, // sets the type from contentQuestion
        options: contentQuestion.options, // sets the options from contentQuestion
        expected: contentQuestion.expected, // sets the expected from contentQuestion
        points,                   // sets the points from the second question
        published: false          // sets published to be false
    };
}
