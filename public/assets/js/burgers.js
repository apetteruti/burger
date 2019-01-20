$(function () {

    //submitting the new burger name
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burg").val().trim()
        };

        //sending the post request - this should send the new burger to the webpage
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log(newBurger);
                location.reload();
            }
        );
    });
})