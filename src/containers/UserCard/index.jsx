import { Avatar, Grid, Stack } from "@mui/material";
import React from "react";
import Description from "../../components/Description";
import PrincipalInformation from "../../components/PrincipalInformation";

const UserCard = ({ userState }) => {
  return (
    <div className="grid grid-cols-12 gap-6 mt-12">
      <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-3">
        <div className="mx-auto px-8 sm:p-0 max-w-xs">
          <Avatar
            sx={{
              width: "100%",
              height: "auto",
            }}
            src={userState.avatar_url}
          />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 md:col-span-8 lg:col-span-9">
        <div className="flex flex-col">
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </div>
      </div>

    </div>
  );
};

export default UserCard;
