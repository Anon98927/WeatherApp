//current date and time
let now = new Date();

let h3 = document.querySelector("h3");

let date = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

h3.innerHTML = `${day}, ${month} ${date} ${hour}:${minute}`;

//city search
function search(event) {
  event.preventDefault();
  let currentCity = document.querySelector("#city-input");
  console.log(currentCity.value);
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${currentCity.value}`;
  let city = document.querySelector("#city-input").value;

  let apiKey = "cf6b50b908fa2e0baca3eed8a569a5f6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}
//current temperature
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = `${temperature}&degF`;
}
