document.addEventListener('DOMContentLoaded', function() {

  var button = document.createElement('button'),
      buttonText = document.createTextNode('Add Square');

  button.appendChild(buttonText);
  document.body.appendChild(button);
  button.style.cssFloat = 'left';

  button.addEventListener('click', function() {
    
    var div = document.createElement('div'),
        p = document.createElement('p'),
        count = document.getElementsByClassName('div').length,
        pText = document.createTextNode(count);

        p.appendChild(pText);
        div.appendChild(p);
        div.className = 'div';
        div.id = count;
        div.style.cssFloat = 'left';

    document.body.appendChild(div);

    div.addEventListener('mouseover', function() {
      div.style.color = 'white';
    })

    div.addEventListener('mouseout', function() {
      div.style.color = 'black';
    })

    div.addEventListener('click', function() {
      var a = '#'+Math.random().toString(16).substr(-6);
      div.style.backgroundColor = a;
    })

    div.addEventListener('dblclick', function() {
      if (div.isSameNode(document.body.lastElementChild) && Number(div.id)%2 === 0) {
        alert('There are no squares to the right!');
      } else if (div.previousElementSibling.id === ''  && Number(div.id)%2 != 0) {
        alert('There are no squares to the left');
      } else if (Number(div.id)%2 === 0) {
        div.nextElementSibling.remove();
      } else if (Number(div.id)%2 != 0) {
        div.previousElementSibling.remove();
      } else {};
    })
  })
})