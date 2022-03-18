var count = $(".block").length, i = 1;
setInterval(function() {
  i < count ? i++ : i = 1;
  $(".block").removeClass("active").eq(i - 1).addClass("active"),
  $(".list").removeClass("active").eq(i - 1).addClass("active") }, 3000);
