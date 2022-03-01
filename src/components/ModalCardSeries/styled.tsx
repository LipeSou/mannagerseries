import { backgroundSecundary, primary } from "../../global/themes";

export const styleBox = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    height: "310px",
    bgcolor: 'background.paper',
    border: `2px solid ${primary}`,
    boxShadow: 24,
    p: 4,
    overflow: "auto",
    background: backgroundSecundary
};