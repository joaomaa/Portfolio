(function () {
  emailjs.init("7R7_6Rxmgd5yqyWVH");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_8gu5u1u", "template_872komp", this)
    .then(function () {
      alert("Mensagem enviada com sucesso!");
    }, function (error) {
      console.log(error);
      alert("Erro ao enviar. Tente novamente.");
    });
});
