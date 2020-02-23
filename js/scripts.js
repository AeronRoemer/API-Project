const $gallery = $("#gallery")
const $cardNoJs = $('#card-no-js')
$cardNoJs.hide();
/*
$("#test").html('<h1>This is the test</h1>\
       <p>Hello, just a test</p>\
       <a href="www.test.com">Click me</a>\
       <a href="www.test.com">Click me again</a>');

*/
const usersAPI = 'https://randomuser.me/api/?results=12';
function createUserCards(data){
    $.each(data, function(i, item){
        console.log(item);
        appendCard(item);
    })  
}
function appendCard(item){
    $gallery.append('<div class="card">\
    <div class="card-img-container">\
    <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">\
    </div>\
    <div class="card-info-container">\
        <h3 id="name" class="card-name cap">It appears you have javascript disabled!</h3>\
        <p class="card-text">please enable javascript for the app to work.</p>\
        <p class="card-text cap">employee info will appear here.</p>\
    </div>\
</div>')
};

$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
      createUserCards(data.results);
    }
  });