import React, { useEffect, useState, useCallback } from "react";
import "./effect.scss";
import SkySearchForm from "../../components/SkySearchForm";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '@mui/material';
import DataAccordianModel from "../../components/DataAccordianModel";

const Home = () => {
  const [tripType, setTripType] = useState("Round trip");

  const [counts, setCounts] = useState([1, 0, 0, 0]); // [adultCount, childCount, infantSeatCount, infantLapCount]

  useEffect(() => {
    setAdults(counts[0]);
    if (counts[1]) setChildrens(counts[1]);
    if (counts[2] + counts[3]) setInfants(counts[2] + counts[3]);
  }, [counts]);

  const [date, setDate] = useState(new Date(2025, 2, 10));
  const [returnDate, setReturnDate] = useState(new Date(2025, 2, 15));
  const [cabinClass, setCabinClass] = useState("economy");

  const [adults, setAdults] = useState("1");
  const [childrens, setChildrens] = useState("");
  const [infants, setInfants] = useState("");
  const [sortBy, setSortBy] = useState("best");
  const [limit, setLimit] = useState("10");
  const [carriersIds, setCarriersIds] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [market, setMarket] = useState("en-US");
  const [countryCode, setCountryCode] = useState("US");

  const [originLocation, setOriginLocation] = useState("New York");
  const [destinationLocation, setDestinationLocation] = useState("Berlin");
  const [loading, setLoading] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [data, setData] = useState([]);

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // const onSubmit = useCallback(async () => {
  const onSubmit = async () => {
    //  Origin Location searchAirport API Request

    setLoading(true);
    let dataList = [];
    const reponseOrigin = await fetch(
      `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${originLocation}&locale=en-US`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e79837316amshc59b29c39bbe969p195a09jsn62e98e9b7086",
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
        },
      }
    );

    const originDataes = await reponseOrigin.json();

    console.log("Origin Data");
    console.log(originDataes.data);

    const reponseDestination = await fetch(
      `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport?query=${destinationLocation}&locale=en-US`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "e79837316amshc59b29c39bbe969p195a09jsn62e98e9b7086",
          "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
        },
      }
    );

    const destinationDataes = await reponseDestination.json();

    console.log("Destination Data");
    console.log(destinationDataes.data);
    for (let idorigin = 0; idorigin < originDataes.data.length; idorigin++) {
      for (
        let iddestin = 0;
        iddestin < destinationDataes.data.length;
        iddestin++
      ) {
        const dataOrigin = originDataes.data[idorigin];
        const datadestin = destinationDataes.data[iddestin];
        //   }
        // }
        // originDataes.data.forEach(async (dataOrigin, idorigin)=> {
        //   destinationDataes.data.forEach(async (datadestin, iddestin)=> {

        const originSkyId = dataOrigin.skyId;
        const destinationSkyId = datadestin.skyId;
        const originEntityId = dataOrigin.entityId;
        const destinationEntityId = datadestin.entityId;

        //  searchFlightsComplete API Request
        let url =
          "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights";
        url += originSkyId ? `?originSkyId=${originSkyId}` : "";
        url += destinationSkyId ? `&destinationSkyId=${destinationSkyId}` : "";
        url += originEntityId ? `&originEntityId=${originEntityId}` : "";
        url += destinationEntityId
          ? `&destinationEntityId=${destinationEntityId}`
          : "";
        url += date ? `&date=${formatDate(date)}` : "";
        url += returnDate ? `&returnDate=${formatDate(returnDate)}` : "";
        url += cabinClass ? `&cabinClass=${cabinClass}` : "";
        url += adults ? `&adults=${adults}` : "";
        url += childrens ? `&childrens=${childrens}` : "";
        url += infants ? `&infants=${infants}` : "";
        url += sortBy ? `&sortBy=${sortBy}` : "";
        url += limit ? `&limit=${limit}` : "";
        url += carriersIds ? `&carriersIds=${carriersIds}` : "";
        url += currency ? `&currency=${currency}` : "";
        url += market ? `&market=${market}` : "";
        url += countryCode ? `&countryCode=${countryCode}` : "";
        console.log(url);

        const reponse = await fetch(url, {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "e79837316amshc59b29c39bbe969p195a09jsn62e98e9b7086",
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
          },
        });
        const jsonData = await reponse.json();
        console.log(jsonData.data.itineraries);
        dataList = dataList.concat(jsonData.data.itineraries);
      }
    }
    //   });
    // });
    // console.log(data);

    dataList = dataList.sort((a, b) => b.score - a.score);
    setData((d) => dataList);
    setLoading(false);
    console.log(dataList);

    for(let id=0; id<dataList.length; id++){
      const dataItem = dataList[id];
      console.log(dataItem.price.formatted);
    }

    
    // navigate('/search');
  };
  useEffect(() => {
    if (loading == false) {
      // console.log(data);
    }
  }, [data, loading]);
  // }, [adults, cabinClass, carriersIds, childrens, countryCode, currency, date, destinationEntityId, destinationLocation, destinationSkyId, infants, limit, market, originEntityId, originLocation, originSkyId, returnDate, sortBy]);

  // Create themes
  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const theme = prefersDarkMode ? darkTheme : lightTheme;
  const banner = prefersDarkMode ?
    "https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_dark_theme_4.svg" :
    "https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg";

  return (
    <div className="flex flex-col justify-center w-full items-center">
      <div className=" flex flex-col items-center">
        <img
          src={banner}
          alt="flight"
          className="xl:w-[1248px] w-screen"
        />
        <div className=" text-[56px] -translate-y-10 ">Flights</div>
      </div>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SkySearchForm
          tripType={tripType}
          setTripType={setTripType}
          cabinClass={cabinClass}
          setCabinClass={setCabinClass}
          counts={counts}
          setCounts={setCounts}
          originLocation={originLocation}
          setOriginLocation={setOriginLocation}
          destinationLocation={destinationLocation}
          setDestinationLocation={setDestinationLocation}
          date={date}
          setDate={setDate}
          returnDate={returnDate}
          setReturnDate={setReturnDate}
        />
        <button
          onClick={() => onSubmit()}
          className="bg-blue rounded-full h-[40px] w-[110px] text-white -translate-y-5 flex justify-center items-center gap-2"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
        </button>
        <DataAccordianModel tripType={tripType} />
      </ThemeProvider>

    </div>
  );
};

export default Home;
