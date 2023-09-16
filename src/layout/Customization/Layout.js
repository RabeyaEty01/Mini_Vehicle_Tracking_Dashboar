// material-ui
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import useConfig from 'hooks/useConfig';
import SubCard from 'ui-component/cards/SubCard';

const Layout = () => {
    const theme = useTheme();
    const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));
    const { layout, drawerType, navType, rtlLayout, onChangeMenuType, onChangeLayout, onChangeDrawer, onChangeRTL } = useConfig();

    return (
        <SubCard title="Layout">
            <FormControl component="fieldset">
                <FormLabel component="legend">Mode</FormLabel>
                <RadioGroup
                    row
                    aria-label="layout"
                    value={navType}
                    onChange={(e) => onChangeMenuType(e.target.value)}
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel
                        value="light"
                        control={<Radio />}
                        label="Light"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                    <FormControlLabel
                        value="dark"
                        control={<Radio />}
                        label="Dark"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset" sx={{ mt: 2 }}>
                <FormLabel component="legend">Menu Orientation</FormLabel>
                <RadioGroup
                    aria-label="orientaion"
                    value={layout}
                    onChange={(e) => onChangeLayout(e.target.value)}
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel
                        value="vertical"
                        control={<Radio />}
                        label="Vertical"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                    <FormControlLabel
                        value="horizontal"
                        control={<Radio />}
                        label="Horizontal"
                        sx={{
                            '& .MuiSvgIcon-root': { fontSize: 28 },
                            '& .MuiFormControlLabel-label': { color: theme.palette.grey[900] }
                        }}
                    />
                </RadioGroup>
            </FormControl>

        </SubCard>
    );
};

export default Layout;
