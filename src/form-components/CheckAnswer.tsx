import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string; //Takes a expected answer to compare the inpytted answer against
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState(""); // State to keep track of the answer

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value); //Sets user answer to be the inputted answer
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <input //Input area for the typed answer
                type="text"
                value={userAnswer}
                onChange={handleChange}
                placeholder="Enter your answer"
            />
            <p>{userAnswer === expectedAnswer ? "✔️" : "❌"}</p>{" "}
            {/* If the answer is true then show a checkmark, if false a x*/}
        </div>
    );
}
