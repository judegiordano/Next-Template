/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare global {
	namespace Cypress {
		interface Chainable<Subject> {
			/**
			 *
			 * @param {string} email
			 * @param {string} password
			 * @memberof Chainable
			 */
			login(email: string, password: string): void

			/**
			 *
			 * @param {'log'} event
			 * @param {*} arg
			 * @param {(Partial<Loggable & Timeoutable>)} [options]
			 * @return {*}  {Chainable<void>}
			 * @memberof Chainable
			 */
			task(event: "log", arg: any, options?: Partial<Loggable & Timeoutable>): void

			/**
			 *
			 * @param {'user'} path
			 * @param {Partial<Timeoutable>} [options]
			 * @return {*}  {Chainable<{ email: string, password: string }>}
			 * @memberof Chainable
			 */
			fixture(
				path: "user",
				options?: Partial<Timeoutable>
			): Chainable<{ email: string; password: string }>
		}
	}
}
