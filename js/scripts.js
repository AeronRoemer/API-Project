//Variables and No-Script-Warning Cardd
const $gallery = $("#gallery");
const $cardNoJs = $('#card-no-js');
const usersAPI = 'https://randomuser.me/api/?results=12';
$cardNoJs.hide();


//AJAX request as outlined in the Random User API. getJSON could also work here
$.ajax({
    url: 'https://randomuser.me/api/?results=12',
    dataType: 'json',
    success: function(data) {
//FUNCTION to iterate through array and create cards. 
function createUserCards(data){
    $.each(data, function(index, item){
        appendCard(index, item);
    })

}

//FUNCTION called in .each to generate html and append cards to the gallery DIV
function appendCard(index, item){
     const $card = $(`<div class="card">\
    <div class="card-img-container">\
    <img class="card-img" src="${item.picture.large}" alt="profile picture">\
    </div>\
    <div class="card-info-container">\
        <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>\
        <p class="card-text">${item.email}</p>\
        <p class="card-text cap">${item.location.city}</p>\
    </div>\
   </div>`);
//creates modal passing in information from clicked card
   $card.on('click', function(e){
    createModal(index, item)
    });
//appends newly created card and click handler
  $gallery.append($card);
};

//FUNCTION called in appendCard creates modal and click handlers for this modal
function createModal(index, item){
   $modal = $(`<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src="${item.picture.large}" alt="profile picture">
            <h3 id="name" class="modal-name cap">${item.name.first} ${item.name.last}</h3>
            <p class="modal-text">${item.email}</p>
            <p class="modal-text cap">${item.location.city}</p>
            <hr>
            <p class="modal-text">${item.phone}</p>
            <p class="modal-text">${item.location.street.number} ${item.location.street.name} ${item.location.city} ${item.location.state} ${item.location.postcode}</p>
            <p class="modal-text">Age: ${item.dob.age}</p>
               </div>
    </div>

    // IMPORTANT: Below is only for exceeds tasks 
    <div class="modal-btn-container">
        <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
        <button type="button" id="modal-next" class="modal-next btn">Next</button>
    </div>
   </div>`);
//click handlers to close and move forward and back;
$('body').append($modal);
$('.modal-close-btn').on('click', function(event){
    $modal.hide();
    });
//refernces location through .each generated 'index';
$('.modal-prev').on('click', function(event){
        $modal.hide();
        const loc = (index -1);
        createModal(loc, data.results[loc]);
        });
$('.modal-next').on('click', function(event){
       $modal.hide();
       const loc = (index +1);
       createModal(loc, data.results[loc]);
       });
};
createUserCards(data.results);
    }    
  });
