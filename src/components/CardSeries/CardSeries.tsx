import { Grid, Button, Typography, ThemeProvider } from '@mui/material';
import React, { useState } from 'react'
import { backgroundSecundary, darkTheme, secundary } from '../../global/themes';
import ModalCardSeries from '../ModalCardSeries/ModalCardSeries';
import { ISeries } from '../../interfaces/series';


const CardSeries = ({ serie }: { serie: ISeries }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ModalCardSeries open={open} handleClose={handleClose} serie={serie} />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={3} sx={{ justifyContent: 'center' }}>
                    <ThemeProvider theme={darkTheme}>
                        <Button
                            variant="outlined"
                            sx={{ width: 300, height: 50, marginTop: '1rem', background: backgroundSecundary }}
                            onClick={handleOpen}
                        >
                            <Typography variant="h6" component="div" color={secundary} sx={{ flexGrow: 1 }}>
                                {serie.name}
                            </Typography>
                        </Button>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </>
    )
}

export default CardSeries;