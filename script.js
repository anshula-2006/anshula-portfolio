const avatar = document.getElementById("avatar")
const speech = document.getElementById("speech")

avatar.addEventListener("mouseenter", () => {

speech.textContent="Hello, it's Anshu 👋"
speech.classList.add("show")

setTimeout(()=>{
speech.textContent="Click for my resume 😊"
},1000)

})

avatar.addEventListener("mouseleave", () => {

speech.classList.remove("show")

})

avatar.addEventListener("click", () => {

const link=document.createElement("a")
link.href="resume.pdf"
link.download="Anshu_Resume.pdf"
link.click()

})