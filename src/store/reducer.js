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
            keyPrefix: 'erppro-'
        },
        menuReducer
    )
});

export default reducer;
