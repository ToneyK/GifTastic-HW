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
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + queryText + "&api_key=dc6zaTOxFJmzC&limit=10";
		var apiResults;
		// console.log(queryURL);
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(function (response) {
			// console.log(response);
			apiResults = response.data;
			var rating = apiResults[i].rating;
			var p = $("<p>").text("Rating: " + rating);
			var image = $("<img>");
			var gifDiv = $("<div class='item'>");
			var animateImage = apiResults[i].images.fixed_height.url;
			var stillImage = apiResults[i].images.fixed_height_still.url;
			image.attr("src", stillImage);
			image.attr("data-state", "still");
			image.attr("data-animate", animateImage);
			image.attr("data-still", stillImage)
			image.attr("data-index", i);
			// console.log(image);

			gifDiv.prepend(p);
			gifDiv.prepend(image);
			$("#gifs-appear-here").prepend(gifDiv);
		});//end of ajax function
	});
	//start of onclick function to animate gif
	$(document).on("click", "img", function () {

		var gifState = $(this).attr("data-state");
		// console.log($(this));

		if (gifState === "still") {

			var animateUrl = $(this).attr("data-animate")
			$(this).attr("src", animateUrl)
			// console.log()
			$(this).attr("data-state", "animate")

		} else if (gifState === "animate") {


			var stillUrl = $(this).attr("data-still")
			$(this).attr("src", stillUrl)
			$(this).attr("data-state", "still")
		}
	});//end of gif onclick function




}); // END READY
