import { mount } from 'avoriaz'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  let wrapper

  describe('Template', () => {
    beforeEach(() => {
      wrapper = mount(Home)
    })

    it('should render correct home contents', () => {
      expect(wrapper.text()).to.contain('Home')
    })
  })
})
