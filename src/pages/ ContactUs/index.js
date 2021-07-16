import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    form: {
        '& .MuiTextField-root': {
            marginTop: theme.spacing(2),
            // width: '30ch',
        },
    },
    button: {
        marginTop: "10px"
    }
}));

function ContactUs() {
    const classes = useStyles();
    const notify = () => toast("Still Working !!");
    return (
        <div className={classes.root}>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Grid container spacing={3}>
                <Grid item lg={6} md={12} xs={12}>
                    <Box >
                        <Typography color="secondary" component="h3" variant="h3">
                            Contact Info:
                        </Typography>
                        <Typography color="textSecondary" component="h3" variant="body1">
                            Mipsoftware,
                            dlf chowk, near mata mandir,
                            Rohtak, Haryana(India)-124001
                        </Typography>
                        <Typography color="textSecondary" component="h3" variant="body2">
                            Enquiry: 01262-257026, 9817586691
                            GSTN: 06ADEPU9839N2ZK
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={6} md={12} xs={12}>
                    <Typography color="secondary" component="h3" variant="h3">
                        Contact Us
                    </Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="First Name" variant="outlined" style={{ width: "50%" }} />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{ width: "50%" }} />
                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                        <TextField id="outlined-basic" label="Message" variant="outlined" fullWidth />
                        <TextField id="outlined-basic" label="Say Something About us" variant="outlined" fullWidth />
                        <Button
                            m={2}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<SendIcon />}
                            onClick={notify}
                        >
                            Send
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}

export default ContactUs
