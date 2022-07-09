describe("SSR protection", () => {
  it("Returns 401 when signed out", () => {
    cy.signOutOfClerk();

    cy.request({
      url: "localhost:3000/protected-ssr",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });
});

export {};
