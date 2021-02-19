const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern class', () => {
    it('is instance of Employee', () => {
        let intern = new Intern('testname', 'testid', 'testemail', 'school');

        expect(intern instanceof Employee).toBe(true);
    });
    it('has school property', () => {
        let intern = new Intern('testname', 'testid', 'testemail', 'school');

        expect(intern.school).toBe('school');
    });
    it('has working getSchool method', () => {
        let intern = new Intern('testname', 'testid', 'testemail', 'school');

        expect(intern.getSchool()).toBe('school');
    });
    it('has working getRole method', () => {
        let intern = new Intern('testname', 'testid', 'testemail', 'school');

        expect(intern.getRole()).toBe('Intern');
    });
});