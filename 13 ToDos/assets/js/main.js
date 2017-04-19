


/// check off specific to dos by clicking
$('ul').on("click", "li", function() {
    $(this).toggleClass("completed")
})
//click on X to delet todos
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})


$('.fa-plus-circle').click(function() {
    $('#post-form').fadeToggle();
})



// Initialize Firebase
var config = {
    apiKey: "AIzaSyDDfDxvn8RSkTVu7nP6IxIdV_qGYjbMhIY",
    authDomain: "mytodo-7c27a.firebaseapp.com",
    databaseURL: "https://mytodo-7c27a.firebaseio.com",
    projectId: "mytodo-7c27a",
    storageBucket: "mytodo-7c27a.appspot.com",
    messagingSenderId: "553515077663"
};
firebase.initializeApp(config);



firebase.database().ref('Tasks').once('value').then(
    function(data) {
        console.log(data.val());
        const pendingTasks = data.val()
        for (let key in pendingTasks) {
            let toDo = pendingTasks[key];
            if (toDo !== undefined) {
                $('#pending').append(`
<li><span><i class='fa fa-trash'></i></span> ${toDo.Task} </li>                  `);
            }
        }
    }
)


$(document).ready(function() {
    $('#post-form').submit(function(event) {
        firebase.database().ref().child('Tasks').push({
            Task: $('#task').val(),
        }, function(error) {
            if (error) {
                alert(`problem creating task ${error}`);
            } else {
                alert('Task created successfully');
            }
        });
        event.preventDefault();
    })
});
