import React from "react";
import Project from "pages/Home/Components/Projects/components/project";

//Images
import CokiliRadionica from "assets/Cokili-Radionica-Laptop.png";
import WeatherForecast from "assets/Weather-Forecast-Laptop.png";
import ISSTracker from "assets/ISS-Tracker-Laptop.png";
const Index = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 my-20 md:my-40">
      <div className="flex flex-col items-center ">
        <h2 className="uppercase md:text-2xl font-medium">my projects</h2>
        <hr className="w-1/2 h-1 bg-black bg-gradient-to-r from-red-600 via-red-900 to-red-600" />
      </div>
      <Project
        image={CokiliRadionica}
        title={"Cokili Radionica"}
        text={
          "Online Eccomerce store with working cart functionality and ordering. Data  management with sanity studio and  email messages using email.js."
        }
        languages={["Next", "HTML", "CSS", "JavaScript"]}
        link={"https://cokili-radionica.com/"}
        code={"https://github.com/cCoKeXx/Cokili-Radionica-NEXT"}
      />
      <Project
        image={WeatherForecast}
        title={"Weather Forecast"}
        text={
          "Weather Forecast app built using OpenWeather API inside React. Working search form for fetching city location to accuratly display weekly and daily forecast in 3 hour increments."
        }
        languages={["React", "HTML", "CSS", "JavaScript"]}
        link={"https://stefans-weather-forecast.netlify.app/"}
        code={"https://github.com/cCoKeXx/Weather-Forecast"}
      />
      <Project
        image={ISSTracker}
        title={"International Space Station Tracker"}
        text={
          "Accurate location of the International Space Station that is being updated every five seconds and that is also displayed on a map."
        }
        languages={["React", "HTML", "CSS", "JavaScript"]}
        link={"https://stefans-iss-tracker.netlify.app/"}
        code={"https://github.com/cCoKeXx/iss-tracker"}
      />
    </div>
  );
};

export default Index;
