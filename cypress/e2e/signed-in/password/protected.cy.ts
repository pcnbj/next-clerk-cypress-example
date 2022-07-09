describe("Client side protection", () => {
  it("Can see the protected content when signed in", () => {
    cy.signInWithClerk({ strategy: "password" });

    cy.visit("localhost:3000/protected");
    cy.contains("You can only see this if you are signed in");
  });
  it("Can see the protected content when signed in with overwritten email and password", () => {
    cy.signInWithClerk({
      strategy: "password",
      email: "testuser2+clerk_test@test.com",
      password: "ebz-ekg.ukp_XUN0dyu",
    });

    cy.visit("localhost:3000/protected");
    cy.contains("You can only see this if you are signed in");
  });
});

export {};
