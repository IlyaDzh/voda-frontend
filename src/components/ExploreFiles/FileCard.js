import React from "react";
import {
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    makeStyles
} from "@material-ui/core";

import { Button } from "@/components";

const useStyles = makeStyles(theme => ({
    fileCard: {
        padding: "24px"
    },
    fileCardContent: {
        padding: 0
    },
    fileCardActions: {
        padding: 0
    },
    fileCardTitle: {
        fontWeight: "bold"
    },
    fileCardInfo: {
        margin: "16px 0 24px"
    },
    infoHashtags: {
        color: theme.palette.primary.main
    }
}));

const FileCard = ({ card, onBuy }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.fileCard} elevation={3}>
                <CardContent className={classes.fileCardContent}>
                    <Typography className={classes.fileCardTitle} variant="h2">
                        {card.title}
                    </Typography>
                    <div className={classes.fileCardInfo}>
                        <Typography variant="subtitle1" color="textSecondary">
                            PRICE:{" "}
                            <Typography color="textSecondary" display="inline">
                                {card.price} PROM
                            </Typography>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            MIME TYPE:{" "}
                            <Typography color="textSecondary" display="inline">
                                {card.type}
                            </Typography>
                        </Typography>
                        <Typography className={classes.infoHashtags}>
                            {card.hashtags.map(hashtag => `#${hashtag} `)}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions className={classes.fileCardActions}>
                    <Button
                        color="secondary"
                        onClick={() => onBuy(card.title)}
                        fullWidth
                        disableElevation
                    >
                        Purchase
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default FileCard;
