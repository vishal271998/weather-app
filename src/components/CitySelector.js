// components/CitySelector.js

import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';
import {API_KEY, API_BASE_URL} from '../apis/config';
import WeatherCard from "./WeatherCard";

const CitySelector = props => {
    const [city, setCity] = useState('');
    const [results, setResults] = useState([]);
    const [data, noData] = useState([]);


    const onSearch = () => {
        fetch(`${ API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
            .then((response) => response.json())
            // .then((result) => console.log(result.list))
            .then((result) =>
                    setResults(result.list)
            )
        console.log(results);
    };

    const enterPressed = (event) => {
        var code = event.keyCode || event.which;
        if(code === 13) {
            onSearch();
        }
    }

    return (
        <>
            <Row>
                <Col>
                    <h1>Search your city</h1>
                </Col>
            </Row>

            <Row>
                {/* xs={4} takes the one third  of the page*/}
                <Col xs={4} className="text-center">
                    <FormControl placeholder="Enter city" onChange={(event) => setCity(event.target.value)} value={city} onKeyPress={ enterPressed.bind(this) }/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={ onSearch }>Check Weather</Button>
                </Col>
            </Row>

            <div className="row">
                {!results  ?
                    <h3>City Not Found</h3>  : results.map(({dt, main, weather}) => (

                    <Col md="auto" key={dt}>
                        <WeatherCard
                            temp_max={main.temp_max}
                            temp_min={main.temp_min}
                            dt={dt * 1000}
                            main={weather[0].main}
                            icon={weather[0].icon}
                        />
                    </Col>
                ))}

            </div>

        </>
    );

};



export default CitySelector;
