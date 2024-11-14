import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    // States for mode, name and student status
    const [editMode, setEditMode] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    // changes edit mode to on and off when the switch is clicked.
    function handleEditModeToggle(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked); // Sets edit mode to on or off
    }

    //Handles when name is entered
    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value); //Sets the user name to whats inputted
    }

    //Handles when student status is checked or unchecked
    function handleStudentChange(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked); //Sets the status of student or not
    }

    //Edit mode switch
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={editMode}
                onChange={handleEditModeToggle}
            />

            {
                (
                    editMode //If edit mode is true then show the input fields/checkboxes to allow changes to be made
                ) ?
                    <div>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={userName}
                                onChange={handleNameChange}
                                placeholder="Enter your name"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                id="is-student-checkbox"
                                label="Are you a student?"
                                checked={isStudent}
                                onChange={handleStudentChange}
                            />
                        </Form.Group>
                    </div>
                    //If edit mode is not true then display the current status and name assigned
                :   <div>
                        <p>
                            {userName} is{" "}
                            {isStudent ? "a student" : "not a student"}.
                        </p>
                    </div>

            }
        </div>
    );
}
