$('.album-poster').on('click', function (e) {
  var dataSwitchId = $(this).attr('data-switch');
  console.log(dataSwitchId);

  ap.list.switch(dataSwitchId);

  ap.play();
  $('#aplayer').addClass('showPlayer')
});

$(document).ready(function()
{
    $(".backup_picture").on("error", function(){
        $(this).attr('src', './images/nopicture.png');
    });
});

<img class='backup_picture' src='./images/nonexistent_image_file.png' />