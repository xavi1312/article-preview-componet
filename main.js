const $shareButton = document.getElementById('shareButton');
const $shareIcon = $shareButton.childNodes[1];
const $footer = document.getElementsByClassName('card__footer')[0];

const footerShareClass = 'card__footer--share';
const srcShareIcon = './images/icon-share.svg';
const srcShareIconWhite = './images/icon-share-white.svg';

const hasClass = (el, wantedClass) => el.classList.contains(wantedClass);

$shareButton.addEventListener('click', () => {
  if (hasClass($footer, footerShareClass)) {
    $footer.classList.remove(footerShareClass);
    setTimeout(() => {
      $shareIcon.src = srcShareIcon;
    }, 500);
  } else {
    $footer.classList.add(footerShareClass);
    $shareIcon.src = srcShareIconWhite;
  }
});
