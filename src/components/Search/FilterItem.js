import React from "react";
import { Grid, Paper, Typography, Checkbox, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    filterItem: {
        padding: "11px 12px",
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
        <Grid item xs={6} sm={4} md={4} lg={2}>
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
        </Grid>
    );
};

export default FilterItem;
