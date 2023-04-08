describe("happy case for buy product", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#uncontrolled-tab-example-tab-login").click();
    cy.get("#email").type("dew");
    cy.get("#password").type("dew");
    cy.get("form > .btn-primary").click();
    cy.get("#uncontrolled-tab-example-tab-cart").click();
    cy.get(".row > a").click();
  });

  it("should show all products", () => {
    cy.wait(100);
    cy.get("#uncontrolled-tab-example-tab-shop > span").click();
    cy.get("a > .card-body > .d-flex").should("have.length", 12);
  });

  it("should show all products in category when filter", () => {
    cy.wait(100);
    cy.get("#uncontrolled-tab-example-tab-shop > span").click();
    cy.get(".btn-dark").click();
    cy.get(".dropdown-menu > :nth-child(3)").click();
    cy.get("a > .card-body > .d-flex").should("have.length", 6);
    cy.wait(100);
    cy.get(".btn-dark").click();
    cy.get(".dropdown-menu > :nth-child(2)").click();
    cy.get("a > .card-body > .d-flex").should("have.length", 6);
    cy.wait(100);
    cy.get(".btn-dark").click();
    cy.get(".dropdown-menu > :nth-child(1)").click();
    cy.get("a > .card-body > .d-flex").should("have.length", 12);
  });

  it("should show detail products", () => {
    cy.wait(100);
    cy.get("#uncontrolled-tab-example-tab-shop > span").click();
    cy.get("a > .card-body > .d-flex").eq(1).click();
  });

  it("should add product to cart", () => {
    cy.wait(100);
    cy.get("#uncontrolled-tab-example-tab-shop > span").click();
    cy.get("a > .card-body > .d-flex").eq(1).click();
    cy.get(".card-body > .btn").click();
  });

  it("should remove product from cart", () => {
    cy.wait(100);
    cy.get("#uncontrolled-tab-example-tab-shop > span").click();
    cy.get("a > .card-body > .d-flex").eq(1).click();
    cy.get(".card-body > .btn").click();
    cy.get(":nth-child(3) > a > .svg-inline--fa").click();
  });

  it("should updates product from cart", () => {
    cy.wait(100);
    cy.get("#uncontrolled-tab-example-tab-shop > span").click();
    cy.get("a > .card-body > .d-flex").eq(1).click();
    cy.get(".card-body > .btn").click();
    cy.get(":nth-child(2) > .col > :nth-child(2)").click();
  });

  it("should return modal when click check out", () => {
    cy.wait(100);
    cy.get("#uncontrolled-tab-example-tab-shop > span").click();
    cy.get("a > .card-body > .d-flex").eq(1).click();
    cy.get(".card-body > .btn").click();
    cy.get(":nth-child(2) > .col > :nth-child(2)").click();
    cy.get(".row > .col > .btn").click();
  });
});
