import React from "react"
import { Route, Redirect} from "react-router"

export default function PrivateRoute(props) {
    const {
        component: Component,
        ...rest
    } =props


    return (
        <Route {...rest} render ={(renderProps) =>{

            if(localStorage.getItem("token")){
                return <Component {...renderProps} />
            }else {
               return  <Redirect to="/login"/>
            }

        }}/>
    )
}