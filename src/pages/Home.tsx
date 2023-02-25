import Search from '../components/Search';
import Countries from '../components/Countries';
import RegionFilter from '../components/RegionFilter';

const Home = () => {
  return (
    <main className="px-3 md:px-6 pt-28 py-8">
      <section className="w-full h-auto flex flex-col md:flex-row gap-y-3 md:justify-between md:items-center ">
        <Search />
        <RegionFilter />
      </section>
      <section className="countries-container py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <Countries />
      </section>
    </main>
  );
};
export default Home;
