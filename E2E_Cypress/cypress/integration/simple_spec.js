describe('Habitica under monkeys', function() {
  it('Habitica web monkeys', function() {
      cy.visit('https://habitica.com/');
    //  cy.contains('Start My New Day!').click();
      cy.wait(1000);
      randomEvent(10);
  })
})
function randomEvent(monkeysLeft) {

  var monkeysLeft = monkeysLeft;
  if (monkeysLeft > 0) {
      var pos = getRandomInt(0, 3);        
      switch (pos) {
          case 0:
              eventInput();
              break;
          case 1:
              eventClick();
              break;
          case 2:
              eventLink();
              break;
          default:
              break;
      }
      monkeysLeft = monkeysLeft - 1;
      cy.wait(2000);
      randomEvent(monkeysLeft);
  }
}

function eventInput() {
    cy.get('input').then($inputs => {
      var inputList = $inputs.get(getRandomInt(0, $inputs.length));
      if (!Cypress.dom.isHidden(inputList)) {
          cy.wrap(inputList).click().type("text");            
      }        
  });
}

function eventClick() {
  cy.get('button').then($buttons => {
      var buttonList = $buttons.get(getRandomInt(0, $buttons.length));
      if (!Cypress.dom.isHidden(buttonList)) {
          cy.wrap(buttonList).click({ force: true });
      }
  })
}

function eventLink() {
  cy.get('a').then($links => {
      var randomLink = $links.get(getRandomInt(0, $links.length));
      if (!Cypress.dom.isHidden(randomLink)) {
          cy.wrap(randomLink).click({ force: true });            
      }
  });
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};