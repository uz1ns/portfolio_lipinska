(function () {
  emailjs.init("6F77UowF3zBMyXwGl");
})();

window.onload = function () {
  document.getElementById("home").onclick = function () {
    window.scrollTo(0, 0);
  };
  document.getElementById("about").onclick = function () {
    window.scrollTo(0, 770);
  };
  document.getElementById("gallery").onclick = function () {
    window.scrollTo(0, 2300);
  };
  document.getElementById("contact").onclick = function () {
    scrollToBottom();
  };

  document.getElementsByClassName("contact_btn")[0].onclick = function () {
    scrollToBottom();
  };

  function scrollToBottom() {
    window.scrollTo(0, 4000);
  }

  var menu_btns = document.getElementsByClassName("menu_btn");
  for (var i = 0; i < menu_btns.length; i++) {
    menu_btns[i].addEventListener("mouseleave", function () {});
  }
};

function sendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_m9bltdb", "template_q2k34tl", params)
    .then(function (res) {
      console.log("Sucess! " + res.status);
      alert(
        "Your message has been successfully sent. \n Please wait a few days for the reply."
      );
      location.reload(true);
    });
}
