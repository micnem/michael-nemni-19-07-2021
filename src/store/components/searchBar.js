import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useWeatherStore } from "../index";
import { observer } from "mobx-react";

export const SearchBar = observer(() => {
const store = useWeatherStore();

  const setQuery = (event) => {
    store.searchQuery = event.target.value
  }
  const search = () => {
    store.search()
  }
  return (
    <div style={{ width: 300 }}>
      <TextField
      label="Outlined" variant="outlined" onChange={setQuery}
      />
      <Button onClick={search}> search </Button>
      <Typography>{store.currentCity?.LocalizedName}</Typography>
    </div>
  );
})

