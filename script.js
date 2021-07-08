const switches = document.getElementsByClassName('switch-container');
for (let i = 0; i < switches.length; i++) {
  init(switches[i]);
}

function init(component) {
  const controller = component.getElementsByClassName('switch')[0];
  const content = component.getElementsByClassName('content')[0];
  controller.addEventListener('click', function() {
    this.classList.toggle('on');
    toggleContent(content);
  });
}

function toggleContent(content) {
  for (let i = 0; i < content.children.length; i++) {
    content.children[i].classList.toggle('hide');
  }
}
