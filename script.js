function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section')
  tabContent[0].classList.add('ativo')

  if (tabContent.length && tabMenu.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo');
    }
    tabMenu.forEach((menuClick, index) => {
      menuClick.addEventListener('click', () => {
        activeTab(index);
      })
    });
  }
}

initTabNav();

function initAnimation() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const ActiveClass = 'ativardd'
  if (accordionList.length) {
    accordionList[0].classList.add(ActiveClass);
    accordionList[0].nextElementSibling.classList.add(ActiveClass);

    function activeAccordion() {
      this.classList.toggle(ActiveClass)
      this.nextElementSibling.classList.toggle(ActiveClass)
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    });
  }
}

initAnimation();

function initScrolSuave() {
  const linkInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  linkInternos.forEach((item) => {
    item.addEventListener('click', scrollToSection)
  });
}

initScrolSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSection = (sectionTop - windowMetade) < 0;
        if (isSection) {
          section.classList.add('ativo')
        }
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

initAnimacaoScroll();