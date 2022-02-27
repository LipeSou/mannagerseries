import React from "react"
import { Modal, Box, Typography, FormGroup, FormControlLabel, Checkbox, ThemeProvider } from "@mui/material";
import { backgroundSecundary, darkTheme, primary } from "../../global/themes";
import { ISeries } from "../../interfaces/series";
import moment from "moment";
import 'moment/locale/pt-br'

export const ModalCardSeries = ({ open, handleClose, serie }: {
    open: boolean,
    handleClose: () => void,
    serie: ISeries
}) => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "60vw",
        height: "70vh",
        bgcolor: 'background.paper',
        border: `2px solid ${primary}`,
        boxShadow: 24,
        p: 4,
        overflow: "auto",
        background: backgroundSecundary
    };
    return (
        <ThemeProvider theme={darkTheme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h5" component="div">
                        {serie.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5, mt: 2 }} color="text.secondary">
                        Data de criação
                    </Typography>
                    <Typography variant="body2">
                        {moment(`${serie.created_at}`).locale('pt-br').format('DD MMMM YYYY')}
                    </Typography>
                    <Typography sx={{ mb: 1.5, mt: 2 }} color="text.secondary">
                        Número de episodios
                    </Typography> 
                    <Typography variant="body2">
                        {serie.numberEpisode}
                    </Typography>
                    <Typography sx={{ mb: 1.5, mt: 2 }} color="text.secondary">
                        Episodios assistidos
                    </Typography>
                    <FormGroup>
                        {
                            Array.from({length : serie.numberEpisode}).map((checkbox, index) => {
                                return <FormControlLabel 
                                    control={<Checkbox defaultChecked />} 
                                    label={<Typography variant="body2">
                                                {`Episodio ${index + 1}`}
                                            </Typography>}
                                    key = {index}
                                />
                            })
                        }
                    </FormGroup>
                </Box>

            </Modal>
            </ThemeProvider >

    )
}

export default ModalCardSeries;