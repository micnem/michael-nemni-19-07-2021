import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useWeatherStore } from "../index";
import { observer } from "mobx-react";

export const SearchBar = observer(() => {
  const store = useWeatherStore();

  const setQuery = (event) => {
    store.searchQuery = event.target.value;
  };
  const search = () => {
    if (store.searchQuery) {
      store.search();
    }
  };
  return (
    <div style={{ width: 300, padding: 20 }}>
      <TextField label="Search" variant="outlined" onChange={setQuery} />
      <Button onClick={search} color="primary" variant="contained" style={{ width: 300, padding: 20 }}>
        {" "}
        search{" "}
      </Button>
    </div>
  );
});
