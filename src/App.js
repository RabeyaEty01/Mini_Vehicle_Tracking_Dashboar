// routing
import Routes from 'routes';
// project imports
import NavigationScroll from 'layout/NavigationScroll';

import ThemeCustomization from 'themes';

// ==============================|| APP ||============================== //

const App = () => {
    return (
        <ThemeCustomization>
            <NavigationScroll>
                <>
                    <Routes />
                </>
            </NavigationScroll>
        </ThemeCustomization>
    );
};

export default App;
