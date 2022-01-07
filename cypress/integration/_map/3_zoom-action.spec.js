context("Startup", () => {
  beforeEach(() => {
    cy.visit("//localhost:3001");
  });

  it("sees a map", () => {
    cy.get("#map").should("exist");
  });

  it("zooms ", () => {
    cy.wait(1000);

    const map = cy.get("#map");
    map.should("exist");

    const canvas = cy.get(".mapboxgl-canvas");

    map
      .trigger("mouseenter", 700, 250)
      .trigger("wheel", { deltaY: 2266.666666 }); // trigger the synthetic event
  });
});
