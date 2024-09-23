import React, { useState, useEffect } from 'react';
import { UilSun, UilTemperature, UilTear } from "@iconscout/react-unicons";

// Sidebar imports
import { UilEstate, UilBolt, UilImageShield } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/orang1.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    link: "/dashboard"
  },
  {
    icon: UilBolt,
    heading: "Power Data",
    link: "/power-data"
  },
  {
    icon: UilImageShield,
    heading: "Non-Fungible Token",
    link: "/non-fungible-token"
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "I Nengah Marccel JBC",
    noti: "has update the program",
    time: "3 days ago",
  },
  {
    img: img1,
    name: "I Nengah Marccel JBC",
    noti: "has update the program",
    time: "4 days ago",
  },
  {
    img: img1,
    name: "I Nengah Marccel JBC",
    noti: "has update the program",
    time: "5 days ago",
  },
];

// Component for fetching and updating cards data
export const CardsDataComponent = () => {
  const [luxData, setLuxData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHumidityData] = useState([]);
  const [co2Data, setco2Data] = useState([]);
  const [soilMoistureData, setSoilMoistureData] = useState([]);
  const [timestamps, setTimestamps] = useState([]);

  const fetchData = () => {
    fetch('https://apippk.xsmartagrichain.com/data/latest')
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const lastTenData = data.slice(-10);
          
          // Update the state correctly as arrays
          setLuxData(lastTenData.map(item => item.lux));
          setTemperatureData(lastTenData.map(item => item.temperature));
          setHumidityData(lastTenData.map(item => item.humidity));
          setco2Data(lastTenData.map(item => item.co2));
          setSoilMoistureData(lastTenData.map(item => item.soil_moisture));
          setTimestamps(lastTenData.map(item => item.timestamp));
        } else {
          console.error("No data returned from API");
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();

    // Polling every 10 seconds (10000 milliseconds)
    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);

  // Cards Data
  const cardsData = [
    {
      title: "Lux",
      color: {
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue: 70,
      value: luxData[luxData.length - 1], // Data terakhir untuk Lux
      satuan: " lx",
      png: UilSun,
      series: [
        {
          name: "Lux",
          data: luxData, // 10 data terakhir untuk grafik
        },
      ],
      xaxis: timestamps, // 10 timestamps terakhir untuk grafik
    },
    {
      title: "Temperature",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 80,
      value: temperatureData[temperatureData.length - 1], // Data terakhir untuk Temperature
      satuan: " °C",
      png: UilTemperature,
      series: [
        {
          name: "Temperature",
          data: temperatureData, // 10 data terakhir untuk grafik
        },
      ],
      xaxis: timestamps, // 10 timestamps terakhir untuk grafik
    },
    {
      title: "Humidity",
      color: {
        backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: humidityData[humidityData.length - 1], // Data terakhir untuk Humidity
      satuan: " %",
      png: UilTear,
      series: [
        {
          name: "Humidity",
          data: humidityData, // 10 data terakhir untuk grafik
        },
      ],
      xaxis: timestamps, // 10 timestamps terakhir untuk grafik
    },
    {
      title: "CO2",
      color: {
        backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: co2Data[co2Data.length - 1], // Data terakhir untuk CO2
      satuan: " ppm",
      png: UilTear,
      series: [
        {
          name: "CO2",
          data: co2Data, // 10 data terakhir untuk grafik
        },
      ],
      xaxis: timestamps, // 10 timestamps terakhir untuk grafik
    },
    {
      title: "Soil Moisture",
      color: {
        backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 60,
      value: soilMoistureData[soilMoistureData.length - 1], // Data terakhir untuk Soil Moisture
      satuan: " %",
      png: UilTear,
      series: [
        {
          name: "Soil Moisture",
          data: soilMoistureData, // 10 data terakhir untuk grafik
        },
      ],
      xaxis: timestamps, // 10 timestamps terakhir untuk grafik
    },
  ];

  return { cardsData };
};