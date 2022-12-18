describe("Footer", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  context("desctop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("footer are working", () => {
      cy.get("footer").should("exist");

      cy.get("footer").contains("Version");

      cy.get("footer").contains("Docs");
      cy.get("footer").contains("Api");
      cy.get("footer").contains("Help");
      cy.get("footer").contains("Community");

      cy.get("footer").get("img").should("exist");
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });

    it("footer are working in mobile", () => {
      cy.get("footer").should("exist");

      cy.get("footer").contains("Version");

      cy.get("footer").contains("Docs");
      cy.get("footer").contains("Api");
      cy.get("footer").contains("Help");
      cy.get("footer").contains("Community");

      cy.get("footer").get("img").should("exist");
    });
  });
});
