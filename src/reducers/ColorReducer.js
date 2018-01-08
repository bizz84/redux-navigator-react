const initialState = {
    colorKey: null,
};

const ColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COLOR_CHANGED':
            console.log(action);
            return { ...state, colorKey: action.payload.colorKey };
        default:
            return state;
    }
};

export default ColorReducer;