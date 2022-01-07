context("Startup", () => {
  beforeEach(() => {
    cy.visit("//localhost:3001");
  });

  it("sees a map", () => {
    cy.get("#map").should("exist");
  });

  it("drags ", () => {
    cy.wait(1000);

    cy.get("#map").should("exist");

    cy.get(".mapboxgl-canvas").should("exist");

    cy.get(".mapboxgl-canvas")
      .dragMapFromCenter({
        // Go 1/6 of map container width to the right (negative direction)
        xMoveFactor: -1 / 2,
        // Go 1/3 of map container height to the top (positive direction)
        yMoveFactor: 0 / 1,
      })
      .wait(500);

    cy.get("#map").click(500, 300);

    cy.findByText("this is the second marker").should("exist");
  });
});
