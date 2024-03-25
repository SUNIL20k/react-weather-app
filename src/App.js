// import React, { useEffect, useRef, useState } from "react";
// import cloud from "./images/cloud.png";
// import rain from "./images/rain.png";
// import sun from "./images/sun.png";
// import cloudandsun from "./images/cloudy-day.png";
// import strom from "./images/dark-and-stormy.png";
// import snow from "./images/snow.png";
// import brokencloud from "./images/brokenclouds.png";
// import fog from "./images/fog (2).png";

// function App () {

//   const [weatherData, setWeatherData] = useState(null);
//   const [color, setcolor] = useState();
//   const [icon, seticon] = useState();
//   const locationRef = useRef(null);

//   const Search = async (e) => {
//     if (e) {
//       e.preventDefault(); 
//     }
//     const place = locationRef.current.value;
//     const Api = `64f190a247d361b5bc335e34a97eb6d5`;
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=Metric&appid=${Api}`;
//     try {
//       const data = await fetch(url);
//       const response = await data.json();
//       setWeatherData(response);
//       console.log(response);
//       locationRef.current.value = "";

//       if (
//         response.weather[0].icon === "01d" ||
//         response.weather[0].icon === "01n"
//       ) {
//         setcolor("linear-gradient(rgb(255, 238, 0), rgb(255, 187, 0))");
//         seticon(sun);
//       } else if (
//         response.weather[0].icon === "02d" ||
//         response.weather[0].icon === "02n"
//       ) {
//         setcolor("linear-gradient(rgb(56, 255, 16),rgb(29, 175, 0))");
//         seticon(cloudandsun);
//       } else if (
//         response.weather[0].icon === "09d" ||
//         response.weather[0].icon === "09n" ||
//         response.weather[0].icon === "10d" ||
//         response.weather[0].icon === "10n"
//       ) {
//         setcolor("linear-gradient(rgb(228, 228, 228),rgb(95, 95, 95))");
//         seticon(rain);
//       } else if (
//         response.weather[0].icon === "13d" ||
//         response.weather[0].icon === "13n"
//       ) {
//         setcolor("linear-gradient(rgb(255, 255, 255),rgb(163, 163, 163))");
//         seticon(snow);
//       } else if (
//         response.weather[0].icon === "11d" ||
//         response.weather[0].icon === "11n"
//       ) {
//         setcolor("linear-gradient(rgb(196, 0, 196),rgb(133, 0, 185))");
//         seticon(strom);
//       } else if (
//         response.weather[0].icon === "03d" ||
//         response.weather[0].icon === "03n"
//       ) {
//         setcolor("linear-gradient(rgb(255, 52, 86),rgb(255, 73, 104))");
//         seticon(cloud);
//       } else if (
//         response.weather[0].icon === "04d" ||
//         response.weather[0].icon === "04n"
//       ) {
//         setcolor("linear-gradient(rgb(255, 52, 86),rgb(255, 73, 104))");
//         seticon(brokencloud);
//       } else if (
//         response.weather[0].icon === "50d" ||
//         response.weather[0].icon === "50n"
//       ) {
//         setcolor("linear-gradient(rgb(228, 228, 228),rgb(95, 95, 95))");
//         seticon(fog);
//       } else {
//         setcolor("linear-gradient(rgb(228, 228, 228),rgb(124, 124, 124))");
//         seticon(sun);
//       }
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   };
//   useEffect(()=>{
//     Search()
//   })

//   const getCurrentTime = () => {
//     const now = new Date();
//     const options = {
//       hour: "numeric",
//       minute: "numeric",
//       hour12: true,
//     };
//     const timeString = now.toLocaleTimeString("en-US", options);
//     return timeString;
//   };
//   const Day = () => {
//     const now = new Date();
//     const options = {
//       day: "2-digit",
//     };
//     return now.toLocaleDateString("en-US", options);
//   };
//   const Weekday = () => {
//     const now = new Date();
//     const options = {
//       weekday: "short",
//     };
//     return now.toLocaleDateString("en-US", options);
//   };
//   const Month = () => {
//     const now = new Date();
//     const options = {
//       month: "long", 
//     };
//     return now.toLocaleDateString("en-US", options);
//   };

//   return (
//     <div className="App h-screen bg-red flex justify-center items-center ">
//       <div
//         className="weather-box px-10 py-8 bg-red-200 text-center"
//         style={{ background: `${color}` }}
//       >
//         <div className="w-full flex justify-between items-center my-5">
//           <div className="w-32">
//             <h2 className="text-3xl font-medium ">
//               {getCurrentTime()}
//             </h2>
//             <div className="date flex pl-5">
//               <p>{Weekday()},</p>
//               <p>{Day()}</p>
//               <p>{Month()}</p>
//             </div>
//           </div>
//          <div>

//           <input
//             className="px-5 py-2 text-1xl "
//             type="text"
//             placeholder="Enter Place"
//             ref={locationRef}
//             ></input>
//           <button
//             onClick={(e)=>Search(e)}
//             className="px-5 py-2 bg-black text-white "
//             >
//             Search
//           </button>
//             </div>
//         </div>

//         {weatherData && weatherData.cod !== "400" ? (
//           <>
//             <div className="w-full flex justify-between px-5">
//               <div>
//                 <img className="icons" src={icon}></img>
//                 <h4 className="font-medium text-2xl mt-5">
//                   {weatherData.weather[0].description}
//                 </h4>
//               </div>
//               <div className=" place-info p-8">
//                 <h1 className="text-5xl font-medium py-5">
//                   {weatherData.name}
//                 </h1>
//                 <h1 className=" text-3xl font-medium">
//                   {weatherData.main.temp}°C
//                 </h1>
//               </div>
//             </div>

//             <div className="flex justify-between mt-10">
//               <div className="temp flex-wrap bg-white w-36 mx-1 h-36 py-5 font-medium">
//                 <h3>wind speed</h3>
//                 <h3>{weatherData.wind.speed} km/s</h3>
//               </div>
//               <div className="temp flex-wrap bg-white w-36 mx-1 h-36 py-5 font-medium">
//                 <h3>Feel_like</h3>
//                 <h3>{weatherData.main.feels_like} °C</h3>
//               </div>
//               <div className="temp flex-wrap bg-white w-36 mx-1 h-36 py-5 font-medium">
//                 <h3>Pressure</h3>
//                 <h3>{weatherData.main.pressure} p</h3>
//               </div>
//               <div className="temp flex-wrap bg-white w-36 mx-1 h-36 py-5 font-medium">
//                 <h3>humidity</h3>
//                 <h3>{weatherData.main.humidity} %</h3>
//               </div>
//             </div>
//           </>
//         ) : (
//           <p>No weather data found for the provided location.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useRef, useState } from "react";
import cloud from "./images/cloud.png";
import rain from "./images/rain.png";
import sun from "./images/sun.png";
import cloudandsun from "./images/cloudy-day.png";
import strom from "./images/dark-and-stormy.png";
import snow from "./images/snow.png";
import brokencloud from "./images/brokenclouds.png";
import fog from "./images/fog (2).png";

function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [color, setColor] = useState();
  const [icon, setIcon] = useState();
  const locationRef = useRef(null);
  const [place, setPlace] = useState("");

  const search = async (e) => {
    if (e) {
      e.preventDefault();
    }
    const Api = `64f190a247d361b5bc335e34a97eb6d5`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=Metric&appid=${Api}`;
    try {
      const data = await fetch(url);
      const response = await data.json();
      setWeatherData(response);
      console.log(response);
      locationRef.current.value = "";

      if (
        response.weather[0].icon === "01d" ||
        response.weather[0].icon === "01n"
      ) {
        setColor("linear-gradient(rgb(255, 238, 0), rgb(255, 187, 0))");
        setIcon(sun);
      } else if (
        response.weather[0].icon === "02d" ||
        response.weather[0].icon === "02n"
      ) {
        setColor("linear-gradient(rgb(56, 255, 16),rgb(29, 175, 0))");
        setIcon(cloudandsun);
      } else if (
        response.weather[0].icon === "09d" ||
        response.weather[0].icon === "09n" ||
        response.weather[0].icon === "10d" ||
        response.weather[0].icon === "10n"
      ) {
        setColor("linear-gradient(rgb(228, 228, 228),rgb(95, 95, 95))");
        setIcon(rain);
      } else if (
        response.weather[0].icon === "13d" ||
        response.weather[0].icon === "13n"
      ) {
        setColor("linear-gradient(rgb(255, 255, 255),rgb(163, 163, 163))");
        setIcon(snow);
      } else if (
        response.weather[0].icon === "11d" ||
        response.weather[0].icon === "11n"
      ) {
        setColor("linear-gradient(rgb(196, 0, 196),rgb(133, 0, 185))");
        setIcon(strom);
      } else if (
        response.weather[0].icon === "03d" ||
        response.weather[0].icon === "03n"
      ) {
        setColor("linear-gradient(rgb(255, 52, 86),rgb(255, 73, 104))");
        setIcon(cloud);
      } else if (
        response.weather[0].icon === "04d" ||
        response.weather[0].icon === "04n"
      ) {
        setColor("linear-gradient(rgb(255, 52, 86),rgb(255, 73, 104))");
        setIcon(brokencloud);
      } else if (
        response.weather[0].icon === "50d" ||
        response.weather[0].icon === "50n"
      ) {
        setColor("linear-gradient(rgb(228, 228, 228),rgb(95, 95, 95))");
        setIcon(fog);
      } else {
        setColor("linear-gradient(rgb(228, 228, 228),rgb(124, 124, 124))");
        setIcon(sun);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    search();
  }, []); 

  const getCurrentTime = () => {
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    const timeString = now.toLocaleTimeString("en-US", options);
    return timeString;
  };
  const Day = () => {
    const now = new Date();
    const options = {
      day: "2-digit",
    };
    return now.toLocaleDateString("en-US", options);
  };
  const Weekday = () => {
    const now = new Date();
    const options = {
      weekday: "short",
    };
    return now.toLocaleDateString("en-US", options);
  };
  const Month = () => {
    const now = new Date();
    const options = {
      month: "long",
    };
    return now.toLocaleDateString("en-US", options);
  };

  return (
    <div className="App h-screen flex justify-center items-center ">
      <div
        className="weather-box px-10 py-8 bg-red-200 text-center"
        style={{ background: `${color}`}}
      >
        <div className="top w-full flex justify-between items-center my-5">
          <div className="time w-32">
            <div className="clock">
              <h2 className="text-3xl font-medium ">
                {getCurrentTime()}
              </h2>
            </div>
            
            <div className="date flex pl-5">
              <p>{Weekday()},</p>
              <p>{Day()}</p>
              <p>{Month()}</p>
            </div>
          </div>
          <div className="input-field">
            <input
              className="px-5 py-2 text-1xl "
              type="text"
              placeholder="Enter Place"
              ref={locationRef}
              value={place}
              onChange={(e) => setPlace(e.target.value)} 
            ></input>
            <button
              onClick={(e) => search(e)}
              className="px-5 py-2 bg-black text-white "
            >
              Search
            </button>
          </div>
        </div>

        {weatherData && weatherData.cod !== "400" ? (
          <>
            <div className="body w-full flex justify-between px-5">
              <div className="icon-box">
                <img className="icons" src={icon}></img>
                <h4 className="d-none font-medium text-2xl mt-5">
                  {weatherData.weather[0].description}
                </h4>
              </div>
              <div className="place place-info p-8">
                <div>
                  <h1 className="text-5xl font-medium py-5">
                    {weatherData.name}
                  </h1>
                  <h1 className="tempe text-3xl font-medium mb-2">
                    {weatherData.main.temp}°C
                  </h1>
                </div>
                <div className="vertical-line"></div>
                <h4 className="d-block font-medium text-2xl mt-5">
                  {weatherData.weather[0].description}
                  </h4>
              </div>     
            </div>

             <div className="m-box flex justify-between mt-10">
               <div className="temp flex-wrap bg-white w-36 mx-1 h-36 py-5 font-medium">
                 <h2>wind speed</h2>
                 <h3>{weatherData.wind.speed} km/s</h3>
               </div>
               <div className="temp flex-wrap bg-white w-36 mx-1 h-36 py-5 font-medium">
                 <h2>Feel_like</h2>
                 <h3>{weatherData.main.feels_like} °C</h3>
               </div>
               <div className="temp flex-wrap bg-white w-36 mx-1 h-36 py-5 font-medium">
                 <h2>Pressure</h2>
                 <h3>{weatherData.main.pressure} p</h3>
               </div>
               <div className="temp flex-wrap bg-white w-36 mx-1 h-36 py-5 font-medium">
                 <h2>humidity</h2>
                 <h3>{weatherData.main.humidity} %</h3>
               </div>
             </div>
           </>
        ) : (
          <p className="empty">No weather data found for the provided location.</p>
        )}
      </div>
    </div>
  );
};

export default App;