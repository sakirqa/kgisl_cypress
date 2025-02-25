describe("KGiSL assessment", () => {
  it("rate calculator", () => {
    //Visit the pos site
    cy.visit("https://www.pos.com.my/send/ratecalculator");
    //Enter From postcode
    cy.get('div.d-flex.mt-4>div>input[aria-label="Postcode"]')
      .type("35600", { force: true })
      .type("{enter}");

    //Select India from To
    cy.get('input[placeholder="Select country"]')
      .click({ force: true })
      .clear()
      .type("India", { delay: 2000 })
      .type("{downArrow}{enter}")
      .invoke("val")
      .should("eq", "India");

    //Enter weight 1
    cy.get('input[placeholder="eg. 0.1kg"]').click({ force: true }).type("1")

    //Click on Calculate
    cy.contains(" Calculate ").click({ force: true });

    //Assert that multiple quotes return
    cy.get("div.border-b.border-gray-300").should("have.length.greaterThan", 1)
      .children()
      .should('contain','Service Type') 
      .and('contain',' Book Now ')
  });
});
