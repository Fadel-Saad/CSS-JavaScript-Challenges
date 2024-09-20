const panels = $(".panel");

panels.on("click", selectList);

function selectList() {
  console.log(this);
  $(".panel").removeClass("active");
  $(this).addClass("active");
}