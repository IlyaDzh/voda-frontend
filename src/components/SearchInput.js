import React from "react";
import { InputAdornment, makeStyles } from "@material-ui/core";

import { TextField } from "@/components";
import { SearchIcon } from "@/icons";

const useStyles = makeStyles(theme => ({
    searchInput: {
        background: "#fff",
        boxShadow: "2px 2px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        maxWidth: "451px",
        [theme.breakpoints.down("xs")]: {
            maxWidth: "unset"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#1885EA"
            }
        }
    },
    inputAdornment: {
        marginRight: 0
    }
}));

const SearchInput = ({ isMobile }) => {
    const classes = useStyles();

    return (
        <TextField
            className={classes.searchInput}
            placeholder="Search"
            variant="outlined"
            size={isMobile ? "small" : undefined}
            InputProps={{
                startAdornment: (
                    <InputAdornment
                        classes={{ root: classes.inputAdornment }}
                        position="start"
                    >
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
            fullWidth
        />
    );
};

export default SearchInput;
