// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Divider, Grid, IconButton, Link, Stack, Typography } from '@mui/material'; // Divider

// project import
import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconBrandGitlab, IconBrandStackoverflow } from '@tabler/icons';

// Link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : theme.palette.text.hint,
    '&:hover': {
        color: theme.palette.primary.main
    },
    '&:active': {
        color: theme.palette.primary.main
    }
}));

// =============================|| LANDING - FOOTER SECTION ||============================= //

const FooterSection = () => {
    const theme = useTheme();
    const textColor = theme.palette.mode === 'dark' ? 'text.secondary' : 'text.hint';

    return (
        <>
            <Container sx={{ mb: 15 }}>
                <Grid container spacing={6}>
                    <Grid item xs={12}>
                        <Grid container spacing={8}>
                            <Grid item xs={12} md={12}>
                                <Stack justifyContent="center" textAlign="center" alignItems="center" spacing={{ xs: 2, md: 5 }}>
                                    <Typography variant="h4" color={textColor} sx={{ fontWeight: 500 }}>
                                        About ERPPRO
                                    </Typography>
                                    <Typography variant="body2" color={textColor}>
                                        ERPPRO React is a dashboard template that utilizes the Material-UI framework and the React
                                        JavaScript library. It offers a range of features and customization options to help you create a
                                        powerful and user-friendly admin panel.
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ bgcolor: 'dark.dark', py: { xs: 3, sm: 1.5 } }}>
                <Container>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={{ xs: 1.5, sm: 1, md: 3 }}
                    >
                        <Typography color="text.secondary">
                            © ERPPRO is managed by{' '}
                            <Link href="https://gitlab.com/rabeyaety01" target="_blank" underline="hover">
                                RabeyaEty
                            </Link>
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={{ xs: 3, sm: 1.5, md: 2 }}>
                            <IconButton
                                size="small"
                                component={Link}
                                href="https://www.linkedin.com/in/rabeya-aktar-ety-143a77218/"
                                target="_blank"
                                aria-label="blog"
                            >
                                <LinkedIn sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.main' } }} />
                            </IconButton>
                            <IconButton
                                size="small"
                                component={Link}
                                href="https://github.com/RabeyaEty01"
                                target="_blank"
                                aria-label="twitter"
                            >
                                <GitHub sx={{ color: 'text.secondary', '&:hover': { color: 'secondary.main' } }} />
                            </IconButton>
                            <IconButton
                                size="small"
                                component={Link}
                                href="https://gitlab.com/rabeyaety01"
                                target="_blank"
                                aria-label="dribble"
                            >
                                <IconBrandGitlab
                                    style={{ color: theme.palette.text.secondary, '&:hover': { color: theme.palette.secondary.main } }}
                                />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    );
};

export default FooterSection;
