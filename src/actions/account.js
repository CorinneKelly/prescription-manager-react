import axios from 'axios'
import moment from 'moment'
import { store } from '../index'
import { push } from 'react-router-redux'



export function getJWTToken(response) {
  return (dispatch) => {
    axios
    .post('https://prescrxibed-rails-api.herokuapp.com/v1/sessions', {account: {googleToken: response.Zi.access_token, googleId: response.El, name: response.w3.U3}})
    .then(function(response){
      let token = response.data.jwt
      let secondsToExpiration =  (moment().unix() + 60*60*1000)

      dispatch({
        type: 'SET_TOKEN',
        payload: {
          token: token,
          email: response.data.fullname,
          expiresAt: secondsToExpiration
        }
      })

    })
  }
}

export function setAuthHeader(){
  return {headers: {"token": localStorage.getItem("token")}}
}

export function handleLogout(){
  return(dispatch) => {
    dispatch({
      type: "EXPIRE_SESSION"
    })
    store.dispatch(push('/'))
  }
}

export function forceLogout(expiresAt){
  return(dispatch) => {
    setTimeout(
      () => {
        console.log("time to log out")
        dispatch({
          type: "EXPIRE_SESSION"
        })
        store.dispatch(push('/'))

      }, (expiresAt - moment().unix())
    )
    console.log(expiresAt)
    console.log(expiresAt - moment().unix())
  }
}
