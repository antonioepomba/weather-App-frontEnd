import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import WeatherCardPorto from "./components/WeatherCardPorto.js";
import WeatherCardLisboa from "./components/WeatherCardLisboa";
import WeatherCardCoimbra from "./components/WeatherCardCoimbra";
import WeatherCardLeiria from "./components/WeatherCardLeria";
import WeatherCardFaro from "./components/WeatherCardFaro";
function App() {
  return (
    <div className="App">
      <h3 className="">Weather for 5 cities of Portugal</h3>
    <WeatherCardPorto/>
    <WeatherCardLisboa/>
    <WeatherCardLeiria/>
    <WeatherCardCoimbra/>
    <WeatherCardFaro/>
    </div>
  );
}

export default App;
