context("Startup", () => {
  beforeEach(() => {
    cy.visit("//localhost:3001");
  });

  it("sees a map", () => {
    cy.get("#map").should("exist");
  });

  it("drags ", () => {
    cy.wait(1000);

    const map = cy.get("#map");
    map.should("exist");

    const canvas = cy.get(".mapboxgl-canvas");

    map
      .trigger("mouseenter", 700, 250)
      .trigger("mousedown", 700, 250, {
        bubbles: true,
        waitForAnimations: true,
        // which: 1,
        // pageX: 700,
        // pageY: 250,
      })
      // .wait(100)
      .trigger("mousemove", {
        bubbles: true,
        waitForAnimations: true,
        pageX: 550,
        pageY: 250,
        which: 1,
      })
      .wait(100)
      .trigger("mouseup", {
        bubbles: true,
        waitForAnimations: true,
        which: 1,
        pageX: 550,
        pageY: 250,
      })
      .wait(100);

    // canvas
    //   .trigger("mousedown", 590, 250)
    //   .trigger("mousemove", 580, 250)
    //   .wait(10)
    //   .trigger("mouseup", 580, 250)
    //   .wait(10);

    // canvas
    //   .trigger("mousedown", 580, 250)
    //   .trigger("mousemove", 570, 250)
    //   .wait(10)
    //   .trigger("mouseup", 570, 250)
    //   .wait(10);

    // canvas
    //   .trigger("mousedown", 570, 250)
    //   .trigger("mousemove", 560, 250)
    //   .wait(10)
    //   .trigger("mouseup", 560, 250)
    //   .wait(10);

    // cy.findByText("this is the other announcement").should("exist");
  });
});
