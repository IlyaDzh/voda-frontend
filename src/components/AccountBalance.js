import React, { useState } from "react";
import { Paper, makeStyles, Typography } from "@material-ui/core";

import { Button } from "@/components";

const useStyles = makeStyles(theme => ({
    balanceItem: {
        display: "flex",
        padding: "24px 32px 24px 24px"
    },
    balanceName: {
        marginRight: "24px",
        minWidth: "140px"
    },
    balanceActions: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%"
    },
    balanceTitle: {
        fontWeight: "bold",
        lineHeight: "17px",
        marginBottom: "4px"
    },
    balanceNumber: {
        display: "block",
        lineHeight: "9px"
    },
    disabledField: {
        background: theme.palette.background.main,
        borderRadius: "5px",
        padding: "4px 12px 2px 12px",
        marginRight: "16px",
        maxWidth: "178px",
        width: "100%",
        height: "24px"
    },
    unlockBtn: {
        marginRight: "16px",
        width: "90px"
    },
    questionBtn: {
        minWidth: "30px",
        fontSize: "18px",
        padding: 0
    }
}));

const AccountBalance = ({ title, number, unclockNumber, className }) => {
    const classes = useStyles();
    const [showBalance, setShowBalance] = useState(false);

    return (
        <Paper
            className={className}
            classes={{ root: classes.balanceItem }}
            elevation={3}
        >
            <div className={classes.balanceName}>
                <Typography classes={{ root: classes.balanceTitle }}>
                    {title}
                </Typography>
                <Typography
                    variant="caption"
                    classes={{ root: classes.balanceNumber }}
                >
                    {number}
                </Typography>
            </div>
            <div className={classes.balanceActions}>
                <div className={classes.disabledField}>
                    {showBalance && <Typography>{unclockNumber}</Typography>}
                </div>
                <Button
                    className={classes.unlockBtn}
                    color="secondary"
                    onClick={() => setShowBalance(!showBalance)}
                    disableElevation
                >
                    {!showBalance ? "Unlock" : "Lock"}
                </Button>
                <Button
                    className={classes.questionBtn}
                    color="secondary"
                    variant="outlined"
                    disableElevation
                >
                    ?
                </Button>
            </div>
        </Paper>
    );
};

export default AccountBalance;
