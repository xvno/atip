// Code goes here

function CopyImageById(Id) {
    var imgs = document.createElement('img');
    imgs.src = document.getElementById(Id).src;

    //alert ('Create image') ;

    var bodys = document.body;
    bodys.appendChild(imgs);
    //alert ('Image on document')

    if (document.createRange) {
        //alert ('CreateRange work');
        var myrange = document.createRange();
        myrange.setStartBefore(imgs);
        myrange.setEndAfter(imgs);
        myrange.selectNode(imgs);
    } else {
        alert('CreateRange NOT work');
    }

    /*
  if (bodys.createControlRange)
  {
    alert ('ControlRange work');
    var controlrange = body.createControlRange();
    controlrange.add(img);
    controlrange.execCommand('Copy', false, null);
  }
  else
  {
    alert ('ControlRange NOT work');
  }
  */

    var sel = window.getSelection();
    sel.addRange(myrange);

    // alert('Image selection !!!');

    //document.execCommand('copy', false, null);
    var successful = document.execCommand('copy');

    var msg = successful ? 'successful' : 'unsuccessful';
    //alert('Copy image command was ' + msg);

    bodys.removeChild(imgs);
    document.getElementById('answer').innerHTML =
        'Copy image command was ' + msg;
}
