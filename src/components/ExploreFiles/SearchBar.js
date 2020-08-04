import React from "react";
import { inject, observer } from "mobx-react";
import { Grid, Hidden, makeStyles } from "@material-ui/core";

import { SearchInput } from "@/components";

const useStyles = makeStyles(() => ({
    searchMobileWrapper: {
        display: "flex"
    },
    filterMobileBtn: {
        minWidth: "48px",
        marginRight: "16px"
    }
}));

const SearchBar = ({ searchValue, setSearchText }) => {
    const classes = useStyles();

    return (
        <>
            <Hidden smDown>
                <Grid item xs={12}>
                    <SearchInput
                        value={searchValue || ""}
                        handleChange={e => setSearchText(e.target.value)}
                    />
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid item xs={12}>
                    <div className={classes.searchMobileWrapper}>
                        <SearchInput
                            value={searchValue || ""}
                            handleChange={e => setSearchText(e.target.value)}
                            isMobile
                        />
                    </div>
                </Grid>
            </Hidden>
        </>
    );
};

const mapMoxToProps = ({ files }) => ({
    searchValue: files.searchValue,
    setSearchText: files.setSearchText
});

export default inject(mapMoxToProps)(observer(SearchBar));
// import React from "react";
// import { inject, observer } from "mobx-react";
// import { Grid, Hidden, makeStyles } from "@material-ui/core";

// import { Button, SearchInput, FilterItem } from "@/components";
// import { FilterIcon } from "@/icons";

// const useStyles = makeStyles(() => ({
//     searchMobileWrapper: {
//         display: "flex"
//     },
//     filterMobileBtn: {
//         minWidth: "48px",
//         marginRight: "16px"
//     }
// }));

// const SearchBar = ({ searchValue, setSearchText }) => {
//     const classes = useStyles();

//     return (
//         <>
//             <Hidden smDown>
//                 <Grid item xs={12}>
//                     <SearchInput
//                         value={searchValue || ""}
//                         handleChange={e => setSearchText(e.target.value)}
//                     />
//                 </Grid>
//             </Hidden>
//             <Grid item xs={12}>
//                 <Hidden smDown>
//                     <Grid container spacing={1}>
//                         {[
//                             "Filter by name",
//                             "Filter by price",
//                             "Filter by date",
//                             "Filter by type",
//                             "Filter by category",
//                             "Filter by genre"
//                         ].map((filter, i) => (
//                             <Grid key={i} item xs={4} sm={4} md={4} lg={2}>
//                                 <FilterItem filter={filter} />
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Hidden>
//                 <Hidden mdUp>
//                     <div className={classes.searchMobileWrapper}>
//                         <Button
//                             className={classes.filterMobileBtn}
//                             color="secondary"
//                             disableElevation
//                         >
//                             <FilterIcon />
//                         </Button>
//                         <SearchInput
//                             value={searchValue || ""}
//                             handleChange={e => setSearchText(e.target.value)}
//                             isMobile
//                         />
//                     </div>
//                 </Hidden>
//             </Grid>
//         </>
//     );
// };

// const mapMoxToProps = ({ files }) => ({
//     searchValue: files.searchValue,
//     setSearchText: files.setSearchText
// });

// export default inject(mapMoxToProps)(observer(SearchBar));
