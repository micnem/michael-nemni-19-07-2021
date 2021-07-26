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
  }

  async getWeatherData() {
      this.temperature = 420
  }
}

decorate(WeatherStore, {
  temperature: observable,
  initProperties: action.bound,
});

export function createWeatherStore(rootStore) {
  const store = new WeatherStore(rootStore);
  return store;
}
