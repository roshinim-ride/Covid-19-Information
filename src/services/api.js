import axios from "axios";

/* Mock data for India states */
const MOCK_INDIA_DATA = [
  { state: "Andhra Pradesh", confirmed: 2300000, recovered: 2250000, deaths: 15000 },
  { state: "Arunachal Pradesh", confirmed: 60000, recovered: 58000, deaths: 300 },
  { state: "Assam", confirmed: 750000, recovered: 730000, deaths: 6000 },
  { state: "Bihar", confirmed: 850000, recovered: 820000, deaths: 8000 },
  { state: "Chhattisgarh", confirmed: 1100000, recovered: 1050000, deaths: 12000 },
  { state: "Delhi", confirmed: 1900000, recovered: 1850000, deaths: 28000 },
  { state: "Goa", confirmed: 180000, recovered: 175000, deaths: 3500 },
  { state: "Gujarat", confirmed: 1200000, recovered: 1150000, deaths: 11000 },
  { state: "Haryana", confirmed: 850000, recovered: 820000, deaths: 10000 },
  { state: "Himachal Pradesh", confirmed: 260000, recovered: 250000, deaths: 4000 },
];

/* Mock data for countries */
const MOCK_COUNTRIES_DATA = [
  { country: "USA", cases: 104000000, recovered: 99000000, deaths: 1100000 },
  { country: "India", cases: 44000000, recovered: 42500000, deaths: 525000 },
  { country: "Brazil", cases: 34000000, recovered: 32500000, deaths: 680000 },
  { country: "France", cases: 32000000, recovered: 30500000, deaths: 160000 },
  { country: "United Kingdom", cases: 24000000, recovered: 22500000, deaths: 190000 },
  { country: "Russia", cases: 21000000, recovered: 19500000, deaths: 630000 },
  { country: "Germany", cases: 33000000, recovered: 31500000, deaths: 165000 },
  { country: "Italy", cases: 21000000, recovered: 19500000, deaths: 175000 },
  { country: "Spain", cases: 13000000, recovered: 12000000, deaths: 105000 },
  { country: "Japan", cases: 21000000, recovered: 19500000, deaths: 70000 },
];

/* Country data - using mock data */
export const fetchCountryData = () => {
  console.log("Using mock data for country COVID-19 statistics");
  return MOCK_COUNTRIES_DATA;
};

/* India state-wise COVID data */
export const fetchIndiaStateData = () => {
  // Using mock data due to CORS restrictions on covid19india.org
  console.log("Using mock data for India state COVID-19 statistics");
  return MOCK_INDIA_DATA;
};

/* Global COVID summary */
export const fetchGlobalData = async () => {
  try {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/all"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching global data:", error);
    return {
      confirmed: 700000000,
      deaths: 7000000,
      recovered: 680000000,
      updated: new Date().toISOString()
    };
  }
};
