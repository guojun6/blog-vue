import {
  SET_ARTICLEDATA,
  SET_HEADER_BTN_TYPE,
  SET_ALBUMDATA,
  SET_SHOWASIDE
} from './mutations.type'

export default {
  [SET_ARTICLEDATA] (state, p) {
    state.articleData = p
  },
  [SET_HEADER_BTN_TYPE] (state, p) {
    state.headerBtnType = p
  },
  [SET_ALBUMDATA] (state, p) {
    state.albumData = p
  },
  [SET_SHOWASIDE] (state, p) {
    console.log(p);
    state.showAside = p
  }
}
