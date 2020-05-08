import { mount } from "@vue/test-utils";
import CreateEvent from "@/views/CreateEvent";

describe("CreateEvent", () => {
  test("it has an h1 heading", () => {
    const wrapper = mount(CreateEvent);

    // expect that there is an h1
    // carets <> not needed
    // also works for "h1, h2" meaning check for h1 OR h2
    expect(wrapper.contains("h1")).toBe(true);
  });

  // it should have a heading saying Create an Event
  test("it has a heading saying Create an Event text content", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.get("h1").text()).toBe("Create an Event");
  });
});
