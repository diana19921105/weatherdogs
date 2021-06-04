(function () {
        const x = document.getElementById("hello");
        (function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getWeatherByLocation);
            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        })()


        function getWeatherByLocation(position) {
            const Url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=19be452deb7864ee0101b533eea372cf';
            fetch(Url)
                .then(data => {
                    return data.json()
                })
                .then(res => {
                    const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=GnMcn23xwvNLTkuY4JiCKKA3kCbgG9Ju&q=' + res.weather[0].main + '+dog&limit=25&offset=0&rating=g&lang=en';
                    document.getElementById("location").innerHTML = res.name;
                    document.getElementById("weather").innerHTML = res.weather[0].main;
                    document.getElementById("temp").innerHTML = (res.main.temp - 273.15).toFixed(1);

                    fetch(giphyUrl)
                        .then(data => {
                            return data.json()
                        })
                        .then(res => {
                           document.getElementById("giphy").setAttribute('src', res.data[0].embed_url);
                        });
                });


        }
    }
)()
