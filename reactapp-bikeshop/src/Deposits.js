import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Recent Deposits</Title>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on 1 December, 2020
            </Typography>
        </React.Fragment>
    );
}
