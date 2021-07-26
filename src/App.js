import "./App.css";
import React, { useState } from "react";
import { useRootStore } from "./rootStoreContext";
import { observer } from "mobx-react";
import { createWeatherStore, WeatherStoreProvider } from "./store/index";
import { WeatherCard } from "./store/components/weatherCard";
import { SearchBar } from "./store/components/searchBar";

export const App = observer(() => {
  const rootStore = useRootStore();
  const [store] = useState(() => createWeatherStore(rootStore));

  return (
    <WeatherStoreProvider value={store}>
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <WeatherCard />
        </header>
      </div>
    </WeatherStoreProvider>
  );
});
