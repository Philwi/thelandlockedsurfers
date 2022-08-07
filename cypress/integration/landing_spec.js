describe('Landing Page Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Tests links and headline of herostage', () => {
    cy.get('a')
      .contains('Zu den Erlebnissen')
      .should("have.attr", "href")
      .should("not.be.empty")
      .and("contain", "/blog");

    cy.get('a')
      .contains('Unterstütze uns')
      .should("have.attr", "href")
      .should("not.be.empty")
      .and("contain", "https://saltypotato1.myspreadshop.de");

    cy.get('h1').contains('The Landlocked Surfers')
    cy.get('p').contains('Wir hissen unsere Segel!')
      })

  it('Tests targets section', () => {
    cy.get('h2').contains('Unsere Targets')
    cy.get('h3').contains('Mietfrei leben')
    cy.get('p').contains('Home is where you park it. Raus aus der Wohnung und rein in die Freiheit! Im Einklang mit der Natur.')
    cy.get('h3').contains('Surfen')
    cy.get('p').contains('Surfen haben wir in tollen Surfcamps in Portugal und Marokko kennengelernt. Seitdem planen wir voller Vorfreude das nächste Surferlebnis. Schaut doch mal')
    cy.get('h3').contains('Routenplanung')
    cy.get('p').contains('Wir wollen in den Süden! Frankreich, Spanien, Portugal an die Antlantikküste! Unser Ziel ist die Atlantikküste. Wind, Wellen und Sand unter den Füßen.')

    cy.get('a')
      .contains('Verfolge den Verlauf')
      .should("have.attr", "href")
      .should("not.be.empty")
      .and("contain", "/blog");
  })

  it('Tests preparation sections', () => {
    cy.get('h2').contains('Die Vorbereitung')
    cy.get('h3').contains('Surf-Fitness')
    cy.get('p').contains('Fitness ist uns wichtig und deswegen halten wir uns das ganze Jahr fit. In den kommenden Wochen und Monaten werden wir ganz bewusst für das Surfen trainieren. In unseren Blog-Posts kannst du sehen, wie unser Programm aussieht.')
    cy.get('h3').contains('#Winniethetravelcat')
    cy.get('p').contains('Winnie ist überall mit dabei. Unsere kleine Vierbeinerin ist eine Glückskatze! Sie ist eine gute Beifahrerin und liebt es auch durch Wälder und Dünen zu laufen. Das Leben auf Rädern ist für sie wahnsinnig aufregend!')
    cy.get('h3').contains('Digital-Nomades')
    cy.get('p').contains('Mit den Zehen im Sand und den Fingern auf den Tasten. Den Kopf im Schatten unserer Markise, die Wellen betrachten. Mit Software-Entwicklung und Grafikdesign verdienen wir unser veganes Butterbrot.')
    cy.get('h3').contains('Autarkes Vanlife')
    cy.get('p').contains('Wir wohnen zu dritt auf 10m² und 6 Rädern in einem 18 Jahre alten Wohnmobil. Mit diesem können wir fast autark leben. Mit "Gas, Wasser, Scheiße" kennen wir uns mittlerweile gut aus. Wo bekommen wir Wasser her? Wo kann man die Toilette entleeren? Wo kann man gut parken? Die Antworten darauf findet ihr in unserem Blog.')
  })

  it('Tests blog section', () => {
    cy.get('h2').contains('Die neuesten Blogeinträge')
  })

  it('Tests merch section', () => {
    cy.get('h2').contains('Merch')
    cy.get('h3').contains('Medusa T-Shirt')
    cy.get('button').contains('Kaufen 27 €')
    cy.get('h3').contains('Sushi T-Shirt')
    cy.get('button').contains('Kaufen 27 €')
    cy.get('h3').contains('Ice T-Shirt')
    cy.get('button').contains('Kaufen 27 €')
  })

  it('Tests FAQ section', () => {
    cy.get('h2').contains('FAQ')
    cy.get('div').contains('Wie kann ich euch erreichen?')
    cy.get('div').contains('Einfach per Mail (thelandlockedsurfers@gmail.com) oder Socialmedia. :)')
    cy.get('div').contains('Habt ihr auch einen eigenen Shop und nicht nur Spreadshirt?')
    cy.get('div').contains('Wie kann ich euch unterstützen?')
  })
})
