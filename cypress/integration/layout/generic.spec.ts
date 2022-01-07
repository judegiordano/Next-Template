/// <reference types="cypress" />

describe("Ensure Text Exists", () => {
	before(() => {
		cy.visit("/");
	});

	it("displays link", () => {
		cy.contains("Welcome to Next.js!").should("exist");
	});
});
