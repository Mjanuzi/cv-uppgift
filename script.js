document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");
  const messageOnSubmit= document.getElementById("messageOnSubmit")

    //displayar inte meddelanded innan submit
  messageOnSubmit.style.display="none";

  //när man klickar på submit i kontaktformuläret
  form.addEventListener("submit", function (event) {

    //förhindra standardbeteende
    event.preventDefault();

    //vid godkänd submit skickas meddelanded ut
    messageOnSubmit.style.display="block";

    //rensar formuläret efter godkänd submit
    form.reset();

  });
});
