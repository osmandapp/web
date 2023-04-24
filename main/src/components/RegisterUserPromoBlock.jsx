import {Box, Button, Grid, TextField} from "@mui/material";
import React, {useState} from "react";
import {post} from "axios";


export default function RegisterUserPromoBlock({promoName}) {

    const host = 'https://osmand.net'
    //const host = 'http://localhost:8080'

    const [email, setEmail] = useState(null);
    const [emailError, setEmailError] = useState('');
    const [msg, setMsg] = useState('');

    async function registerEmail() {
        await post(host + `/promo/add-user`, '',
            {
                params: {
                    name: promoName,
                    email: email
                }
            }
        )
            .then(resp => setMsg(`Subscription expiration date: ${resp.data}`))
            .catch(error => setMsg(error.response.data));

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
                        onClick={registerEmail}>
                    Send
                </Button>
            </Grid>
        </Grid>
    </Box>
}