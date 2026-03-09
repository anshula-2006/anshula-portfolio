const avatar = document.getElementById("avatar");
const speech = document.getElementById("speech");

if (avatar && speech) {
  let messageTimer;

  avatar.addEventListener("mouseenter", () => {
    speech.textContent = "Hello, it's Anshu";
    speech.classList.add("show");

    clearTimeout(messageTimer);
    messageTimer = setTimeout(() => {
      speech.textContent = "Click for my resume";
    }, 1000);
  });

  avatar.addEventListener("mouseleave", () => {
    clearTimeout(messageTimer);
    speech.classList.remove("show");
  });

  avatar.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "AnshulaAndal_InternshalaResume.pdf";
    link.download = "AnshulaAndal_InternshalaResume.pdf";
    link.click();
  });
}
