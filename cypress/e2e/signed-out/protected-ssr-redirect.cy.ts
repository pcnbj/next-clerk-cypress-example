describe("SSR protection redirect", () => {
  it("Can not see SSR protected page when signed out and is redirected to sign-in page", () => {
    cy.signOutOfClerk();

    cy.visit({
      url: "localhost:3000/protected-ssr-redirect",
      failOnStatusCode: false,
    });

    cy.contains("This is the sign-in page");
  });
});

export {};
