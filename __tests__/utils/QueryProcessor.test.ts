import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "bashayer"
          ));
    })

           test('should return andrew id', () => {
           const query = "What is your Andrew ID?";
           const response: string = QueryProcessor(query);
           expect(response).toBe("balsulta");
       });
    test('should add two numbers', () => {
        const query = "What is 43 plus 81?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("124");
    });
    test('should return the largest number', () => {
        const query = "Which of the following numbers is the largest: 22, 68, 36?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("68");
    });
    test('should add three numbers', () => {
        const query = "What is 4 plus 41 plus 12?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("57");
    });
    test('should return the primes', () => {
        const query = "Which of the following numbers are primes: 3, 18, 67, 52, 5?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("3, 67, 5");
    });
    test('should compute powers', () => {
        const query = "What is 59 to the power of 93?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("488919189022930724979613792621858909436902741445876996549674255477956124699504163824202072362533451376978807604502739230886865021683355980533142394664467315445260779");
    });
    test('should respect multiplication precedence', () => {
        const query = "What is 79 plus 4 multiplied by 81?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("403");
    });

    test('should subtract', () => {
        const query = "What is 50 minus 8 minus 2?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("40");
    });
});
