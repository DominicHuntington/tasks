import React, { useState } from "react";
import { Button } from "react-bootstrap";

//state is initially false
export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    //when called changes the prev state to the opposite state
    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    //when the buttpm is clicked calls toggle visability. if is visible is true reveals 42
    return (
        <div>
            <Button onClick={toggleVisibility}>
                Reveal Answer
            </Button>
            {isVisible && <p style={{ marginTop: "10px" }}>42</p>}
        </div>
    );
}
