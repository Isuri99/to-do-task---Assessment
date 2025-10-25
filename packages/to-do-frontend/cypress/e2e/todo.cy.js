describe('Todo App E2E', () => {
  beforeEach(() => {
   
    cy.visit('http://localhost:3000'); 
  });

  it('should create a new task', () => {
    // Type in title and description
    cy.get('.task-title-input').type('Buy groceries');
    cy.get('.task-desc-input').type('Milk, Eggs, Bread');

    // Click the Add button
    cy.contains('button', 'Add').click();

    // Check that the task appears in the list
    cy.get('.task-list').contains('h3', 'Buy groceries').should('be.visible');
    cy.get('.task-list').contains('p', 'Milk, Eggs, Bread').should('be.visible');
  });

  it('should mark a task as completed', () => {
    // Click the Done button of the task
    cy.get('.task-list')
      .contains('h3', 'Buy groceries')
      .parent()
      .within(() => {
        cy.contains('button', 'Done').click();
      });

    // Task should no longer be visible
    cy.get('.task-list').contains('h3', 'Buy groceries').should('not.exist');
  });
});

