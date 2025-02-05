const button = $(".btn");
const input = $(".input");

let pressed = false;

button.on("click", () => {
  if (pressed === false) {
    input.addClass("activated");
    input.focus(); // focuses the curser on the input
    button.addClass("activated-button");
    pressed = true;
  } else {
    input.removeClass("activated");
    button.removeClass("activated-button");
    pressed = false;
  }
});
// the above can be simplified by using .toggleClass("classname")
// this removes and adds the calss whenever the event is called
