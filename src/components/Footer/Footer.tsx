import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { primary, secundary } from '../../global/themes';
import ModalCardAdd from '../ModalCardAdd/ModalCardAdd';


export const Footer = () => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ModalCardAdd open={open} handleClose={handleClose} />
            <Box
                sx={{
                    width: "100%",
                    position: "fixed",
                    left: 0,
                    bottom: 0,
                }}>
                <BottomNavigation sx={{ backgroundColor: `${primary}` }}
                    showLabels
                >
                    <BottomNavigationAction
                        sx={{ color: `${secundary}` }}
                        label="Assista mais uma serie"
                        icon={<AddCircleOutlineIcon />}
                        onClick={handleOpen}
                    />
                </BottomNavigation>
            </Box>
        </>

    )
}

export default Footer;