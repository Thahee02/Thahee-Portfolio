$("document").ready(function () {
  $("menuBtn > svg").text(
    `<path fill="currentColor" d="M8.4 17L7 15.6l3.6-3.6L7 8.425l1.4-1.4l3.6 3.6l3.575-3.6l1.4 1.4l-3.6 3.575l3.6 3.6l-1.4 1.4L12 13.4L8.4 17Z"/>`
  );
  $("#menuBtn").click(function () {
    $("#menuBar").toggle();
    
  });

  // Experience calculator
  let startDate = new Date("08 01 2023");
  let todayDate = new Date().getDate();
  let curMonth = new Date().getMonth() + 1;
  let curYear = new Date().getFullYear();
  let today = new Date(`${curMonth} ${todayDate} ${curYear}`);
  let different = today - startDate;
  let differentMonths = Math.floor(different / 1000 / 60 / 60 / 24 / 30);

  differentMonths =
    differentMonths < 10 ? "0" + differentMonths : differentMonths;
  $("#experiences").text(`${differentMonths}+`);

  // Projects calculator
  let projects = $("#projects div").length + 1;
  projects = projects < 10 ? "0" + projects : projects;
  $("#noProjects").text(`${projects}+`);

  // Load more button function
  $("#extraPortfolio").hide();
  $("#loadMoreBtn").mouseenter(function () {
    $("#sandTimer").addClass("animate-spin");
  });
  $("#loadMoreBtn").mouseleave(function () {
    $("#sandTimer").removeClass("animate-spin");
  });

  $("#loadMoreBtn").click(function () {
    $("#extraPortfolio").toggle();
  });
});
