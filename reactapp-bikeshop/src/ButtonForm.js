import React from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

export default function ButtonForm() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
            Schedule Repair
        </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Schedule Repair</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Enter customer name, bicycle type, and repair time/date in form below.
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="filled-required"
                label="Customer Name"
                type="string"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="filled-required"
                label="Bicycle Type"
                type="string"
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="date"
                label="Appointment Date"
                type="date"
                InputLabelProps={{
                    shrink: true,
                }}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="time"
                label="Start Time"
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
                fullWidth
            />
            <TextField
                autoFocus
                margin="dense"
                id="time"
                label="End Time"
                type="time"
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300, // 5 min
                }}
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Schedule
            </Button>
        </DialogActions>
    </Dialog>
    </>
    )
}
