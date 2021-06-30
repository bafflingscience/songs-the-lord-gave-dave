$('.album-poster').on('click', function (e) {
  var dataSwitchId = $(this).attr('data-switch');
  console.log(dataSwitchId);

  ap.list.switch(dataSwitchId);

  ap.play();
  $('#aplayer').addClass('showPlayer')
});  