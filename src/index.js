import { createRoot } from 'react-dom/client';

// third party
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// project imports
import App from 'App';
import { BASE_PATH } from 'config';
import { ConfigProvider } from 'contexts/ConfigContext';
import reportWebVitals from 'reportWebVitals';
import * as serviceWorker from 'serviceWorker';
import { persister, store } from 'store';

// style + assets
import 'assets/scss/style.scss';
import { QueryClient, QueryClientProvider } from 'react-query';

// ==============================|| REACT DOM RENDER  ||============================== //
const queryClient = new QueryClient();
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <ConfigProvider>
                    <BrowserRouter basename={BASE_PATH}>
                        <App />
                    </BrowserRouter>
                </ConfigProvider>
            </PersistGate>
        </Provider>
    </QueryClientProvider>
);

serviceWorker.unregister();

reportWebVitals();
