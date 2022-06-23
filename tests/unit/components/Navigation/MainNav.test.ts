import { shallowMount, RouterLinkStub } from "@vue/test-utils"
import { beforeEach, describe, it, expect } from "vitest"

import MainNav from "~/components/Navigation/MainNav.vue"

describe("MainNav", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(MainNav, {
      global: {
        stubs: {
          Icon: true,
          "router-link": RouterLinkStub
        }
      }
    })
  })

  it("displays company name", () => {
    expect(wrapper.text()).toMatch("Beyaz Careers")
  })

  it("displays menu items for navigation", () => {
    const navigationMenuItems = wrapper.findAll("[data-test='main-nav-list-item']")
    const navigationMenuTexts = navigationMenuItems.map((item: any) => item.text())
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Beyaz',
      'How we hire',
      'Students',
      'Jobs'
    ])
  })

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const loginButton = wrapper.find("[data-test='login-button']")
      expect(loginButton.exists()).toBe(true)
    })
  })

  describe("when user is logs in", () => {
    it("displays user profile picture", async () => {
      let profileImage = wrapper.find("[data-test='profile-image']")
      expect(profileImage.exists()).toBe(false)

      const loginButton = wrapper.find("[data-test='login-button']")
      await loginButton.trigger("click")

      profileImage = wrapper.find("[data-test='profile-image']")
      expect(profileImage.exists()).toBe(true)
    })

    it("displays subnavigation menu with additional information", async () => {
      let subnav = wrapper.find("[data-test='subnav']")
      expect(subnav.exists()).toBe(false)

      const loginButton = wrapper.find("[data-test='login-button']")
      await loginButton.trigger("click")

      subnav = wrapper.find("[data-test='subnav']")
      expect(subnav.exists()).toBe(true)
    })
  })
})