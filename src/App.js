import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autocomplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>New York</h1>
          <ul>
            <li>Last updated: Sunday 10:00</li>
            <li> Cloudy</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Cloudy"
              />
              <div>
                <span className="units">
                  <a href="/">°C</a>|<a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:80%</li>
              <li>Wind:30km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
