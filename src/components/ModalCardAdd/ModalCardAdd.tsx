import React from "react"
import { Modal, Box, ThemeProvider, TextField, Button } from "@mui/material";
import { darkTheme, primary, textColor } from "../../global/themes";
import { styleBox } from "./styled";

export const ModalCardAdd = (
    {
        open,
        handleClose
    }:
        {
            open: boolean,
            handleClose: () => void,
        }) => {
    // const handleChange = (event: any) => {
    //     console.log(event.target)
    // };
    return (
        <ThemeProvider theme={darkTheme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={styleBox}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-search"
                        label="Nome da série"
                        type="text"
                        sx={{ marginTop: '25px' }}
                    />
                    <TextField
                        id="outlined-search"
                        label="Número de episódios"
                        type="number"
                        sx={{ marginTop: '25px' }}
                    />
                    <TextField
                        id="outlined-search"
                        label="Ultimo episódio assistido"
                        type="number"
                        sx={{ marginTop: '25px' }}
                    />
                    <Button sx={{ 
                        backgroundColor: `${primary}`, color: `${textColor}`, margin: '25px 0 0 60px'}}>Enviar</Button>
                </Box>
            </Modal>
        </ThemeProvider >
    )
}

export default ModalCardAdd