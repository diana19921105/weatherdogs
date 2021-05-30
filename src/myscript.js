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
            const Url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + position + '&lon=' + position + '&appid=19be452deb7864ee0101b533eea372cf';
            fetch(Url)
                .then(data => {
                    return data.json()
                })
                .then(res => {
                    console.log(res)
                    const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=GnMcn23xwvNLTkuY4JiCKKA3kCbgG9Ju&q=' + res + '&limit=25&offset=0&rating=g&lang=en';

                    fetch(giphyUrl)
                        .then(data => {
                            return data.json()
                        })
                        .then(res => {
                           console.log(res);
                           document.getElementById("giphy").setAttribute('src', res);
                        });
                });


        }
    }
)()
