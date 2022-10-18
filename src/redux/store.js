import {createRootReducer} from './reducers/mainReducer';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {mainSaga} from './sagas/mainSaga';
import {persistStore} from 'redux-persist';
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = compose;
const middleware = [sagaMiddleware];

const store = createStore(
  createRootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(mainSaga);
const persistor = persistStore(store);
export {store, persistor};
