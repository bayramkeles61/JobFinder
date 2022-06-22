import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"

import MainNav from "~/components/MainNav.vue"

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav)
    expect(wrapper.text()).toMatch("Beyaz Careers")
  })
})
