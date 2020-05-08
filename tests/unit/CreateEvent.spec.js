import { mount } from "@vue/test-utils";
import CreateEvent from "@/views/CreateEvent";

describe("CreateEvent", () => {
  test("it has an h1 heading", () => {
    const wrapper = mount(CreateEvent);
    // expect that there is an h1
    // carets <> not needed
    // also works for "h1, h2" meaning check either h1 OR h2
    expect(wrapper.contains("h1")).toBe(true);
  });

  // it should have a heading saying Create an Event
  test("has a heading saying Create an Event text content", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.get("h1").text()).toBe("Create an Event");
  });

  test("contains a form element", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("form")).toBe(true);
  });

  test("contains a title input field", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("input[type='text'][name='title']")).toBe(true);
  });

  test("contains a submit button with value Create", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.contains("input[value='Create Event'][type='submit']")).toBe(
      true
    );
  });

  test("contains an input field for the title with the placefolder 'Add a title'", () => {
    const wrapper = mount(CreateEvent);
    const titleInput = wrapper.get("input[name='title']");
    expect(titleInput.attributes("placeholder")).toBe("Add a title");
  });

  test("it should have an event data property", () => {
    const wrapper = mount(CreateEvent);
    expect(wrapper.vm.event).toEqual({
      title: ""
    });
  });
  test("it should bind the event title to the user input", () => {
    const wrapper = mount(CreateEvent);

    const titleInput = wrapper.get("input[name='title']");

    titleInput.setValue("Trip to Zoo");

    expect(wrapper.vm.event.title).toBe("Trip to Zoo");
  });
});
