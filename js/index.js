document.querySelectorAll(".gmail-icon").forEach((gmail) => {
  gmail.addEventListener("click", function () {
    const recipient = "yousefabdelrhem1@gmail.com";
    const subject = encodeURIComponent("Hello");
    const body = encodeURIComponent("Waiting for You Message");

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;

    window.open(gmailComposeUrl, "_blank");
  });
});
