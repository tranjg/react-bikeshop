import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './appointments';
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import ButtonForm from "./ButtonForm";

export default class Calendar extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: appointments,
            currentDate: '2020-12-14',
        };
        this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
    }

    render() {
        const { data, currentDate } = this.state;

        return (
            <>
                <ButtonForm/>
            <Paper>
                <Scheduler
                    data={data}
                    height={660}
                >
                    <ViewState
                        currentDate={currentDate}
                        onCurrentDateChange={this.currentDateChange}
                    />
                    <WeekView
                        startDayHour={9}
                        endDayHour={19}
                    />
                    <Toolbar />
                    <DateNavigator />
                    <Tooltip title="Move to Current Date">
                        <TodayButton />
                    </Tooltip>
                    <Appointments />
                </Scheduler>
            </Paper>
                </>
        );
    }
}
