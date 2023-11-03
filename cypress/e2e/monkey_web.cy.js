describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.wait(1000);
        randomEvent(50);
    })
})

const listEvents = [randomLinkClick, randomFillInput, randomSelectDropDownList, randomClickButton]

function randomEvent(eventRemain) {   
    let event = getRandomInt(0, listEvents.length);
    listEvents[event]();
    if (eventRemain > 0) {
        randomEvent(--eventRemain);
    }
}

function randomWord(wordLength) {
    let consonants = 'bcdfghjklmnñpqrstvwxyz'.split('');
    let vowels = 'aeiou'.split('');
    let i, word = '';
    let length = parseInt(wordLength, 10);

    for (i = 0; i < length / 2; i++) {
        let randConsonant = consonants[getRandomInt(0,consonants.length)];
        let randVowel = vowels[getRandomInt(0, vowels.length)];
        word += (i === 0) ? randConsonant.toUpperCase() : randConsonant;
        word += i * 2 < length - 1 ? randVowel : '';
    }
    return word;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomLinkClick() {
    cy.get('a').then($links => {
        if ($links.length > 0) {
            let randomLink = $links.get(getRandomInt(0, $links.length));
            if (!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({ force: true });
            }
            cy.wait(1000);
        }
    });
}

function randomFillInput() {
    cy.get('body').then($body => {
        if ($body.find('input').length) {
            let randomInput = $body.find('input').get(getRandomInt(0, $body.find('input').length));
            if (!Cypress.dom.isHidden(randomInput)) {
                cy.wrap(randomInput).type(randomWord(3), { force: true });
            }
            cy.wait(1000);
        }
        if ($body.find('textarea').length) {
            let randomInput = $body.find('textarea').get(getRandomInt(0, $body.find('textarea').length));
            if (!Cypress.dom.isHidden(randomInput)) {
                cy.wrap(randomInput).type(randomWord(3), { force: true });
            }
            cy.wait(1000);
        }
    });
}   

function randomClickButton(){
    cy.get('button').then($inputs => {
        if($inputs.length > 0){
            let randomInput = $inputs.get(getRandomInt(0, $inputs.length));
            if (!Cypress.dom.isHidden(randomInput)) {
                cy.wrap(randomInput).click({ force: true });
            }
            cy.wait(1000);
        }
    });
}

function randomSelectDropDownList() {
    cy.get('body').then($body => {
        if ($body.find('.rs__group').length) {
            cy.get('.rs__option').then($option => {
                let option = $option[getRandomInt(0, $option.length)];
                option.click({ force: true });
            })
        }
    });
}
