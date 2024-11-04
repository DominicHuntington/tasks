import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { makeBlankQuestion } from "./objects"; // Import the function

/*
Takes the array of questions and uses filter to create a new array with only the questions where published
is true
*/

export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
}

/*
Takes the array and iterates through it checking that the questions being added to the new array
dont have a empty string for their bods and expected or a empty array for its options
*/

export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question) =>
            question.body.trim() !== "" ||
            question.expected.trim() !== "" ||
            question.options.length > 0,
    );
}

/*
Uses find to iterate through the array and compares each ID to the ID being searched for. Otherwise returns null
*/

export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const foundQuestion = questions.find((question) => question.id === id);
    return foundQuestion || null;
}

/*
Uses filter to iterate through the questions making a new array with each question that does not equal the ID
*/

export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
}

/*
Uses map to create an array by iterating through the questions array and taking the questions name property
*/

export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
}

/*
Uses map to create a new array of answers tagged with each questions ID and the default state of not submitted
and not correct
*/

export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false,
    }));
}

/*
creates a new array by itterating through the questions array and copying them except also setting each of their
published property to true in the new array
*/

export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({ ...question, published: true }));
}

/*
Creates a new array of the questions but also adds a new question to it whos propertys are the given
ID, Name etc
*/

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    const newQuestion = makeBlankQuestion(id, name, type);
    return [...questions, newQuestion];
}

/*
Creates a new array of all the questions but checks each one for the given ID, If found the one with that
IDs name is changed to newName
*/

export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map(
        (question) =>
            question.id === targetId ?
                { ...question, name: newName } // Create a new question with the new name
            :   question, // Return the original question unchanged
    );
}

/*
Creates a new array of the questions except finds and changes the given option. If it -1 it goes to end otherwise
it replaces the option at the index with the new one.
*/
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            const updatedOptions =
                targetOptionIndex === -1 ?
                    [...question.options, newOption] // Add newOption to the end of the option array
                :   question.options.map(
                        (option, index) =>
                            index === targetOptionIndex ? newOption : option, // Replace the old optiom at targetOptionIndex
                    );

            return { ...question, options: updatedOptions }; // Return the new version of the question to the array
        }
        return question; // otherwise return the original question unchanged
    });
}
