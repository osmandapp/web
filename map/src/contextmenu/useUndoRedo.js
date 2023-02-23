import {useContext, useReducer} from "react";
import AppContext from "../context/AppContext";

const SET_STATE = "SET_STATE";
const UNDO = "UNDO";
const REDO = "REDO";
const CLEAR = "CLEAR";

const useUndoRedo = (initialState = {}) => {

    const ctx = useContext(AppContext);

    const reducerWithUndoRedo = (state, action) => {
        const {past, present, future} = state;

        switch (action.type) {
            case SET_STATE:
                ctx.setTrackState({
                    pastStates: [...past, present],
                    futureStates: []
                })
                return {
                    past: [...past, present],
                    present: action.data,
                    future: []
                };
            case UNDO:
                ctx.setTrackState({
                    pastStates: past.slice(0, past.length - 1),
                    futureStates: [present, ...future]
                })
                return {
                    past: past.slice(0, past.length - 1),
                    present: past[past.length - 1],
                    future: [present, ...future]
                };
            case REDO:
                ctx.setTrackState({
                    pastStates: [...past, present],
                    futureStates: future.slice(1)
                })
                return {
                    past: [...past, present],
                    present: future[0],
                    future: future.slice(1)
                };
            case CLEAR:
                ctx.setTrackState({
                    pastStates: [],
                    futureStates: []
                })
                return {
                    past: [],
                    present: {},
                    future: []
                };
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducerWithUndoRedo, {
        past: ctx.trackState.pastStates,
        present: initialState,
        future: ctx.trackState.futureStates
    });
    const {past, present, future} = state;

    const setState = (newState) => dispatch({type: SET_STATE, data: newState});
    const undo = () => dispatch({type: UNDO});
    const redo = () => dispatch({type: REDO});
    const clear = () => dispatch({type: CLEAR});
    const isUndoPossible = past && past.length > 1;
    const isRedoPossible = future && future.length > 0;

    return {
        state: present,
        setState,
        undo,
        redo,
        clear,
        pastStates: past,
        futureStates: future,
        isUndoPossible,
        isRedoPossible
    };
};

export default useUndoRedo;