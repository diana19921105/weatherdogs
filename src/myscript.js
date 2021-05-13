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
                    console.log(res)
                });
        }

    }

)()
