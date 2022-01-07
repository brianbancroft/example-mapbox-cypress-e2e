context("Startup", () => {
  beforeEach(() => {
    cy.visit("//localhost:3001");
  });

  it("sees a map", () => {
    cy.get("#map").should("exist");
  });

  it("has a popup", () => {
    cy.wait(1000);

    cy.get("#map").click(500, 300);

    cy.findByText("this is the first marker").should("exist");
  });
});
