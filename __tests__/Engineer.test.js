const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    it('is instance of Employee', () => {
        let engineer = new Engineer('testname', 'testid', 'testemail', 'testgithub');

        expect(engineer instanceof Employee).toBe(true);
    });
    it('has github property', () => {
        let engineer = new Engineer('testname', 'testid', 'testemail', 'testgithub');

        expect(engineer.github).toBe('testgithub');
    });
    it('has working getGithub method', () => {
        let engineer = new Engineer('testname', 'testid', 'testemail', 'testgithub');

        expect(engineer.getGithub()).toBe('testgithub');
    });
    it('has working getRole method', () => {
        let engineer = new Engineer('testname', 'testid', 'testemail', 'testgithub');

        expect(engineer.getRole()).toBe('Engineer');
    });
});