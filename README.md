# Cypress Random Tester (Monkey)
This repository contains the code for a random tester developed using [Cypress](https://www.cypress.io/).

## Dependencias
- Node.js LTS v18.18.1
- Cypress v13.4.0

## Ubicación
El script tiene el nombre **monkey_web.cy.js** el cual está alojado en la ruta relativa **cypress/e2e/monkey_web.cy.js**.

## Ejecución
Para ejecutar el monkey de prueba (Prueba de reconocimiento), es necesario ejecutar los siguientes pasos:
- Clonar el proyecto o descargar como zip
- Ingresar a la raiz del proyecto
- Desde la raiz del proyecto, ejecutar `npm instal`
- Desde la raiz del proyecto, ejecutar `npm run cy:monkey_web`

## Eventos disponibles

- **randomLinkClick** : Hacer click en un link al azar
- **randomFillInput** : Llenar un campo de texto al azar
- **randomSelectDropDownList** : Seleccionar un combo al azar
- **randomClickButton** : Hacer click en un botón al azar

