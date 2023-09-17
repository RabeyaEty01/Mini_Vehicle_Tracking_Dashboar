// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project imports
import menuReducer from './slices/menu';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    menu: persistReducer(
        {
            key: 'menu',
            storage,
            keyPrefix: 'mini-vehicle-tracking-dashboard-'
        },
        menuReducer
    )
});

export default reducer;
