const progress = $("#progress");
const prev = $("#prev");
const next = $("#next");
const circles = $(".circle");

let progressBar = 0;
let currentActive = 1; // to know at which circle we are
let increment = 33; // to increment progress bar by 33%

next.on("click", () => {
  currentActive++;
  //cap currentActive circles at 4
  if (currentActive > circles.length) currentActive = circles.length;

  if (currentActive > 1) prev.removeAttr("disabled");

  if (currentActive === 4) next.attr("disabled", "true");

  update();
  progress.width((progressBar += increment) + "%");
});

prev.on("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;

  if (currentActive === 1) prev.attr("disabled", "true");

  if (currentActive < 4) next.removeAttr("disabled");

  $(circles[currentActive]).removeClass("active");
  progress.width((progressBar -= increment) + "%");
});

function update() {
  circles.eq(currentActive - 1).addClass("active");
}
