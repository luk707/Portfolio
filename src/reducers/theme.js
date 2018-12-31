import { combineReducers } from 'redux'
import defaultTheme from '../util/theme'

export default combineReducers({
  colorPrimary: (state = defaultTheme.colorPrimary, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.colorPrimary || state
      default:
        return state
    }
  },
  colorPrimaryDark: (state = defaultTheme.colorPrimaryDark, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.colorPrimaryDark || state
      default:
        return state
    }
  },
  colorWhite: (state = defaultTheme.colorWhite, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.colorWhite || state
      default:
        return state
    }
  },
  colorOffWhite: (state = defaultTheme.colorOffWhite, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.colorOffWhite || state
      default:
        return state
    }
  },
  colorBlack: (state = defaultTheme.colorBlack, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.colorBlack || state
      default:
        return state
    }
  },
  colorGrey: (state = defaultTheme.colorGrey, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.colorGrey || state
      default:
        return state
    }
  },
  colorGreyLight: (state = defaultTheme.colorGreyLight, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.colorGreyLight || state
      default:
        return state
    }
  },
  colorGreyDark: (state = defaultTheme.colorGreyDark, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.colorGreyDark || state
      default:
        return state
    }
  },
  colorShadow: (state = defaultTheme.colorShadow, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.colorShadow || state
      default:
        return state
    }
  },
  colorShadowLight: (state = defaultTheme.colorShadowLight, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.colorShadowLight || state
      default:
        return state
    }
  },
  fontStack: (state = defaultTheme.fontStack, action) => {
    switch (action.type) {
      case '@@theme/CHANGE':
        return action.payload.fontStack || state
      default:
        return state
    }
  },
  breakpoints: (state = defaultTheme.breakpoints) => {
    return state
  },
  space: (state = defaultTheme.space) => {
    return state
  },
})
