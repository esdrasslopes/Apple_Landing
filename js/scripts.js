const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");
const sideBar = document.querySelector("#side-bar");

sideBar.addEventListener("click", () => {
  const template = `<ul id="side-bar-items">
                 <li id="close-side-bar"> <i class="fa-solid fa-bars"></i></li>
                <li><a href="#">Loja</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">Ipad</a></li>
                <li><a href="#">Iphone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">Airpods</a></li>
                <li><a href="#">Só na Apple</a></li>
                <li><a href="#">Acessórios</a></li>
                <li><a href="#">Suporte</a></li>
            </ul>`;

  const parser = new DOMParser();

  const htmltemplate = parser.parseFromString(template, "text/html");

  const sidebarItens = htmltemplate.querySelector("#side-bar-items");

  document.body.appendChild(sidebarItens);

  setTimeout(() => {
    sidebarItens.classList.add("open");
  }, 200);

  const fechar = document.querySelector("#close-side-bar");

  fechar.addEventListener("click", () => {
    sidebarItens.classList.remove("open");
    setTimeout(()=>{
    sidebarItens.remove();
    },500)
  });
});

const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, 700);
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden");
elements.forEach((element) => {
  myObserver.observe(element);
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected")
    );

    const button = e.target;

    const id = button.getAttribute("id");

    button.querySelector(".color").classList.add("selected");

    image.classList.add("changing");
    image.setAttribute("src", `images/iphone_${id}.jpg`);

    setTimeout(() => {
      image.classList.toggle("changing");
    }, 200);
  });
});
