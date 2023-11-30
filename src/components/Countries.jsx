import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import { useEffect, useState } from "react";
import CountryList from "./CountryList";

const Countries = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountryName(e.target.countryName.value.toLowerCase());
  };

  const handleChangeRegion = (e) => {
    setRegion(e.target.value);
  };

  const countriesByName = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(countryName)
  );

  const countriesByRegion = countriesByName.filter((country) =>
    country.region.includes(region)
  );

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => setAllCountries(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="p-4 max-w-[1100px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid gap-8 md:flex md:justify-between mb-4"
      >
        <div className="bg-white flex gap-2 p-3 rounded-md shadow-md shadow-black/5 dark:bg-darkBlue dark:text-white transition-colors md:w-[340px]">
          <button type="submit">
            <IconSearch />
          </button>
          <input
            placeholder="Search for a country..."
            className="flex-1 outline-none text-lg bg-transparent"
            type="text"
            name="countryName"
          />
        </div>
        <select
          onChange={handleChangeRegion}
          className="outline-none shadow-md shadow-black/5 p-3 rounded-md justify-self-start dark:bg-darkBlue dark:text-white transition-colors"
        >
          <option value="">All Continents</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </form>

      <span className="dark:text-white text-lg font-bold">
        {countriesByRegion.length} countries
      </span>

      <CountryList countries={countriesByRegion} />
      {countriesByRegion.length === 0 && (
        <span className="text-center block font-bold">No countries...</span>
      )}
    </section>
  );
};
export default Countries;
