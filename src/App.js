import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useRootStore } from "./rootStoreContext";
import { observer } from "mobx-react";
import { createWeatherStore, WeatherStoreProvider } from "./store/index";
import { WeatherCard } from "./store/components/weatherCard";

export const App = observer(() => {
  const rootStore = useRootStore();
  const [store] = useState(() => createWeatherStore(rootStore));

  return (
    <WeatherStoreProvider value={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <WeatherCard />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </WeatherStoreProvider>
  );
});
