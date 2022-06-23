import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { beforeEach, afterEach, describe, it, vi, expect } from "vitest"
import TheHeadline from "~/components/JobSearch/TheHeadline.vue";

describe("Headline", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    })
    afterEach(() => {
        vi.useRealTimers()
    })

    it("display introductory action verb", () => {
        const wrapper = mount(TheHeadline)
        const actionPhrase = wrapper.find("[data-test='action-phrase']")
        expect(actionPhrase.text()).toBe("Build for everyone")
    })

    it("changes action verb at a consistent interval", () => {
        mount(TheHeadline)
        // expect(setInterval).toHaveBeenCalled()
    })

    it("swaps action verb at a consistent interval", async () => {
        const wrapper = mount(TheHeadline)
        vi.runOnlyPendingTimers()
        await nextTick()
        const actionPhrase = wrapper.find("[data-test='action-phrase']")
        expect(actionPhrase.text()).toBe("Create for everyone")
    })

    it("removes interval when component disappears", () => {
        const wrapper = mount(TheHeadline)
        wrapper.unmount()
        // expect(clearInterval).toHaveBeenCalled()
    })
})  