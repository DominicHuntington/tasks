import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import { TwoDice } from "./TwoDice";

/***
 * Helper function to extract a number from an HTMLElement's textContent.
 *
 * If you aren't familiar with Regular Expressions:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 */
export function extractDigits(element: HTMLElement): number | null {
    const attemptNumberText = element.textContent || "";
    // We use a "regular expression" to find digits and extract them as text
    const attemptNumberDigitsMatched = attemptNumberText.match(/\d+/);
    // Provides a Matched Regular Expression or null
    if (attemptNumberDigitsMatched === null) {
        // Should never be possible, since then there was no number to have found.
        // But TypeScript is cautious and demands we provide SOMETHING.
        return null;
    } else {
        // Not null, get the first matched value and convert to number
        return parseInt(attemptNumberDigitsMatched[0]);
    }
}

describe("TwoDice Component tests", () => {
    let mathRandomFunction: jest.SpyInstance;
    beforeEach(() => {
        mathRandomFunction = jest
            .spyOn(global.Math, "random")
            .mockReturnValue(0.5) // 4
            .mockReturnValueOnce(0.0) // 1
            .mockReturnValueOnce(0.99) // 6
            .mockReturnValueOnce(0.75) // 5
            .mockReturnValueOnce(0.75) // 5
            .mockReturnValueOnce(0.1) // 1
            .mockReturnValueOnce(0.1); // 1
    });
    afterEach(() => {
        jest.spyOn(global.Math, "random").mockRestore();
    });
    beforeEach(() => {
        render(<TwoDice />);
    });

    test("(1 pts) Clicking left button changes first number", async () => {
        const leftButton = screen.getByRole("button", { name: /Roll Left/i });
        await act(async () => {
            leftButton.click();
        });
        await act(async () => {
            leftButton.click();
        });
        await act(async () => {
            leftButton.click();
        });
        // Then the random function should be called 3 times
        expect(mathRandomFunction).toBeCalledTimes(3);
        // And the number to be 5
        const leftNumber = extractDigits(screen.getByTestId("left-die"));
        expect(leftNumber).toEqual(5);
    });
});
