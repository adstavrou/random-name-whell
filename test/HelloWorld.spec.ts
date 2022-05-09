import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'
import { it, describe, expect, test } from 'vitest';


// @vitest-environment happy-dom
describe('HelloWorld', () => {
    it('should display header text', () => {
        const msg = 'Hello Vue 3'
        const wrapper = mount(HelloWorld, { props: { msg } })

        expect(wrapper.find('h1').text()).toEqual(msg)
    })
})