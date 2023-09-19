const weatherApi = {
  key: "12a55e390715b325f0d1e3592a7a2508",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};
var lon;
var lat;

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // console.log(btn);

  // To get current location..........
  navigator.geolocation.getCurrentPosition((location) => {
    // console.log(location);

    lon = location.coords.longitude;
    lat = location.coords.latitude;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApi.key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        var Box2 = document.querySelector(".Box2");
        Box2.style.display = "block";

        var appName = document.createElement("h1");
        appName.classList.add("appName");
        appName.innerHTML = "Weather App";
        Box2.appendChild(appName);

        var hr = document.createElement("hr");
        Box2.appendChild(hr);

        var img = document.createElement("img");
        img.src = "./Assets/weather-2019-02-07.png";
        Box2.appendChild(img);

        var temp = document.createElement("div");
        temp.classList.add("temp");
        temp.innerHTML = (data.main.temp - 273.15 + "%").toFixed(2) + "°C";
        Box2.appendChild(temp);

        var broken = document.createElement("div");
        broken.classList.add("broken");
        broken.innerHTML = data.weather[0].description;
        Box2.appendChild(broken);

        var cityName = document.createElement("div");
        cityName.classList.add("cityName");
        Box2.appendChild(cityName);

        var i = document.createElement("i");
        i.classList.add("fa-solid", "fa-location-dot");
        cityName.appendChild(i);

        var span = document.createElement("span");
        span.innerHTML = data.name;
        cityName.appendChild(span);

        var line_hr = document.createElement("hr");
        line_hr.classList.add("line_hr");
        Box2.appendChild(line_hr);

        var end = document.createElement("div");
        end.classList.add("end");
        Box2.appendChild(end);

        var left = document.createElement("div");
        left.classList.add("left");
        end.appendChild(left);

        var sym_therm = document.createElement("i");
        sym_therm.classList.add("fa-solid", "fa-temperature-three-quarters");
        left.appendChild(sym_therm);

        var info = document.createElement("div");
        info.classList.add("info");
        left.appendChild(info);

        var degree_17 = document.createElement("h3");
        degree_17.classList.add("degree_17");
        degree_17.innerHTML = "17°C";
        info.appendChild(degree_17);

        var feels = document.createElement("div");
        feels.classList.add("feels");
        feels.innerHTML = (data.main.feels_like - 273.15).toFixed(2) + "°C";
        info.appendChild(feels);

        var partition = document.createElement("hr");
        partition.classList.add("partition");
        end.appendChild(partition);

        var right = document.createElement("div");
        right.classList.add("right");
        end.appendChild(right);

        var droplet = document.createElement("i");
        droplet.classList.add("fa-solid", "fa-droplet");
        right.appendChild(droplet);

        var info_end = document.createElement("div");
        info_end.classList.add("info");
        right.appendChild(info_end);

        var percent = document.createElement("h3");
        percent.innerHTML = data.main.humidity + "%";
        info_end.appendChild(percent);

        var humidity = document.createElement("div");
        humidity.classList.add("humidity");
        humidity.innerHTML = "Humidity";
        info_end.appendChild(humidity);
      });
  });
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    const input = document.querySelector(".input").value;
    console.log(input);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${weatherApi.key}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.cod);

        if (data.cod == "404") {
          console.log(data.message);
          const error = document.querySelector(".error");
          const p = document.querySelector(".errorP");
          p.innerHTML = data.message;
          error.style.display = "block";
        } else {
          var Box2 = document.querySelector(".Box2");
          Box2.style.display = "block";

          var appName = document.createElement("h1");
          appName.classList.add("appName");
          appName.innerHTML = "Weather App";
          Box2.appendChild(appName);

          var hr = document.createElement("hr");
          Box2.appendChild(hr);

          var img = document.createElement("img");
          img.src = "./Assets/weather-2019-02-07.png";
          Box2.appendChild(img);

          var temp = document.createElement("div");
          temp.classList.add("temp");
          temp.innerHTML = (data.main.temp - 273.15).toFixed(2) + "°C";
          Box2.appendChild(temp);

          var broken = document.createElement("div");
          broken.classList.add("broken");
          broken.innerHTML = data.weather[0].description;
          Box2.appendChild(broken);

          var cityName = document.createElement("div");
          cityName.classList.add("cityName");
          Box2.appendChild(cityName);

          var i = document.createElement("i");
          i.classList.add("fa-solid", "fa-location-dot");
          cityName.appendChild(i);

          var span = document.createElement("span");
          span.innerHTML = data.name;
          cityName.appendChild(span);

          var line_hr = document.createElement("hr");
          line_hr.classList.add("line_hr");
          Box2.appendChild(line_hr);

          var end = document.createElement("div");
          end.classList.add("end");
          Box2.appendChild(end);

          var left = document.createElement("div");
          left.classList.add("left");
          end.appendChild(left);

          var sym_therm = document.createElement("i");
          sym_therm.classList.add("fa-solid", "fa-temperature-three-quarters");
          left.appendChild(sym_therm);

          var info = document.createElement("div");
          info.classList.add("info");
          left.appendChild(info);

          var degree_17 = document.createElement("h3");
          degree_17.classList.add("degree_17");
          degree_17.innerHTML =
            (data.main.feels_like - 273.15).toFixed(2) + "°C";
          info.appendChild(degree_17);

          var feels = document.createElement("div");
          feels.classList.add("feels");
          feels.innerHTML = "Feels like";
          info.appendChild(feels);

          var partition = document.createElement("hr");
          partition.classList.add("partition");
          end.appendChild(partition);

          var right = document.createElement("div");
          right.classList.add("right");
          end.appendChild(right);

          var droplet = document.createElement("i");
          droplet.classList.add("fa-solid", "fa-droplet");
          right.appendChild(droplet);

          var info_end = document.createElement("div");
          info_end.classList.add("info");
          right.appendChild(info_end);

          var percent = document.createElement("h3");
          percent.innerHTML = data.main.humidity + "%";
          info_end.appendChild(percent);

          var humidity = document.createElement("div");
          humidity.classList.add("humidity");
          humidity.innerHTML = "Humidity";
          info_end.appendChild(humidity);
        }
      });
  }
});
