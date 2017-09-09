function Ready() {
    $('#add').on('click', addPerson)
 //function to request info from server
};

//event listener
function addPerson() {
    var nametoAdd = $('#name').val();
    var facttoAdd = $('#fact').val();
    console.log(nametoAdd, facttoAdd)
    $('.person').val(''); //clears input form

    //create object literal to hold data to send to server
    var person = {
        name: nametoAdd,
        fact: facttoAdd,
    };   
    //post request for person list to send to server
    $.ajax({
       type: 'POST',
        url:  '/personlist',
        data:  person, 
        success: function(response) {
        console.log(response);   
        }
    }); //ajax function for posting inside event listener function becuase POST will be sent on button click.
}

function getPersonList() {
    console.log('getInventory function is running')
    $.ajax({
        type:   'GET',
        url:    '/personlist',
        success: function(response) {
            console.log(response);
        }   
    })
}

//function call
$(document).ready(Ready);