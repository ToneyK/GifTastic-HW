//READY
$(function () {
	//LOOP TO CREAT BUTTONS
	var buttons = ["Dog", "Cat", "Parrot", "Horse"];
	for (var i = 0; i < buttons.length; i++) {
		$(".buttonHolder").append("<button class='animal'>" + buttons[i] + "</button>")
	}
//INPUT BUTTON CREATOR FUNCTION
	$("#addButton").on("click", function (event) {
		event.preventDefault();

		var buttonText = $("#buttonAdder").val().trim();
		buttons.push(buttonText);

		$(".buttonHolder").empty();
		for (var i = 0; i < buttons.length; i++) {
			$(".buttonHolder").append("<button class='animal'>" + buttons[i] + "</button>")
		}
	});
//ON CLICK API CALL FUNCTION 
	$(document).on("click", ".animal", function () {
		var queryText = $(this).text();
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + queryText + "&api_key=dc6zaTOxFJmzC&limit=10";
		console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (response) {
			console.log(response);
			var results = response.data;
			var rating = results[i].rating;
			var p = $("<p>").text("Rating: " + rating);
			var image = $("<img>");
			var gifDiv = $("<div class='item'>");
			image.attr("src", results[i].images.fixed_height.url);
			gifDiv.prepend(p);
			gifDiv.prepend(image);
			$("#gifs-appear-here").prepend(gifDiv);

		});
	});





}); // END READY
