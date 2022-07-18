describe("SSR protection email password", () => {
  it("Can see SSR protected page when signed in", () => {
    cy.signInWithClerk({ strategy: "password" });

    cy.visit("localhost:3000/protected-ssr", { failOnStatusCode: false });
    cy.contains("This is protected by server side rendering");
  });
  it("Can see SSR protected page when signed in with overwritten email", () => {
    cy.signInWithClerk({
      strategy: "password",
      email: "testuser2+clerk_test@test.com",
      password: "mtk1vyp5UKE.vyv4wbp",
    });

    cy.visit("localhost:3000/protected-ssr", { failOnStatusCode: false });
    cy.contains("This is protected by server side rendering");
  });
});

export {};
