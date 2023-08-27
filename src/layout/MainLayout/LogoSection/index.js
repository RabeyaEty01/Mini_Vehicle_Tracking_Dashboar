import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link, Typography } from '@mui/material';

// project imports
import { DASHBOARD_PATH } from 'config';
import Logo from 'ui-component/Logo';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <Link component={RouterLink} to={DASHBOARD_PATH} style={{ textDecoration: 'none' }} aria-label="erppro logo">
        {/* <Logo /> */}
        <Typography variant="h3" color="secondary" sx={{ textDecoration: 'none', mb: 1 }}>
            ERPPRO
        </Typography>
        {/* <img src="/happi-logo.svg" width="70px" height="50px" alt="" /> */}
    </Link>
);

export default LogoSection;
