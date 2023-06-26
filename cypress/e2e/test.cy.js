describe('First Test', () => {
it('Login Page', () => {
    //visits the url which is to be automated 
    cy.visit('https://sakshingp.github.io/assignment/login.html')

    //type username
    cy.log('-- write username');
    cy.get('#username').type('Ayush').should('exist');

    //type password
    cy.log('-- write password');
    cy.get('#password').type('ayush').should('exist');

    //tick the box to remember the login
    cy.get('.form-check-input').click()

    //click on the log-in button
    cy.get('#log-in').click().should('be.visible')

    //the home page will appear with a dashboard
}) 

    it('Home Page', () => {

    //visits the url in which to check the sorted values
    cy.visit('https://sakshingp.github.io/assignment/home.html');
    
    // Identify the table
    cy.get('table#transactionsTable').within(() => {

    // Capture the values from the "Amount" column and click on the Amount header
    //Select all cells within the table
    cy.get('#amount').click() 
    .invoke('text')
    .then((capturedValues) => {

        // Convert the Cypress chain to an array
        const originalArray = Array.from(capturedValues);

        // Create a sorted array
        const sortedArray = [...originalArray].sort((a, b) => a - b);

        // Compare the original array with the sorted array
        expect(originalArray).to.deep.equal(sortedArray);
    cy.log('the value is sorted');
        })
    })
})
})
