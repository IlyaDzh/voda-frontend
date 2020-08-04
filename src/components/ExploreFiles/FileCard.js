import React from "react";
import {
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    IconButton,
    makeStyles
} from "@material-ui/core";

import { Button, Hashtag, Loader } from "@/components";
import { ArrowIcon } from "@/icons";

const useStyles = makeStyles(() => ({
    fileCard: {
        position: "relative",
        padding: "24px",
        height: "calc(100% - 48px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    fileCardContent: {
        padding: 0
    },
    fileCardActions: {
        padding: 0
    },
    fileCardTitle: {
        fontWeight: "bold",
        wordBreak: "break-word",
        paddingRight: "25px"
    },
    fileCardInfo: {
        margin: "16px 0 24px"
    },
    openDetailsBtn: {
        position: "absolute",
        right: 0,
        top: 0,
        margin: "8px"
    }
}));

const FileCard = ({
    userIsAuth,
    openLoginModal,
    card,
    isPending,
    isPurchased,
    purchaseFile,
    setSearchText,
    openDetails
}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.fileCard} elevation={3}>
                <CardContent className={classes.fileCardContent}>
                    <IconButton
                        className={classes.openDetailsBtn}
                        onClick={() => openDetails(true, card)}
                    >
                        <ArrowIcon />
                    </IconButton>
                    <Typography className={classes.fileCardTitle} variant="h2">
                        {card.name}
                    </Typography>
                    <div className={classes.fileCardInfo}>
                        <Typography variant="subtitle1" color="textSecondary">
                            PRICE:{" "}
                            <Typography
                                color="textSecondary"
                                display="inline"
                                style={{ wordBreak: "break-word" }}
                            >
                                {card.price || 0} VODA
                            </Typography>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            MIME TYPE:{" "}
                            <Typography color="textSecondary" display="inline">
                                {card.mimeType}
                            </Typography>
                        </Typography>
                        <div>
                            {card.metadata.hashTags &&
                                card.metadata.hashTags
                                    .filter(hashtag => hashtag)
                                    .map(hashtag => (
                                        <Hashtag
                                            key={hashtag}
                                            hashtagName={hashtag}
                                            hashtagClick={() =>
                                                setSearchText(hashtag)
                                            }
                                        />
                                    ))}
                        </div>
                    </div>
                </CardContent>
                <CardActions className={classes.fileCardActions}>
                    <Button
                        color="secondary"
                        onClick={() =>
                            userIsAuth ? purchaseFile(card) : openLoginModal(true)
                        }
                        disabled={isPending || isPurchased}
                        fullWidth
                        disableElevation
                    >
                        {isPending ? (
                            <Loader size={20} />
                        ) : isPurchased ? (
                            "Purchased"
                        ) : (
                            "Purchase"
                        )}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default FileCard;
