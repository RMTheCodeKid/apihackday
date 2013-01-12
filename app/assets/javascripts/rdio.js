APIHackDay = {};

tumblrKey ='XUS5dLrMBglrZAc07p7TgkLraq8BNjyeZsieZ73mlHTFq2y4tw';

APIHackDay.TumblrContent = function(term, tumblrKey){
  $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    crossDomain: true,
    url: 'http://api.tumblr.com/v2/tagged?tag='+term+"&api_key=" + tumblrKey,
    success: function(data){
      console.log(data);
    },
    error: function(data){
    }
  });
}

APIHackDay.SearchTerm = function(){
  $("#newSearch").on("click", function(event){

  });
}

$(function(){
  APIHackDay.TumblrContent("ladygaga+gif", tumblrKey);
});
