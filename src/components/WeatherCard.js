import React from 'react';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    const date = new Date(dt);
    return (
        <>
            <div className="card">
                <img className="card-img-top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{main}</h5>
                    <p className="card-text">
                        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                    </p>
                    <p>Min: {temp_min}</p>
                    <p>Max: {temp_max}</p>
                </div>
            </div>
        </>
    );
};

export default WeatherCard;
