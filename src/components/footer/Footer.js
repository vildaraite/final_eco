import {Box, Container, Typography} from "@mui/material";



const Footer = () => {

    return (
        <Box
        component="footer"
        sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
        }}
    >
        <Container maxWidth="sm">
            <Typography variant="body1" align="center">
                ©beco 2023 | life without footprint on Earth
            </Typography>
        </Container>
    </Box>
);
}

export default Footer;