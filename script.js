$(document).ready(function () {
    $("#currentday").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    var searchBtn = $("#search");
    var weather = $("#weather");
    // var map = $("#map")

    searchBtn.on("click", function () {
        event.preventDefault();

        user = $("#input").val();
        $("#input").val("");

        // calling the weather function
        getcurrent(user);
        getVideo();
        getMusicVideo();

    });

    function getcurrent(user) {
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + user + ",us&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var lat = response.coord.lat
            var lon = response.coord.lon
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 16,
                center: new google.maps.LatLng(lat, lon),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });
            // making sure the div is empty for the next search
            weather.empty();

            // create elements to hold the info
            var city = $("<h2>")
                .text(response.name + " (" + new Date().toLocaleDateString() + ")")

            var content = $("<div>").addClass("card");
            var temp = $("<div>")
                .text("Temperature: " + response.main.temp + " F")

            var humidity = $("<div>")
                .text("Humidity: " + response.main.humidity + "%")

            var windSpd = $("<div>")
                .text("Wind Speed: " + response.wind.speed + " MPH")

            var container = $("<div>");
            var img = $("<img>").attr(
                "src",
                "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"

            );
            // append html
            city.append(img);
            container.append(city, temp, humidity, windSpd);
            content.append(container);
            weather.append(container);

        });
    }




    function getVideo() {
        $("#one").show();
        $.ajax({
            type: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            data: {
                key: 'AIzaSyCZs0g3qSFW3yteHvHDQ2ObfHG18qU9gzY',
                q: "how to make ice cream",
                part: 'snippet',
                maxResults: 5,
                type: 'video',
                videoEmbeddable: true,
                publicStatsViewable: true
            },
            success: function (res) {
                embedVideo1(res)
            },
            error: function (res) {
                console.log("Request Failed");
            }
        });
    }
    function embedVideo1(res) {
        $('#one').attr('src', 'https://www.youtube.com/embed/' + res.items[0].id.videoId)
    }

    function getMusicVideo() {
        $("#two").show();
        $.ajax({
            type: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            data: {
                key: 'AIzaSyCZs0g3qSFW3yteHvHDQ2ObfHG18qU9gzY',
                q: "no copyright hip hop music",
                part: 'snippet',
                maxResults: 10,
                type: 'video',
                videoEmbeddable: true,
                publicStatsViewable: true
            },
            success: function (data) {
                embedVideo(data)
                console.log(data);

            },
            error: function (data) {
                console.log("Request Failed");
            }
        });
    }
    function embedVideo(data) {
        var i = Math.floor(Math.random() * 10)
        $('#two').attr('src', 'https://www.youtube.com/embed/' + data.items[i].id.videoId)
    }

});