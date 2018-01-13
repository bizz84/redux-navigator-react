const initialState = {
    colorKey: 'RED',
};

const ColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COLOR_CHANGED':
            return { ...state, colorKey: action.payload.colorKey };
        default:
            return state;
    }
};

export default ColorReducer;