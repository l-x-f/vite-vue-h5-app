import { mount } from '@cypress/vue'

import Home from '../src/views/home/index.vue'

describe('Home', () => {
  it('renders properly', () => {
    const instance = mount(Home, {
      props: { msg: 'Hello Cypress' }
    })
    console.log(instance, 'instance')
    cy.get('.instance').should('contain', 'home')
  })
})
