"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import Area from "./components/AreaChart";
import SecBarChart from "./components/SecBarChart";
import SecLineChart from "./components/SecLineChart";
import ThirBarChart from "./components/ThirBarChart";
import FourBarChart from "./components/FourBarChart";



const page = () => {
  const [EndYear, setEndYear] = useState([]);
  const [Info, setInfo] = useState({});
  const [LiveliHood, setLiveliHood] = useState({});
  const [Relevance, setRelevance] = useState({});
  const [Country, setCountry] = useState({});
  const [Topic, setTopic] = useState({});
  const [Reigon, setReigon] = useState({});
  const [Startyear, setStartyear] = useState({});

  useEffect(() => {
    getData();
    EndYearHandler();
  }, []);

  let barChart = null;
  let lineChart = null;
  let areaChart = null;
  let secondbarChart = null;
  let secondlineChart = null;
  let ThirdbarChart = null;
 let fourbarChart = null;


  if (EndYear.length > 0) {
    barChart = <BarChart charData={Info}  />;
    lineChart = <LineChart lineData={LiveliHood} />;
    areaChart = <Area aData={Relevance} />;
    secondbarChart =<SecBarChart countryData={Country} />
    secondlineChart = <SecLineChart topicData={Topic} />;
    ThirdbarChart = <ThirBarChart  regionData={Reigon} />
    fourbarChart = <FourBarChart startyearData={Startyear} />
  }
 

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/show");
      setEndYear(...EndYear, data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const sampleRate = 50;
  const sampledData = EndYear.filter(
    (element, index) => index % sampleRate === 0
  );
// console.log(Country)
  const EndYearHandler = async () => {
    setInfo({
      labels: sampledData.map((data) => data.end_year),
      datasets: [
        {
          label: "Endyear Vs Intensity",
          data: sampledData.map((data) => data.intensity),
          backgroundColor: ["#00F3BB"],
          borderColor:["#fff"]
        },
      ],
    });
    setLiveliHood({
      labels: sampledData.map((data) => data.end_year),
      datasets: [
        {
          label: "Endyear Vs Likelihood",
          data: sampledData.map((data) => data.likelihood),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
    setRelevance({
      labels: sampledData.map((data) => data.end_year),
      datasets: [
        {
          fill: true,
          label: "Endyear Vs Relevance",
          data: sampledData.map((data) => data.relevance),
          borderColor: "purple",
          backgroundColor: "#AB7EFD",
        },
      ],
    });
    setCountry({
      labels: sampledData.map((data) => data.country),
      datasets: [
        {
          label: "Endyear Vs Country",
          data: sampledData.map((data) => data.end_year),
          backgroundColor: ["#39C17A"],
        },
      ],
    });
    setTopic({
      labels: sampledData.map((data) => data.topic),
      datasets: [
        {
          label: "Endyear Vs Topic",
          data: sampledData.map((data) => data.end_year),
          backgroundColor: ["Yellow"],
        },
      ],
    });
    setReigon({
      labels: sampledData.map((data) => data.region),
      datasets: [
        {
          label: "Endyear Vs Region",
          data: sampledData.map((data) => data.end_year),
          backgroundColor: ["purple"],
        },
      ],
    });
    setStartyear({
      labels: sampledData.map((data) => data.end_year),
      datasets: [
        {
          label: "",
          data: sampledData.map((data) => data.start_year),
          backgroundColor: ["#07B8D0"],
        },
      ],
    });
  };
  

  const TopicsHandler = () => {
    setInfo({
      labels: sampledData.map((data) => data.topic),
      datasets: [
        {
          label: "Topics Vs Intensity",
          data: sampledData.map((data) => data.intensity),
          backgroundColor: ["orange"],
        },
      ],
    });
    setLiveliHood({
      labels: sampledData.map((data) => data.topic),
      datasets: [
        {
          label: "Topics Vs Likelihood",
          data: sampledData.map((data) => data.likelihood),
          borderColor: "#EB9CB3",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
    setRelevance({
      labels: sampledData.map((data) => data.topic),
      datasets: [
        {
          fill: true,
          label: "Topics Vs Relevance",
          data: sampledData.map((data) => data.relevance),
          borderColor: "blue",
          backgroundColor: "#00E8CD",
        },
      ],
    });
    setStartyear({
      labels: sampledData.map((data) => data.topic),
      datasets: [
        {
          label: "Topics Vs Year",
          data: sampledData.map((data) => data.start_year),
          backgroundColor: ["#FF8131"],
        },
      ],
    });
  };
  const SectorHandler = () => {
    setInfo({
      labels: sampledData.map((data) => data.sector),
      datasets: [
        {
          label: "Sector Vs Intensity",
          data: sampledData.map((data) => data.intensity),
          backgroundColor: ["#E7D400"],
        },
      ],
    });
    setLiveliHood({
      labels: sampledData.map((data) => data.sector),
      datasets: [
        {
          label:"Sector Vs Likelihood",
          data: sampledData.map((data) => data.likelihood),
          borderColor: "#00D761",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
    setRelevance({
      labels: sampledData.map((data) => data.sector),
      datasets: [
        {
          fill: true,
          label: "Sector Vs Relevance",
          data: sampledData.map((data) => data.relevance),
          borderColor: "#2C9AFF",
          backgroundColor: "#84D0FF",
        },
      ],
    });
    setStartyear({
      labels: sampledData.map((data) => data.sector),
      datasets: [
        {
          label: "Sector Vs Year",
          data: sampledData.map((data) => data.start_year),
          backgroundColor: ["#FFC439"],
        },
      ],
    });
  };
  const RegionHandler = () => {
    setInfo({
      labels: sampledData.map((data) => data.region),
      datasets: [
        {
          label: "Region Vs Intensity",
          data: sampledData.map((data) => data.intensity),
          backgroundColor: ["#9180E8"],
        },
      ],
    });
    setLiveliHood({
      labels: sampledData.map((data) => data.region),
      datasets: [
        {
          label: "Region Vs Likelihood",
          data: sampledData.map((data) => data.likelihood),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
    setRelevance({
      labels: sampledData.map((data) => data.region),
      datasets: [
        {
          fill: true,
          label: "Region Vs Relevance",
          data: sampledData.map((data) => data.relevance),
          borderColor: "black",
          backgroundColor: "grey",
        },
      ],
    });
    setStartyear({
      labels: sampledData.map((data) => data.region),
      datasets: [
        {
          label: "Region Vs Year",
          data: sampledData.map((data) => data.start_year),
          backgroundColor: ["white"],
        },
      ],
    });
  };

  const PestHandler = () => {
    setInfo({
      labels: sampledData.map((data) => data.pestle),
      datasets: [
        {
          label: "Pestle Vs Intensity",
          data: sampledData.map((data) => data.intensity),
          backgroundColor: ["pink"],
        },
      ],
    });
    setLiveliHood({
      labels: sampledData.map((data) => data.pestle),
      datasets: [
        {
          label: "Pestle Vs Likelihood",
          data: sampledData.map((data) => data.likelihood),
          borderColor: "#29B26A",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
    setRelevance({
      labels: sampledData.map((data) => data.pestle),
      datasets: [
        {
          fill: true,
          label: "Pestle Vs Relevance",
          data: sampledData.map((data) => data.relevance),
          borderColor: "",
          backgroundColor: "yellow",
        },
      ],
    });
    setStartyear({
      labels: sampledData.map((data) => data.pestle),
      datasets: [
        {
          label: "Pestle Vs Year",
          data: sampledData.map((data) => data.start_year),
          backgroundColor: ["purple"],
        },
      ],
    });
  };
  const SourceHandler = () => {
    setInfo({
      labels: sampledData.map((data) => data.source),
      datasets: [
        {
          label: "Source Vs Intensity",
          data: sampledData.map((data) => data.intensity),
          backgroundColor: ["#29B26A"],
        },
      ],
    });
    setLiveliHood({
      labels: sampledData.map((data) => data.source),
      datasets: [
        {
          label: "Source Vs Likelihood",
          data: sampledData.map((data) => data.likelihood),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
    setRelevance({
      labels: sampledData.map((data) => data.source),
      datasets: [
        {
          fill: true,
          label: "Source Vs Relevance",
          data: sampledData.map((data) => data.relevance),
          borderColor: "yellow",
          backgroundColor: "orange",
        },
      ],
    });
    setStartyear({
      labels: sampledData.map((data) => data.source),
      datasets: [
        {
          label: "Source Vs Year",
          data: sampledData.map((data) => data.start_year),
          backgroundColor: ["rgb(220, 36, 73)"],
        },
      ],
    });
  };
  const CountryHandler = () => {
    setInfo({
      labels: sampledData.map((data) => data.country),
      datasets: [
        {
          label: "Country Vs Intensity",
          data: sampledData.map((data) => data.intensity),
          backgroundColor: ["#7065E9" , "silver"],
        },
      ],
    });
    setLiveliHood({
      labels: sampledData.map((data) => data.country),
      datasets: [
        {
          label: "Country Vs Likelihood",
          data: sampledData.map((data) => data.likelihood),
          borderColor: "#00CFE8",
          backgroundColor: "#00CFE8",
        },
      ],
    });
    setRelevance({
      labels: sampledData.map((data) => data.country),
      datasets: [
        {
          fill: true,
          label: "Country Vs Relevance",
          data: sampledData.map((data) => data.relevance),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
    setStartyear({
      labels: sampledData.map((data) => data.country),
      datasets: [
        {
          label: "Country Vs Year",
          data: sampledData.map((data) => data.start_year),
          backgroundColor: ["grey" , "black" ,  "white" , "#7065E9"],
        },
      ],
    });
  };

  return (
    <div>
      <div className="nav">
        <button onClick={EndYearHandler}>End Year</button>
        <button onClick={TopicsHandler}>Topics</button>
        <button onClick={SectorHandler}>Sector</button>
        <button onClick={RegionHandler}>Region</button>
        <button onClick={PestHandler}>PEST</button>
        <button onClick={SourceHandler}>Source</button>
        <button onClick={CountryHandler}>Counrty</button>
      </div>
      <div className="drawing">
        <div className="inside">
          {barChart}
          {lineChart}
          {areaChart}
          {fourbarChart}
          {secondbarChart}
          {secondlineChart}
          {ThirdbarChart}      
        </div>
      </div>
    </div>
  );
};


export default page;
