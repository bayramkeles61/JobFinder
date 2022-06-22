import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import SubNav from "~/components/SubNav.vue"

describe("SubNav", () => {
    describe("when user is on job page", () => {
        it("displays job count", () => {
            const wrapper = mount(SubNav, {
                global: {
                    stubs: {
                        Icon: true
                    }
                },
                setup() {
                    const onJobResultsPage = ref(true)
                    return {
                        onJobResultsPage
                    }
                }
            })
            const jobCount = wrapper.find("[data-test='job-count']")
            expect(jobCount.exists()).toBe(true)
        })
    })
    describe("when user is not on job page", () => {
        it("does NOT display job count", () => {
            const wrapper = mount(SubNav, {
                global: {
                    stubs: {
                        Icon: true
                    }
                },
                setup() {
                    const onJobResultsPage = ref(false)
                    return {
                        onJobResultsPage
                    }
                }
            })
            const jobCount = wrapper.find("[data-test='job-count']")
            expect(jobCount.exists()).toBe(false)
        })
    })
})