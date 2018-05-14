import {
  SYNC_UPDATE
} from './const'
export default {
  [SYNC_UPDATE] (state, newCarst) {
    state.foods = newCarst;
  }
}
