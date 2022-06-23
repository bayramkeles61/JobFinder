import { shallowMount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import ProfileImage from "~/components/ProfileImage.vue"

describe("ProfileImage", () => {
    it("renders", () => {
        const wrapper = shallowMount(ProfileImage, {
            global: {
                stubs: {
                    Icon: true
                }
            },
        })
        expect(wrapper.exists()).toBe(true)
    })
})
