import {combineReducers} from 'redux';
import {reducer} from './reducer';
import {SystemReducer} from './systemReducer';
import {OnboardingReducer} from './onboardingReducer';
import {UserReducer} from './userReducer';
import {patientsReducer} from './patientsReducer';
import {PaymentReducer} from './paymentReducer';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['friendList'],
};

const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) {
      state = [];
    }
    return state;
  },
  friend: persistReducer(persistConfig, reducer),
});

export const createRootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return combinedReducers(state, action);
};
