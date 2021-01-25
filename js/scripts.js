/* displays walrus.jpg when user clicks <p> */

$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").show();
  });
});