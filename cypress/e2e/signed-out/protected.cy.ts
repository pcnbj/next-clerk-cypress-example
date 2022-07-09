describe("Client side protection", () => {
  it("Can not see the protected content when signed out", () => {
    cy.signOutOfClerk();

    cy.visit("localhost:3000/protected");
    cy.contains("You can only see this if you are signed out");
  });
});

export {};
