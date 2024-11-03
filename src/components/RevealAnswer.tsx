import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    const toggleAnswer = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <div>
            <Button onClick={toggleAnswer}>Reveal Answer</Button>
            {isVisible && <div>42</div>}
        </div>
    );
}
