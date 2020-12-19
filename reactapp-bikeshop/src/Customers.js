import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import CustomerTable from "./CustomerTable";

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

export default function Customers() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                {/* Customers */}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <CustomerTable/>
                    </Paper>
                </Grid>
            </Grid>
        </div>

    )
}


