/// <reference types="cypress" />

describe("Ensure Text Exsts", () => {
	before(() => {
		cy.visit("/");
	});

	it("displays link", () => {
		cy.contains("Welcome to Next.js!").should("exist");
	});
});
