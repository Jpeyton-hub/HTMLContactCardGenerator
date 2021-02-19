const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Contains an Class with a constructor which sets a name id and email', () => {
        it('Contains name', () => {
            let employee = new Employee('testname', 'testid', 'testemail');
    
            expect(employee.name).toBe('testname');
        });
        it('Contains id', () => {
            let employee = new Employee('testname', 'testid', 'testemail');
    
            expect(employee.id).toBe('testid');
        });
        it('Contains email', () => {
            let employee = new Employee('testname', 'testid', 'testemail');
    
            expect(employee.email).toBe('testemail');
        });
    });

    describe('Methods get values of current properties', () => {
        it('getName returns name', () => {
            let employee = new Employee('testname', 'testid', 'testemail');

            expect(employee.getName()).toBe('testname');
        });
        it('getID returns id', () => {
            let employee = new Employee('testname', 'testid', 'testemail');

            expect(employee.getId()).toBe('testid');
        });
        it('getEmail returns email', () => {
            let employee = new Employee('testname', 'testid', 'testemail');

            expect(employee.getEmail()).toBe('testemail');
        });
        it('getRole returns role', () => {
            let employee = new Employee('testname', 'testid', 'testemail');

            expect(employee.getRole()).toBe('Employee');
        });
    });
});