context("Startup", () => {
  beforeEach(() => {
    cy.visit("//localhost:3001");
  });

  it("sees a map", () => {
    cy.get("#map").should("exist");
  });

  it("has a popup", () => {
    cy.waitFor(2000);

    cy.get("#map").click(500, 300);

    cy.findByText("this is an important announcement").should("exist");
  });
});
