const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager Class', () => {
    it('is instance of Employee', () => {
        let manager = new Manager('testname', 'testid', 'testemail', 'testofficenumber');

        expect(manager instanceof Employee).toBe(true);
    });
    it('getRole returns manager', () => {
        let manager = new Manager('testname', 'testid', 'testemail', 'testofficenumber');

        expect(manager.getRole()).toBe('Manager');
    });
    it('has office number', () => {
        let manager = new Manager('testname', 'testid', 'testemail', 'testofficenumber');

        expect(manager.officeNumber).toBe('testofficenumber');
    });
    it('getofficeNumber returns officeNumber', () => {
        let manager = new Manager('testname', 'testid', 'testemail', 'testofficenumber');

        expect(manager.getOfficeNumber()).toBe('testofficenumber');
    });
});