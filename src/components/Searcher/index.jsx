import React from "react";
import { IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searcher = () => {
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        label="GitHub User"
        placeholder="joseperu2503"
        size="small"
        sx={{
          width: "90%",
        }}
      ></TextField>
      <IconButton sx={{
        left: '-45px'
      }}>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;
