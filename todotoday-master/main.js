function myFunc()  {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    document.getElementById("display-time").innerHTML = time;
}

/*
$( function() {
    $( "#draggable" ).draggable({
        helper: 'clone',
        revert: 'invalid',
        appendTo: 'body'
    });
    $( "#droppable" ).droppable({
        drop: function( event, ui ) {
            $( this )
            .addClass( "ui-state-highlight" )
            .find( "p");
    }
});

*/