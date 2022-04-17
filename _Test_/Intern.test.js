const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Izzy', 90, 'moizzy89@gmail.com', 'LSU');
    
    // expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('IzorIzzy', 90, 'moizzy89@gmail.com', 'LSU');
    
    // expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('IzorIzzy', 90, 'moizzy89@gmail.com', 'LSU');

    expect(intern.getRole()).toEqual("Intern");
}); 