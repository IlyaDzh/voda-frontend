import React from "react";
import { Grid } from "@material-ui/core";

import { MyWallet, AccountBalance } from "@/components";

const ProfilePage = () => {
    return (
        <div>
            <MyWallet />
            <AccountBalance />
            <AccountBalance />
            <AccountBalance />
            {/* <Grid container spacing={3}>
                Balance
            </Grid> */}
        </div>
    );
};

export default ProfilePage;
