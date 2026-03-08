import Header from './components/Header';
import Filters from './components/Filters';
import Results from './components/Results';
import Details from './components/Details';
import PageLayout from './components/layout/PageLayout';

function App() {
  return (
    // the new layout:
    <PageLayout header={<Header tagline="Find the right resources, right away" />}>
    {/*each of these children inherit PageLayout.jsx's tailwind classes
    "mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 py-6 md:grid-cols-3 md:gap-6"*/}
      <aside className="md:col-span-3 lg:col-span-1">
        <Filters />
      </aside>
      <section className="md:col-span-2 lg:col-span-1">
        <Results />
      </section>
      <aside className="md:col-span-1 lg:col-span-1">
        <Details />
      </aside>
    </PageLayout>
    // the old layout
    // <PageLayout
    //   header={<Header tagline="Find the right resources, right away" />}
    //   left={<Filters />}
    //   middle={<Results />}
    //   right={<Details />}
    // />

  );
}

export default App;
