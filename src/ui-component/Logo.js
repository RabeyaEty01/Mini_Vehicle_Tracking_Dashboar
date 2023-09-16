// material-ui
import { useTheme } from '@mui/material/styles';
import logoDark from 'assets/images/logo-dark.svg';
import logo from 'assets/images/logo.svg';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();
    return <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="BlueTrade" width="201px" />;
};

export default Logo;
