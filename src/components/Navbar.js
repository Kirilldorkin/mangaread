import {Grid, AppBar, Toolbar, Box, Typography, TextField, Button, Container} from "@mui/material";
import Navglasses from '../assets/Navglasses.svg'
const Navbar = ({ setActiveModal }) => {
  return (
    <AppBar sx={{width: '100%', background: 'white'}}   >
        <Container>
        <Box  sx={{width:'1249px'}} display='flex' alignItems='center'  color='#AD02E0'>
        <img src={Navglasses}/>
          <Box color='black' >
              <Typography
              variant='h5'
              >
                  MangoRead
              </Typography>
              <Typography
              variant='p'
              >
                  Читай мангу с нами
              </Typography>
          </Box>
          <TextField  label='search'
          type='search'
            sx={{width: '342px', height: '56px', border: '2px', ml:'140px'  }}

          />
            <Box  gap='25PX'  alignItems='center' display='flex' justifyContent='end' style={{flexGrow: 1}}>
                <Button sx={{width: '142px', height: '50px', borderBlockColor: 'black '}} color="inherit" variant="outlined">войти</Button>
                <Button  sx={{width: '206px', height: '50px'}} variant="contained">регистрация</Button>
            </Box>

      </Box>
        </Container>
    </AppBar>
  );
};

export default Navbar;
