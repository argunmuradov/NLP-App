import { errorMsg } from '../src/client/js/formHandler'

describe("Testing the Error message functionality", () => {
    test("Testing the errorMsg() function", () => {
        
        const output = "The request was timed out due to internal server issues.";
        expect(errorMsg()).toEqual(output);
    })
});