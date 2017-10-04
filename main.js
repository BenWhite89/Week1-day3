document.addEventListener("DOMContentLoaded", function() {
  check = 1;
  var button = document.getElementById('sing');
  button.addEventListener('click', function() {
    
    var friends = [`Vanessa`, `Gabriel`, `Heather`, `Otto`, `Mark`];
        
    if (check === 1) {
        
      for (j = 0; j < friends.length; j++) {
        var friend = friends[j],
            song = ``;

        function songFunction() {
          for (i = 99; i > 0; i--) {
            if (i > 2) {
              song += `${i} lines of code in the file, ${i} lines of code; ${friend} strikes one out, clears it all out, ${i-1} lines of code in the file. `;
            } else if (i === 2) {
              song += `2 lines of code in the file, 2 lines of code; ${friend} strikes one out, clears it all out, 1 line of code in the file. `;
            } else {
              song += `1 line of code in the file, 1 line of code; ${friend} strikes one out, clears it all out, no more lines of code in the file.`;
            }};
          return song;
        };
        
        var vdiv = document.createElement('div'),
            vh3 = document.createElement('h3'),
            vh3Text = document.createTextNode(friend.toUpperCase()),
            vp = document.createElement('p');
            vpText = document.createTextNode(songFunction());
                
        vh3.appendChild(vh3Text);
        vdiv.appendChild(vh3);
        vp.appendChild(vpText);
        vdiv.appendChild(vp);
        document.body.appendChild(vdiv);
        vdiv.className = "friend";
        
      };
  } else {};
    check = check +1;
  })
  button.addEventListener('mousedown', function() {
    button.className = 'down';
  })
  button.addEventListener('mouseup', function() {
    button.className = 'up';
  })
})
