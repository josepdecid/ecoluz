import { SET_SORT_INDEX } from '../actions/filtersActions';

const defaultState = {
    idx: 0,
    field: 'time',
    order: 1
};

const sortingReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_SORT_INDEX:
            return { ...action };
        default:
            return state;
    }
};

export default sortingReducer;