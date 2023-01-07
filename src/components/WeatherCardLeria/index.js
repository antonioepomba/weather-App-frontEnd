import React, { useEffect, useState } from "react";
import daysOfWeek from "../../utility/daysOfWeek";
import convertTemp from "../../utility/convertTemp";
import {url} from "../../utility/url"
import axios from "axios";

const WeatherCardLeiria = () =>{
  const[infoList,setInfoList] = useState()

  const fetchWeather = () =>{
 try {
  axios
  .get(`${url('Leiria')}`)
  .then(function (response) {
     setInfoList(response.data)
     
  })
  
 } catch (error) {
  console.log(error)
 }
  }

  useEffect(() => {
    fetchWeather()
  },[]);

    if (infoList?.city) {
      const cc = infoList;
      console.log('Data',infoList)
      return (
        <>
          <div className="card  w-100">
            <div className="card-body overflow-scroll-auto">
              <div className="container">
                <div className="row">
                  <div className="col-9">
                    <div><span className="highlight">{daysOfWeek(new Date())}</span></div>
                    <h4>
                      <span className="highlight">{cc.city.name}</span>
                    </h4>
                    <h6 className="highlight">{cc.city.name}</h6>
                    <ul>
                      <li>
                        <span className="highlight">
                          {cc.list[0].weather[0].description}
                        </span>
                      </li>
                    </ul>
                  </div>   
                </div>
                <div className="row">
                  <div className="col-6">
                    <div
                      className={`weather-icon ${cc.list[0].weather[0].description.replace(
                        " ",
                        ""
                      )}`}
                    />
                  </div>
                  <div className="temp col-6">
                    <h1>
                      <span className="highlight">
                        {/*convertTemp(cc.list[0].temp.max,/*this.props.celsius*/}
                      </span>
                    </h1>
                    <span className="highlight">
                      {`${convertTemp(
                        cc.list[0].temp.max,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                    <span> / </span>
                    <span className="highlight-secondary">
                      {`${convertTemp(
                       cc.list[0].temp.min,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                  </div>
                  
                    <h5 className="text">weekly forecast</h5>

                    <div className="row">
                      <div class="col-sm">
                      <span className="highlight">
                      {`${convertTemp(
                        cc.list[1].temp.max,
                       /*/*this.props.celsius*/
                      )}`}
                    </span>
                    <span> / </span>
                    <span className="highlight-secondary">
                      {`${convertTemp(
                       cc.list[1].temp.min,
                       /* this.props.celsius*/
                      )}`}
                    </span>
                        <div
                          className={`weather-icon ${cc.list[1].weather[0].description.replace(
                            " ",
                            ""
                          )}`}
                        />
                          <span className="highlight">
                          {cc.list[1].weather[0].description}
                        </span>
                      </div>

                      <div class="col-sm">
                      <span className="highlight">
                      {`${convertTemp(
                        cc.list[2].temp.max,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                    <span> / </span>
                    <span className="highlight-secondary">
                      {`${convertTemp(
                       cc.list[2].temp.min,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                        <div
                          className={`weather-icon ${cc.list[2].weather[0].description.replace(
                            " ",
                            ""
                          )}`}
                        />
                        <span className="highlight">
                          {cc.list[2].weather[0].description}
                        </span>
                      </div>
                      <div class="col-sm">
                      <span className="highlight">
                      {`${convertTemp(
                        cc.list[3].temp.max,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                    <span> / </span>
                    <span className="highlight-secondary">
                      {`${convertTemp(
                       cc.list[3].temp.min,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                        <div
                          className={`weather-icon ${cc.list[3].weather[0].description.replace(
                            " ",
                            ""
                          )}`}
                        />
                        <span className="highlight">
                          {cc.list[3].weather[0].description}
                        </span>
                      </div>
                      <div class="col-sm">
                      <span className="highlight">
                      {`${convertTemp(
                        cc.list[4].temp.max,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                    <span> / </span>
                    <span className="highlight-secondary">
                      {`${convertTemp(
                       cc.list[4].temp.min,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                        <div
                          className={`weather-icon ${cc.list[4].weather[0].description.replace(
                            " ",
                            ""
                          )}`}
                        />
                        <span className="highlight">
                          {cc.list[4].weather[0].description}
                        </span>
                      </div>
                      <div class="col-sm">
                      <span className="highlight">
                      {`${convertTemp(
                        cc.list[5].temp.max,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                    <span> / </span>
                    <span className="highlight-secondary">
                      {`${convertTemp(
                       cc.list[5].temp.min,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                        <div
                          className={`weather-icon ${cc.list[5].weather[0].description.replace(
                            " ",
                            ""
                          )}`}
                        />
                        <span className="highlight">
                          {cc.list[5].weather[0].description}
                        </span>
                      </div>
                      <div class="col-sm">
                      <span className="highlight">
                      {`${convertTemp(
                        cc.list[6].temp.max,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                    <span> / </span>
                    <span className="highlight-secondary">
                      {`${convertTemp(
                       cc.list[6].temp.min,
                       /*this.props.celsius*/
                      )}`}
                    </span>
                        <div
                          className={`weather-icon ${cc.list[6].weather[0].description.replace(
                            " ",
                            ""
                          )}`}
                        />
                        <span className="highlight">
                          {cc.list[6].weather[0].description}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <br/>
        </>
      );
    } else {
      return <div />;
    }
  }


export default WeatherCardLeiria;
