// Setting dste and time to current date and time using moment.js
    $(document).ready(function () {
    $("#currentday").text(moment().format('MMMM Do YYYY, h:mm:ss a'))
    var searchBtn = $("#search");
    var weather = $("#weather");

// var map = $("#map")
    $("#input").keydown(function (e) {
        if (e.keyCode == 13) {
            event.preventDefault();
            $("#text").show();

            user = $("#input").val();
            $("#input").val("");

            // calling the weather function
            getcurrent(user);
        }
    });
// Onclick function for the search button
    searchBtn.on("click", function () {
        event.preventDefault();
        $("#text").show();

        user = $("#input").val();
        $("#input").val("");

        // calling the weather function
        getcurrent(user);


    });

    function getcurrent(user) {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + user + ",us&units=imperial&appid=166a433c57516f51dfab1f7edaed8413";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var lat = response.coord.lat
            var lon = response.coord.lon
            var number = response.main.temp
            // Setting if conditions for diffenrent weather
            if (number > 40 && number < 50) {
                user1 = "how to make hot soup"
                user2 = "no copyright hip hop music"
                getVideo(user1);
                getMusicVideo(user2);
                var image1 = "https://ewscripps.brightspotcdn.com/dims4/default/475659c/2147483647/strip/true/crop/2250x1266+0+117/resize/1280x720!/quality/90/?url=https%3A%2F%2Fewscripps.brightspotcdn.com%2F18%2F06%2F34d36ba247f296fe672937fbbf27%2Ffall.jpeg"
                $("body").css("background-image", "url(" + image1 + ")");
                $("#navbar").css("background-color", "#01A5D3");
                $("#footer").css("background-color", "#EED5B5");
            }
            if (number > 50 && number < 60) {
                user1 = "how to go make a cookout"
                user2 = "no copyright mexican music"
                getVideo(user1);
                getMusicVideo(user2);
                var image1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS01dyjeCNBDdRchwGu9rCqP1jl93CGZbRpujgalyj1Nx8eMKOhwg&s"
                $("body").css("background-image", "url(" + image1 + ")");
                $("#navbar").css("background-color", "#01A5D3");
                $("#footer").css("background-color", "#EED5B5");
            }
            if (number > 60 && number < 70) {
                user1 = "How to make lemonade"
                user2 = "no copyright trance music"
                getVideo(user1);
                getMusicVideo(user2);
                var image1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGaDgbfCSV8ptQ9KoWjM_rZrFG8mvEKr9PAUzixSqRZeIuD-a&s"
                $("body").css("background-image", "url(" + image1 + ")");
                $("#navbar").css("background-color", "#01A5D3");
                $("#footer").css("background-color", "#EED5B5");
            }
            if (number > 70) {
                user1 = "How to make ice cream"
                user2 = "no copyright pop music"
                getVideo(user1);
                getMusicVideo(user2);
                var image1 = "https://www.moneycrashers.com/wp-content/uploads/2019/02/cheap-beach-family-destinations-1068x713.jpg"
                $("body").css("background-image", "url(" + image1 + ")");
                $("#navbar").css("background-color", "#01A5D3");
                $("#footer").css("background-color", "#EED5B5");
            }
            if (number < 40 && number > 30) {
                user1 = "how to bake a cake"
                user2 = "no copyright techno music"
                getVideo(user1);
                getMusicVideo(user2);

                var image2 = "https://plnami.blob.core.windows.net/media/2017/02/make-snow-pallet-fire-system.jpg"
                $("body").css("background-image", "url(" + image2 + ")");
                $("body").css("background-color", "#F3F5F5");
                $("#footer").css("background-color", "#94B4DF");
            }
            if (number < 30 && number > 20) {
                user1 = "how to make ice skate"
                user2 = "no copyright country music"
                getVideo(user1);
                getMusicVideo(user2);

                var image2 = "https://coldclimatechange.com/wp-content/uploads/2019/05/viole.gif"
                $("body").css("background-image", "url(" + image2 + ")");
                $("body").css("background-color", "#F3F5F5");
                $("#footer").css("background-color", "#94B4DF");
            }
            if (number < 20 && number > 10) {
                user1 = "how to make hot chocolate"
                user2 = "no copyright jazz music"
                getVideo(user1);
                getMusicVideo(user2);

                var image2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7FvlX92Mm3GjWH6x7Vmu2bsuEVt7XLmfqnMBVlLc-p-zcRhP7&s"
                $("body").css("background-image", "url(" + image2 + ")");
                $("body").css("background-color", "#F3F5F5");
                $("#footer").css("background-color", "#94B4DF");
            }
            if (number < 10) {
                user1 = "best movies to watch"
                user2 = "no copyright sad music"
                getVideo(user1);
                getMusicVideo(user2);

                var image2 = "https://i0.wp.com/ukfiremag.mdmpublishing.com/wp-content/uploads/sites/35/2018/02/pexels-photo-300857.jpeg?resize=1024%2C683&ssl=1"
                $("body").css("background-image", "url(" + image2 + ")");
                $("body").css("background-color", "#F3F5F5");
                $("#footer").css("background-color", "#94B4DF");
            }
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
                "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"

            );
            // Append weather information to the page
            city.append(img);
            container.append(city, temp, humidity, windSpd);
            content.append(container);
            weather.append(container);

        });
    }

    function getVideo(user1) {
        $("#one").show();
        $.ajax({
            type: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            data: {
                key: 'AIzaSyCZs0g3qSFW3yteHvHDQ2ObfHG18qU9gzY',
                q: user1,
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

    function getMusicVideo(user2) {
        $("#two").show();
        $.ajax({
            type: 'GET',
            url: 'https://www.googleapis.com/youtube/v3/search',
            data: {
                key: 'AIzaSyCZs0g3qSFW3yteHvHDQ2ObfHG18qU9gzY',
                q: user2,
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