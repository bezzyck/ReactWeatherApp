import React from "react";

function Form(props) {

    return (
        <div className="form">
            <form onSubmit={props.getWeather}>
                <input type="text" placeholder="country" name="country"/>
                <input type="text" placeholder="city" name="city"/>
                <button className="btn">Push</button>
            </form>
        </div>
    )
}
export default Form;