/// <reference types="@cypress-audit/lighthouse" />
/// <reference types="cypress-iframe" />

const moment = require('moment')
import 'cypress-localstorage-commands'
import 'cypress-if'
import 'cypress-iframe'
import 'cypress-commands'
// Hygen - ScriptsImport - Do not remove this comment
import kiosk from './kiosk'

import adopter from './adopter'

import rescue from './rescue'

// Hygen - Do not remove this comment and do not rename below object `productsCommands`
const productsCommands = {
  ...{}, // Hygen - ObjectInsertion - Do not remove this line
  kiosk,

  adopter,

  rescue,
}

const getProductCommands = () => {
  return {
    ...adopter,
    ...rescue,
  }
}

const commands = {}
console.log('___________________________________________________________')
console.log('___________________________________________________________')
console.log('___________________________________________________________')
console.log('___________________________________________________________')
console.log('___________________________________________________________')
export default {
  ...commands, //
  ...getProductCommands(),
}
