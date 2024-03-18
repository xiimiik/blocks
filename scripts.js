var coll = document.getElementsByClassName('collapsible__button');
var i;

const PADDING_BOTTOM = 24;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('collapsible__button--active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.paddingBottom = '0';
    } else {
      content.style.maxHeight = content.scrollHeight + PADDING_BOTTOM + 'px';
      content.style.paddingBottom = PADDING_BOTTOM + 'px';
    }
  });
}
