export function navigateTo(path: string) {
  let elementId: string;
  let link: string;

  switch (path) {
    case 'contact':
      elementId = 'contact';
      break;
    case 'order':
      link = '/order';
      break;
    case 'about':
      elementId = 'about';
      break;
    case 'menu':
      elementId = 'menu';
      break;
    case 'vacancies':
      elementId = 'vacancies';
      break;
  }

  if (elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({behavior: "smooth"});
  }
}

export function isHref(href: string): boolean {
  if (href) {
    return href.indexOf("/") !== -1;
  } else {
    return false;
  }
}
