import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import InventoryTable from "./InventoryTable";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    container: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function Inventory() {
    const classes = useStyles();

    return (
        <div>
                    <Paper className={classes.paper}>
                        <InventoryTable/>
                    </Paper>
        </div>

    )
}


