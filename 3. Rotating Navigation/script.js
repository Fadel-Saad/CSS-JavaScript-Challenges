const open = $("#open");
const close = $("#close");
const container = $(".container");

open.on("click", () => {
  container.addClass("show-nav");
});

close.on("click", () => {
  container.removeClass("show-nav");
});