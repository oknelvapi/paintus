import React, { createContext, useReducer, useMemo, useCallback, useLayoutEffect } from 'react';
import { debounce } from 'Utils';

const PERCENTAGE = 0.01;
const initialState = {
  width: 0,
  height: 0,
  anchorLang: null,
  indexLang: 0,
};

const setViewportSize = (state, action) => {
  const { width, height } = action.payload;
  return {...state, width,height };
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_SWITCH_LANGUAGE':
      const { indexLang } = action.payload;
      return {
        ...state,
        anchorLang: null,
        indexLang,
      };
    case 'ACTION_SET_ANCHOR_OF_LANG':
      const { anchorLang } = action.payload;
      return {
        ...state,
        anchorLang,
      };
    case 'ACTION_SWITCH_OFF_ANCHOR_OF_LANG':
      return {
        ...state,
        anchorLang: null,
      };
      case 'SET_VIEWPORT_SIZE':
        return setViewportSize(state, action);
    default:
      return state;
  }
};

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settingsState, settingsDispatch] = useReducer(settingsReducer, initialState);
  const value = useMemo(() => ({ settingsState, settingsDispatch }), [settingsState, settingsDispatch]);

    const updateViewPort = useCallback(() => {
      settingsDispatch({
            type: 'SET_VIEWPORT_SIZE',
            payload: { width: window.innerWidth, height: window.innerHeight }
        });
        const vh = window.innerHeight * PERCENTAGE;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

    }, [settingsDispatch]);

    useLayoutEffect(() => {
        // * At every resize event fired, we delay the changing of the state object with 150 milliseconds, 
        // * in case that another resize event gets fired before, it will prevent the previous change of the state to happen.
        window.addEventListener('resize', debounce(updateViewPort, 150));
        updateViewPort();
        return () => window.removeEventListener('resize', updateViewPort);

    }, []);
  
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};