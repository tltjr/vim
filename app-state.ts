import { Action } from 'redux';
import * as Immutable from 'immutable';

export interface IAppAction extends Action {
  type: string;
  payload: any;
}

export const getNextMonth = () => {
  var now = new Date();
  if (now.getMonth() === 11) {
    return new Date(now.getFullYear() + 1, 0, now.getDate());
  } else {
    return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
  }
};

export const initialState = Immutable.Map<string, any>({
  'startingBalance': 1000,
  'startDateValue': new Date(),
  'endDateValue': getNextMonth(),
  'settings': Immutable.Map({
    'id': -1,
    'payAmount': -1,
    'payAmountTwo': -1,
    'cellPhoneCredit': -1,
    'savingsAmount': -1
  }),
  'bills': Immutable.List([])
});

export const reducer =
  (stateMap: Immutable.Map<string, any> = initialState, action: IAppAction) => {
    switch (action.type) {
      case 'REFRESH_VARIABLES':
        stateMap = stateMap.set('startingBalance', action.payload.startingBalance);
        stateMap = stateMap.set('startDateValue', action.payload.startDateValue);
        return stateMap.set('endDateValue', action.payload.endDateValue);
      case 'UPDATE_SETTINGS_SUCCESSFUL':
        return stateMap.set('settings', action.payload.settings);
      case 'BILLS_RECEIVED':
        return stateMap.set('bills', action.payload.bills);
      case 'BILLS_UPDATED':
        return stateMap.set('bills', action.payload.bills);
      case 'DATA_RETRIEVED':
        stateMap = stateMap.set('settings', action.payload.settings);
        return stateMap.set('bills', action.payload.bills);
      default:
        return stateMap;
      }
  };

export default reducer;
