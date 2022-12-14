import React, { useState } from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = ({inputUser, setInputUser}) => {

  const [valueInput, setValueInput] = useState('');

  const onSearchValueChange = (event) => {
    setValueInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputUser(valueInput)
  };
  return (
    <form onSubmit={handleSubmit} className='w-full max-w-xl mt-8'>
      <div className="flex relative">
        <TextField
          label="GitHub User"
          placeholder="joseperu2503"
          size="small"
          value={valueInput}
          onChange={onSearchValueChange}
          sx={{
            width: "100%",
          }}
        ></TextField>
        <IconButton
          onClick={handleSubmit}
          sx={{
            position: 'absolute',
            right: "10px",
          }}
        >
          <SearchIcon />
        </IconButton>
      </div>

    </form>
  );
};

export default Searcher;
