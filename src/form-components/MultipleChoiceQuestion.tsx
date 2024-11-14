import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[]; //list of options
    expectedAnswer: string; //The expected answer to be compared against
}): React.JSX.Element {
    //State for the current selected answer
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    //When an answer is chosen
    function handleSelectionChange(
        event: React.ChangeEvent<HTMLSelectElement>,
    ) {
        setSelectedAnswer(event.target.value); //Change the selected answer to be the new answer
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            {/* List of choices */}
            <select value={selectedAnswer} onChange={handleSelectionChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {/* If the selected answer is the same as the expected answer show a check, itherwise the x */}
            <div>
                {selectedAnswer === expectedAnswer ?
                    "✔️ Correct!"
                :   "❌ Incorrect"}
            </div>
        </div>
    );
}
