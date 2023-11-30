const CountryList = ({ countries }) => {
  return (
    <section className="grid py-10 gap-8 grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))]">
      {countries.map((country) => (
        <article
          className="bg-white rounded-lg overflow-hidden shadow-lg shadow-black/10 dark:bg-darkBlue dark:text-white transition-colors"
          key={country.name.common}
        >
          <header className="shadow-md shadow-black/10 h-[160px]">
            <img
              className="h-full w-full object-cover"
              src={country.flags.svg}
              alt=""
            />
          </header>
          <section className="p-6">
            <h5 className="font-bold text-xl mb-4 line-clamp-1">
              {country.name.common}
            </h5>
            <ul>
              <li>
                <span className="font-semibold">Population:</span>{" "}
                {country.population}
              </li>
              <li>
                <span className="font-semibold">Region:</span> {country.region}
              </li>
              <li>
                <span className="font-semibold">Capital:</span>{" "}
                {country.capital ? country.capital.join(" , ") : "No capital"}
              </li>
            </ul>
          </section>
        </article>
      ))}
    </section>
  );
};
export default CountryList;
