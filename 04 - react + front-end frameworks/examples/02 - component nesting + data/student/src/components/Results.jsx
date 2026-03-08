// we use this to make Results.jsx more maintainable
import ResultsItem from './ResultsItem';
// the array of objects we pass as props into ResultsItem.jsx
import { resources } from '../data/resources';

export default function Results() {
  return (
    <section className="h-full mb-4">
      <div className="h-full rounded border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <strong className="text-sm text-gray-900">Results</strong>
          <span className="rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-semibold text-gray-700">
            {/*the number of search results returned*/}
            {resources.length}
          </span>
        </div>

        <ul className="divide-y divide-gray-200">
          {/*throw the resources stuff into new arrays for each resource object that exists*/}
          {resources.map((r) => (
            <ResultsItem
              key={r.id}
              title={r.title}
              category={r.category}
              summary={r.summary}
              location={r.location}
            >
              {/* children: optional badge content */}
              {/* this stuff is considered "children" as it's rendered inside the component*/}
              {r.openNow && (
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                  Open now
                </span>
              )}
              {r.solBadguy && (
                <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-800">
                  Sol Badguy 
                </span>
              )}
              {r.solBadguy ? r.isVirtual : !r.isVirtual }
            </ResultsItem>
          ))}
        </ul>
      </div>
    </section>
  );
}