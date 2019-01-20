$(function() {

    //submitting the new burger name
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burg").val().trim()
        };

        //sending the post request - this should send the new burger to the webpage
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log(newBurger);
                location.reload();
            }
        );
    });

    //Devour the burger on click
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        console.log("ID: " + id)
        
        var newDevourState = {
            devoured: true
        };
        console.log(newDevourState)

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("Changed devoured to ", newDevourState);
                location.reload();
            }
        );
    });
});