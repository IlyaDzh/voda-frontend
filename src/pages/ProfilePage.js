import React from "react";

import { MyBalance, AccountBalance } from "@/components";

const ProfilePage = () => {
    return (
        <div>
            <MyBalance />
            <AccountBalance title="Account Balance" number="15.2000" />
            <AccountBalance title="Account Balance" number="15.2000" />
            <AccountBalance title="Account Balance" number="15.2000" />
        </div>
    );
};

export default ProfilePage;
