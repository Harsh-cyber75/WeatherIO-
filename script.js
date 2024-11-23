// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '8aba18327emsh383cee35a439180p146f16jsnb47067c9a1f1',
// 		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// async function fetchWeather() {
// 	try {
// 		const response = await fetch(url, options);
// 		const result = await response.json(); // assuming response is JSON
// 		console.log(result);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// fetchWeather();

const apiKey = 'e42564fc8c97404e9e4175855240711';
const apiHost = 'api.weatherapi.com';

// Function to fetch weather data by city name
async function fetchWeather(city) {
    const url = `https://${apiHost}/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();

        // Extract and display the data for the searched city
        const {
            current: {
                temp_c,
                temp_f,
                wind_kph,
                wind_dir,
                humidity,
                feelslike_c
            },
            location: {
                name
            }
        } = result;

        // Update HTML elements with the fetched data
        document.getElementById('cityName').textContent = name;
        document.getElementById('temp_c').textContent = temp_c;
        document.getElementById('temp_f').textContent = temp_f;
        document.getElementById('wind_kph').textContent = wind_kph;
        document.getElementById('wind_dir').textContent = wind_dir;
        document.getElementById('humidity').textContent = humidity;
        document.getElementById('feelslike_c').textContent = feelslike_c;

    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('cityName').textContent = 'Error fetching data. Please try again.';
    }
}

// Function to handle search button click
function searchWeather(event) {
    event.preventDefault(); // Prevent the form from submitting
    const city = document.getElementById('city').value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name');
    }
}

// Attach the searchWeather function to the button click event
document.getElementById('submit').addEventListener('click', searchWeather);













