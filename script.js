function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const reveals = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("active", "reveal");
    }
  });
});



  // const sections = document.querySelectorAll("section");
  // let currentIndex = 0;

  // function scrollToSection(index) {
  //   if (sections[index]) {
  //     sections[index].scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  // function scrollNext() {
  //   currentIndex = Math.min(currentIndex + 1, sections.length - 1);
  //   scrollToSection(currentIndex);
  // }

  // function scrollPrev() {
  //   currentIndex = Math.max(currentIndex - 1, 0);
  //   scrollToSection(currentIndex);
  // }

  // function toggleMenu() {
  //   document.querySelector(".menu-links")?.classList.toggle("open");
  // }


  const sections = [...document.querySelectorAll("section")];
  let currentIndex = 0;

  function scrollToSection(index) {
    sections[index]?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollNext() {
    currentIndex = Math.min(currentIndex + 1, sections.length - 1);
    scrollToSection(currentIndex);
  }

  function scrollPrev() {
    currentIndex = Math.max(currentIndex - 1, 0);
    scrollToSection(currentIndex);
  }

  function toggleBottomMenu() {
    document.getElementById("bottomMenu").classList.toggle("open");
  }

  function goToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    document.getElementById("bottomMenu").classList.remove("open");
  }

    function toggleTopMenu() {
    document.getElementById("topMenu").classList.toggle("open");
  }

  function goToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    document.getElementById("topMenu").classList.remove("open");
  }


