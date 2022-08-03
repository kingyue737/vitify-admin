describe('Example Test', () => {
  it('login', () => {
    cy.visit('/')
    cy.url().should('eq', 'http://localhost:5050/login')
    cy.contains('Vitify').should('exist')

    cy.contains('label', '用户名')
      .invoke('attr', 'for')
      .then((id) => {
        cy.get('#' + id)
      })
      .type('admin')

    cy.contains('label', '密码')
      .invoke('attr', 'for')
      .then((id) => {
        cy.get('#' + id)
      })
      .type('admin123{Enter}')
      .url()
      .should('eq', 'http://localhost:5050/')
  })
})
