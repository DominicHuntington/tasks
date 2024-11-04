import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6() {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice() {
    const [leftDie, setLeftDie] = useState(2);
    const [rightDie, setRightDie] = useState(1);
    const [message, setMessage] = useState("");

    const checkWinLose = (left: number, right: number) => {
        if (left === 1 && right === 1) {
            setMessage("Lose");
        } else if (left === right) {
            setMessage("Win");
        } else {
            setMessage("");
        }
    };

    const rollLeft = () => {
        const newValue = d6();
        setLeftDie(newValue);
        checkWinLose(newValue, rightDie);
    };

    const rollRight = () => {
        const newValue = d6();
        setRightDie(newValue);
        checkWinLose(leftDie, newValue);
    };

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span>
            <span data-testid="right-die">{rightDie}</span>
            <div>
                <Button onClick={rollLeft}>Roll Left</Button>
                <Button onClick={rollRight}>Roll Right</Button>
            </div>
            {message && <div>{message}</div>}
        </div>
    );
}
