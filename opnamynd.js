const ítanlegarmyndir = document.querySelectorAll(".ítanleg");
const módal = document.querySelector("#modal");
const mynd = document.querySelector("#modalmynd");
const loka = document.querySelector("#lokamodal");

const sýnaModal = (stak) => {
  mynd.src = ítanlegarmyndir[stak].src;
  módal.style.visibility = "visible";
}

for (let i = 0; i < ítanlegarmyndir.length; i++) {
  ítanlegarmyndir[i].onclick = () => sýnaModal(i);
}

loka.addEventListener("click", () => {
  módal.style.visibility = "hidden";
})