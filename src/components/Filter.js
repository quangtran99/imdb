import React from 'react'
import InputRange from 'react-input-range';
import Dropdown from 'react-bootstrap/Dropdown'


export default function Filter({
    sortByRate,
    sortByPopular,
    filterByYear,
    filterByRate,
    year,
    rating,
}) {

    return (
        <div >
            <div style={{ color: "white", width: "100%"}}>
                <p>Year</p>
                <InputRange
                    maxValue={2020}
                    minValue={1980}
                    value={year}
                    onChange={(value) => filterByYear(value)}
                />
            </div>
            <div style={{ color: "white", width: "100%", marginTop: "40px" }}>

                <p>Rating</p>
                <InputRange
                    maxValue={10}
                    minValue={0}
                    value={rating}
                    onChange={(value) => filterByRate(value)}
                />
            </div>
            <Dropdown style= {{marginTop: "40px" }}>
                <Dropdown.Toggle variant="warning" id="dropdown-basic">
  </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"
                        onClick={() => sortByRate("asc")}
                        style={{ width: "100%" }}
                    >
                        Rating (low -> high)
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2"
                        onClick={() => sortByRate("desc")}
                        style={{ width: "100%" }}
                    >
                        Rating (high -> low)
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3"
                        onClick={() => sortByPopular("asc")}
                        style={{ width: "100%" }}
                    >
                        Popularity (low -> high)
                        </Dropdown.Item>
                    <Dropdown.Item href="#/action-4"
                        onClick={() => sortByPopular("desc")}
                        style={{ width: "100%" }}
                    >
                        Popularity (high -> low)
                        </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
