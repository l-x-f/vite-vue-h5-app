import { mount } from '@cypress/vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import Login from '../src/views/login/index.vue'

describe('Login', () => {
  it('renders properly', () => {
    const wrapper = mount(Login, {
      global: {
        plugins: [Vant]
      }
    })
    console.log(wrapper)
    cy.get('.van-button__text').should('contain', '提交')
    cy.get('.van-button').click()
  })
})
