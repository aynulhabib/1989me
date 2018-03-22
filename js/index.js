function previewFile(){
       var preview = document.querySelector('#img-preview'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
           $(".link").show()
           onChange()
       }

       if (file) {
           reader.readAsDataURL(file);
        //reads the data as a URL
       } else {
           preview.src = "";
       }
}

function downloadFile(data) {
  var aTag = document.createElement('a');
  aTag.download = '1989me';
  aTag.href = data;
  aTag.target = '_blank';
  document.body.appendChild(aTag);
  aTag.click();
  document.body.removeChild(aTag);
  delete aTag;
}

function onChange(){
  html2canvas(document.querySelector("#export")).then(function(canvas) {
    var d = canvas.toDataURL("image/png");
    $('#output').empty().append("<img width='300px' alt='export' src='"+d+"' alt='from canvas'/>");
  });
}

function PrintDiv(){
  // var download_link = document.querySelector('#btn-export');

    html2canvas(document.querySelector("#export")).then(function(canvas) {
       var d = canvas.toDataURL("image/png");
      // var img = canvas.toDataURL("image/png");
       downloadFile(d)
    })
}
