import React from "react";
import { decorate, action, observable } from "mobx";

const WeatherStoreContext = React.createContext({});

export const WeatherStoreProvider = WeatherStoreContext.Provider;

export const useWeatherStore = () => React.useContext(WeatherStoreContext);

class WeatherStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.initProperties();
  }

  initProperties() {
    this.temperature = "";
    this.currentCity = {Key: "215854"};
  }

  async getWeatherData() {
    this.weatherData = await getWeatherDataFromApi(this.currentCity.Key);
    this.temperature = this.weatherData.Temperature.Metric.Value;
    this.weatherText = this.weatherData.WeatherText;
  }

  async search() {
    this.currentCity = await submitSearch(this.searchQuery);
    this.weatherData = this.getWeatherData();
    console.log('city', this.currentCity, 'weather', this.weatherData)
  }
}

decorate(WeatherStore, {
  temperature: observable,
  weatherData: observable,
  weatherText: observable,
  currentCity: observable,
  searchQuery: observable,
  initProperties: action.bound,
});

export function createWeatherStore(rootStore) {
  const store = new WeatherStore(rootStore);
  return store;
}

const axios = require("axios");

const getWeatherDataFromApi = async (cityKey) => {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`;
  const res = await axios.get(url, {
    params: { apikey: process.env.REACT_APP_API_KEY, language: "en-us" },
  });
  console.log("get", res);
  return res.data[0];
};

const submitSearch = async (searchQuery) => {
  const res = await axios.get(
    "http://dataservice.accuweather.com/locations/v1/cities/autocomplete",
    {
      params: {
        apikey: process.env.REACT_APP_API_KEY,
        q: searchQuery,
        language: "en-us",
      },
    }
  );
  return res?.data[0];
};
