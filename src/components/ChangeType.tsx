import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    //initially set to short answer question
    const [questionType, setQuestionType] = useState<QuestionType>('short_answer_question');

    //if question type is short answer then change to multiple choice and vice versa
    const changeType = () => {
        setQuestionType(prevType => 
            prevType === 'short_answer_question' ? 'multiple_choice_question' : 'short_answer_question'
        );
    };

    //button that calls change type when clicked, Writes the question type based on what the questionType value is
    return (
        <div>
            <Button onClick={changeType}>
                Change Type
            </Button>
            {questionType === 'short_answer_question' ? (
                <p style={{ marginTop: "10px" }}>Short Answer</p>
            ) : (
                <p style={{ marginTop: "10px" }}>Multiple Choice</p>
            )}
        </div>
    );
}
