import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          COMMUNITY OF GAMERS
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Of the gamers,by the gamers,for the gamers
        </Typography>
        <Form />
      </Box>
      <div style={{ position: 'relative', height: '100vh' }}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          minWidth: '100%',
          minHeight: '100%',
          width: '50%',
          height: 'auto',
          zIndex: -1,
          height:'100vh'
        }}
      >
        <source src="/loginbg.mp4" type="video/mp4" />

        
      </video>
      </div>

      
    </Box>
  );
};

export default LoginPage;