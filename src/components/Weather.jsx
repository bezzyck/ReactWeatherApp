import React from "react";

function Weather(props) {

    return (
        <div className="output">
            {
                props.city &&
                props.country &&
                <p>{props.city}, {props.country}</p>
            }

            {
                props.temperature &&
                <p> Temp: {props.temperature} °C</p>
            }
            {
                props.description &&
                <p>desc: {props.description}</p>
            }
            {
                props.error &&
                <p>{props.error}</p>
            }
        </div>
    )
}
export default Weather;