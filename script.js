$(document).ready(function () {
  const closeIcon = $(".chat-icon-close");
  const messageIcon = $(".chat-icon-message");

  function onClickChat() {
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
    });
  }

  function onClickNavItem() {
    
  }

  onClickChat();
});
