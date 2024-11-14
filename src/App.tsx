import React from "react";
import "./App.css";
import { Col, Container, Row, Button } from "react-bootstrap";
import catImage from "./assets/cat.jpg";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>header</h1>
            <ul role="list">
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "150px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>

                    <Col>
                        <div
                            style={{
                                width: "200px",
                                height: "150px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <DoubleHalf></DoubleHalf>
                        <ChooseTeam></ChooseTeam>
                        <ColoredBox></ColoredBox>
                        <Counter></Counter>
                        <RevealAnswer></RevealAnswer>
                        <TwoDice></TwoDice>
                        <ChangeType></ChangeType>
                    </Col>
                </Row>
            </Container>
            <div>
                <img src={catImage} alt="random cat jpg" />
            </div>

            <p style={{ border: "2px solid red", padding: "4px" }}>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload{" "}
                <span style={{ color: "red" }}> Dominic Huntington </span>.
                Hello World!!
            </p>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
