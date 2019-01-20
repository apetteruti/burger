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

    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("Changed devoured to ", newDevour);
                location.reload();
            }
        );
    });
})