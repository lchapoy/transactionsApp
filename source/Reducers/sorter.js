/**
 * Created by luis on 6/1/2016.
 */
import constant from '../constants'

export default function sorter(state = "COMPANY", action="") {
    switch (action.type) {
        case constant.SET_SORTER:
            return action.sorter;
        default:
            return state
    }
}
