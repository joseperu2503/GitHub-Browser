import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Item = ({name,quantity}) => {
  return (
    <Paper elevation={3}>
      <div className="flex md:flex-col justify-between sm:items-center gap-4 sm:gap-0 px-4 py-2">
        <span className="sm:text-lg">{name}</span>
        <span className="sm:text-lg font-bold">{quantity}</span>
      </div>
    </Paper>
  )
}

const PaperInformation = ({userState}) => {
  return (
    <>
      <div className="grid md:grid-cols-3 py-4 gap-4 mt-4">
        <Item name='Repositories' quantity={userState.public_repos}/>
        <Item name='Followers' quantity={userState.followers}/>
        <Item name='Following' quantity={userState.following}/>
      </div>
    </>
  );
};

export default PaperInformation;
