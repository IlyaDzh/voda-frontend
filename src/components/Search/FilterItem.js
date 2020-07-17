import React from "react";
import { Paper, Typography, Checkbox, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    filterItem: {
        padding: "11px 12px",
        width: "175px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    filterItemCheckbox: {
        padding: 0
    },
    checkboxIcon: {
        width: "16px",
        height: "16px"
    }
}));

const FilterItem = ({ filter }) => {
    const classes = useStyles();

    return (
        <Paper classes={{ root: classes.filterItem }} elevation={3}>
            <Typography>{filter}</Typography>
            <Checkbox
                classes={{ root: classes.filterItemCheckbox }}
                checked={true}
                onChange={() => console.log("check")}
                icon={<span className={classes.checkboxIcon} />}
                color="primary"
                name="checkedF"
            />
        </Paper>
    );
};

export default FilterItem;
