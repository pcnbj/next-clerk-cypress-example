describe("Client side protection", () => {
  it("Can see the protected content when signed in", () => {
    cy.signInWithClerk({ strategy: "email-code" });

    cy.visit("localhost:3000/protected");
    cy.contains("You can only see this if you are signed in");
  });
  it("Can see the protected content when signed in with overwritten email", () => {
    cy.signInWithClerk({
      strategy: "email-code",
      email: "testuser2+clerk_test@test.com",
    });

    cy.visit("localhost:3000/protected");
    cy.contains("You can only see this if you are signed in");
  });
});

export {};
