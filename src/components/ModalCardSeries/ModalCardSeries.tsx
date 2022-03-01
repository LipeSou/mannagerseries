import React, { useState } from "react"
import { Modal, Box, Typography, ThemeProvider, FormControl, Select, MenuItem } from "@mui/material";
import { darkTheme, secundary } from "../../global/themes";
import { ISeries } from "../../interfaces/series";
import moment from "moment";
import 'moment/locale/pt-br'
import { styleBox } from "./styled";

export const ModalCardSeries = ({ open, handleClose, serie }: {
    open: boolean,
    handleClose: () => void,
    serie: ISeries
}) => {
    const [episodesFinishes, setEpisodesFinishes] = useState<number>(serie.numberFinish || 1)

    const handleChange = (event: any) => {
        console.log(event.target)
        setEpisodesFinishes(event.target.value as number);
    };
    return (
        <ThemeProvider theme={darkTheme}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={styleBox}>
                    <Typography variant="h5" component="div" color={secundary}>
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
                    <FormControl fullWidth variant="filled">
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={episodesFinishes}
                            label="Episodios assistidos"
                            onChange={handleChange}
                        >
                            {
                                Array.from({ length: serie.numberEpisode }).map((checkbox, index) => {
                                    return <MenuItem value={index + 1} key={index}>{index + 1} </MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Box>

            </Modal>
        </ThemeProvider >

    )
}

export default ModalCardSeries;