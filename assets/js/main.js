// Disable preloader
// $(window).on('load',function () {
//   $("#preLoader").fadeOut(2000);
// });

// change title when user change the tab
$(window).blur(function () { 
  document.title = 'Come Back to Portfolio | AMM. Hathil Thahee';
  
});

$(window).focus(function () { 
  document.title = 'Hathil Thahee - Portfolio';
  
});

$("document").ready(function () {

  // Disable right click
  $("body").bind("contextmenu", function (e) {
    return false;
  });

  // Menu Bar toggle
  $("menuBtn > svg").text(
    `<path fill="currentColor" d="M8.4 17L7 15.6l3.6-3.6L7 8.425l1.4-1.4l3.6 3.6l3.575-3.6l1.4 1.4l-3.6 3.575l3.6 3.6l-1.4 1.4L12 13.4L8.4 17Z"/>`
  );
  $("#menuBtn").click(function () {
    $("#menuBar").toggle();
  });

  // Animate my passion text
  new Typed('#myPassion', {
    strings: ['MERN Stack Developer', 'PHP Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  })

  // move my picture behalf of mouse move
  $("#myPic").mousemove(function (e) {
    let x = (e.clientX * 5) / 250;
    let y = (e.clientY * 0) / 250;
    e.target.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });

  // Toggle Trigger button
  $("#triggerBtn").hide();
  function triggerBtn() {
    if (window.scrollY < 100) {
      $("#triggerBtn").hide();
    } else {
      $("#triggerBtn").show();
    }
  }
  setInterval(triggerBtn, 100);

  // Experience calculator
  let startDate = new Date("08 01 2023");
  let todayDate = new Date().getDate();
  let curMonth = new Date().getMonth() + 1;
  let curYear = new Date().getFullYear();
  let today = new Date(`${curMonth} ${todayDate} ${curYear}`);
  let different = today - startDate;
  let differentMonths = Math.floor(different / 1000 / 60 / 60 / 24 / 30 / 12);

  differentMonths =
    differentMonths < 10 ? "0" + differentMonths : differentMonths;
  $("#experiences").text(`${differentMonths}+`);

  // Projects calculator
  let projects = $("#projects div").length + 1;
  projects = projects < 10 ? "0" + projects : projects;
  $("#noProjects").text(`${projects}+`);

  // Load more button function
  $(".extraPortfolio").hide();
  $("#loadMoreBtn").mouseenter(function () {
    $("#loadingIcon").addClass("animate-spin");
  });
  $("#loadMoreBtn").mouseleave(function () {
    $("#loadingIcon").removeClass("animate-spin");
  });

  $("#loadMoreBtn").click(function () {
    $(".extraPortfolio").toggle();
    let loadMoreTxt = $("#loadMoreText").text();
    loadMoreTxt == 'Load More' ? $("#loadMoreText").text('Hide') : $("#loadMoreText").text('Load More');
  });

  $("#footerYear").text(curYear);
});