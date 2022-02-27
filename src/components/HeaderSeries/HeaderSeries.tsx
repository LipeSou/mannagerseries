import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import React from 'react'
import { textColor } from '../../global/themes';

const HeaderSeries = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar sx={{display: 'flex', alignItems:'center'}} position="static" color="transparent">
                <Toolbar>
                    <Typography color={textColor} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Seu controle de series
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default HeaderSeries;