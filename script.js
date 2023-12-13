$(document).ready(function () {
  let seconds = 15;
  const timeValue = $(".timer__value");

  const timeout = () =>
    setInterval(() => {
      if (seconds < 0) {
        clearInterval(timeout);
        seconds = 15;
        return timeout();
      }
      timeValue.text(seconds);
      seconds--;
    }, 1000);

  // timeout();

  const closeIcon = $(".chat-icon-close");
  closeIcon.hide();
  const messageIcon = $(".chat-icon-message");

  $(".chat-icon").on("click", () => {
    const chat = $(".chat");
    const isOpen = chat.attr("data-open");

    if (isOpen === "true") {
      closeIcon.hide();
      messageIcon.show();
      chat.attr("data-open", false);
    } else {
      closeIcon.show();
      messageIcon.hide();
      chat.attr("data-open", true);
    }

    console.log(isOpen);
  });
});
