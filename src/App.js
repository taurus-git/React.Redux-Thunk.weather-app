import React from 'react';
import Header from './components/Header/Header';
import SearchForm from "./components/SearchForm/SearchForm";
import Instructions from "./components/Instructions/Instructions";
import WeatherForecast from "./components/WeatherForecast/WeatherForecast";

const App = () => {
    return (
        <div>
            <Header/>
            <SearchForm/>
            <Instructions/>
            <WeatherForecast/>
        </div>
    );
}

export default App;
