import React from "react";
import { Grid } from "@material-ui/core";

import { MyWallet } from "@/components";

const ProfilePage = () => {
    return (
        <div>
            <MyWallet />
            {/* <Grid container spacing={3}>
                Balance
            </Grid> */}
        </div>
    );
};

export default ProfilePage;
