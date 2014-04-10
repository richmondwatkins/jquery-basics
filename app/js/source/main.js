(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $ ('#btn').click(doStuff);
    $ ('#btn2').click(doMore);
    $ ('#btn3').click(doMoreStuff);
    $ ('#btn4').click(removeStyling);
    $ ('#btn5').click(addClass);
    $ ('#btn6').click(btn6);
    $ ('#btn7').click(btn7);
  }

  function doStuff(){
    $('h1').text('color','red');
    $('h2').css('background-color', '#339933');
    $('h3').text('Richmond Watkins');

  }

  function doMore(){
    $('#btn').text('Richmond is cool');
  }

  function doMoreStuff(){
    $('body').addClass('alert');
  }

  function removeStyling(){
    $('body').removeClass('alert');
  }

  function addClass(){
    $('body').toggleClass('alert');
  }

  function btn6 (){
    var x = $('#tb1').val();
    $('h1').text(x.toUpperCase());
  }

  function btn7 (){
    var y = $('#tb1').val();
    $('h3').css('color', y);
  }
})();
