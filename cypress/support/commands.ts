Cypress.Commands.add("login", (email, password) => {
	cy.get("input[name=\"email\"]").type(email);
	cy.get("form").submit();

	cy.get("input[name=\"password\"]").type(password);
	cy.get("form").submit();
});
