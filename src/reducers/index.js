import { combineReducers } from 'redux'
import { signInUser, loginUser } from "../api/auth-api"

const user = (state = {}, action) => {
    switch (action.type) {
		case loginUser:
			return action.payload
		case signInUser:
			return action.payload
		default:
			return state
	}
}

const rootReducer = combineReducers({
	user
})

export default rootReducer