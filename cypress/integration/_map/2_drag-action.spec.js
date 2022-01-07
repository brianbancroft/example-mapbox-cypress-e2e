context("Startup", () => {
  beforeEach(() => {
    cy.visit("//localhost:3001");
  });

  it("sees a map", () => {
    cy.get("#map").should("exist");
  });

  it("drags ", () => {
    cy.wait(1000);

    cy.get("#map")
      .trigger("mousedown", { which: 1 })
      .trigger("mousemove", { which: 1, x: 500, y: 0 })
      .trigger("mouseup")
      .wait(500);

    // cy.findByText("this is the other announcement").should("exist");
  });
});
