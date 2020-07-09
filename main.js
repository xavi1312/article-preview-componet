// DOM variables
const $shareButton = document.getElementById('shareButton');
const $shareIcon = $shareButton.childNodes[1];
const $tooltip = document.getElementById('tooltip');
const $footer = document.getElementsByClassName('card__footer')[0];

// Assets variables
const footerShareClass = 'card__footer--share';
const srcShareIcon = './images/icon-share.svg';
const srcShareIconWhite = './images/icon-share-white.svg';

// Functions
const hasClass = (el, wantedClass) => el.classList.contains(wantedClass);
const calcTooltipPosition = ($button, $tooltip) => {
  const $arrow = $tooltip.childNodes[3];
  const refTop = $button.offsetTop;
  const refLeft = $button.offsetLeft + $button.offsetWidth / 2;

  const top = refTop - ($tooltip.offsetHeight + $arrow.offsetHeight + 5);
  const left = refLeft - $tooltip.offsetWidth / 2;

  return [top, left];
};
const setTooltipPosition = (button, $tooltip) => {
  const positions = calcTooltipPosition(button, $tooltip);

  $tooltip.style.top = `${positions[0]}px`;
  $tooltip.style.left = `${positions[1]}px`;
};

// Events
$shareButton.addEventListener('click', function () {
  if (hasClass($footer, footerShareClass)) {
    $footer.classList.remove(footerShareClass);

    // Change img src button
    $shareIcon.src = srcShareIcon;
  } else {
    $footer.classList.add(footerShareClass);
    setTooltipPosition(this, $tooltip);
    // Change img src button
    $shareIcon.src = srcShareIconWhite;
  }
});
