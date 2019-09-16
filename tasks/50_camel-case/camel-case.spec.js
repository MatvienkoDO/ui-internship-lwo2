// import './camel-case';

xdescribe('Camel case', () => {

    test("'hello case'.camelCase() should return 'helloCase'", () => {
        expect('hello case'.camelCase()).toBe("helloCase");
    });

    test("'camel case word'.camelCase() should return 'camelCaseWord'", () => {
        expect('camel case word'.camelCase()).toBe("camelCaseWord");
    });

});
