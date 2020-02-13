export const selectAll = {
  inserted(element) {
    let input = element.querySelector(".q-field__native");
    input.addEventListener("focus", () => {
      if (input.value.length) {
        input.select();
      }
    });
  }
};
