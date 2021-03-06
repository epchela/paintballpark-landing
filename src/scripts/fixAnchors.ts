// Фикс якорных ссылок под locomotive
export default () => {
  const linksToTop: HTMLAnchorElement[] | [] = Array.from(document.querySelectorAll("a[href^='#']:not([href$='#'])"));

  if (linksToTop.length) {
    linksToTop.forEach(link => {
      const id = link.hash;
      const target = document.querySelector(id) as HTMLElement;

      link.onclick = (event) => {
        event.preventDefault();

        if (window.smoothScrollbar !== undefined) {
            window.smoothScrollbar.scrollTo(target);
        }
      };
    });
  }
}

