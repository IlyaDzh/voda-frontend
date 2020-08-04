import React from "react";
import { Grid, Hidden, makeStyles } from "@material-ui/core";

import {
    MyBalance,
    UploadFileBlock,
    SearchInput,
    DigitalGoodsTable
} from "@/components";

const useStyles = makeStyles(() => ({
    searchMobileWrapper: {
        display: "flex"
    }
}));

const DigitalGoodsPage = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <MyBalance />
            </Grid>
            <Grid item xs={12}>
                <UploadFileBlock />
            </Grid>
            <Hidden mdUp>
                <Grid item xs={12}>
                    <div className={classes.searchMobileWrapper}>
                        <SearchInput isMobile />
                    </div>
                </Grid>
            </Hidden>
            <DigitalGoodsTable />
        </Grid>
    );
};

export default DigitalGoodsPage;
// import React from "react";
// import { Grid, Hidden, makeStyles } from "@material-ui/core";

// import {
//     MyBalance,
//     UploadFileBlock,
//     Button,
//     SearchInput,
//     DigitalGoodsTable,
//     SearchInputGrid
// } from "@/components";
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

// const DigitalGoodsPage = () => {
//     const classes = useStyles();

//     return (
//         <Grid container spacing={3}>
//             <Grid item xs={12}>
//                 <MyBalance />
//             </Grid>
//             <Grid item xs={12}>
//                 <UploadFileBlock />
//             </Grid>
//             <Grid item xs={12}>
//                 <Hidden smDown>
//                     <Grid container spacing={3}>
//                         <SearchInputGrid />
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
//                         <SearchInput isMobile />
//                     </div>
//                 </Hidden>
//             </Grid>
//             <DigitalGoodsTable />
//         </Grid>
//     );
// };

// export default DigitalGoodsPage;
