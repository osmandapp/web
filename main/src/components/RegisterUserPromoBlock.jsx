import {Box, Button, Grid, TextField} from "@mui/material";
import React, {useState} from "react";
import {post} from "axios";


export default function RegisterUserPromoBlock({promoKey}) {

    const host = 'https://osmand.net'
    //const host = 'http://localhost:8080'

    const [email, setEmail] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [msg, setMsg] = useState('');

    async function registerEmail() {
        await post(host + `/api/promo-add-user`, '',
            {
                params: {
                    promoKey: promoKey,
                    userEmail: email
                }
            }
        )
            .then(resp => setMsg(`You should receive an email confirming that your promo subscription is activated up to ${resp.data}. Please login with this email on your device or on https://osmand.net/map/.`))
            .catch(error => setMsg(error.response.data));

    }

    function isValidEmail() {
        return email !== null && email.length >=3 && email.length < 320;
    }

    return <Box
        component="form"
        width='600px'
    >
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    autoFocus
                    margin="dense"
                    onChange={(e) => {
                        if (emailError !== '') {
                            setEmailError('')
                        }
                        setEmail(e.target.value);
                    }}
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    size="small"
                    variant="outlined"
                    helperText={emailError ? emailError : msg}
                    error={emailError.length > 0}
                    value={email ? email : ''}
                >
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained"
                        disableElevation
                        sx={{mt: "8px", height: "40px"}}
                        disabled={!isValidEmail()}
                        onClick={registerEmail}>
                    Send
                </Button>
            </Grid>
        </Grid>
    </Box>
}