function Ready() {
    $('#add').on('click', addPerson)
    getPersonList();
 //function to request info from server
};

//event listener
function addPerson() {
    var nametoAdd = $('#name').val();
    var facttoAdd = $('#fact').val();
    console.log(nametoAdd, facttoAdd)
    
    //create object literal to hold data to send to server
    var person = {
        name: nametoAdd,
        fact: facttoAdd,
    };   
    $('.person').val(''); //clears input form
    //post request for person list to send to server
    $.ajax({
       type: 'POST',
        url:  '/personlist',
        data:  person, 
        success: function(response) {
        console.log(response); 
        getPersonList();  
        }
    }); //ajax function for posting inside event listener function becuase POST will be sent on button click.
}

function getPersonList() {
    console.log('getInventory function is running')
    $.ajax({
        type:   'GET',
        url:    '/personlist',
        success: function(response) {
            $('#return').empty(); // empties contents of return section before updating array
            console.log(response);
            for(var i = 0; i <response.length; i++) {
                $('#return').append('<p>' + response[i].name + ': ' + response[i].fact + '</p>'); //appends array to cleared section
            }
        }   
    })
}

//function call
$(document).ready(Ready);