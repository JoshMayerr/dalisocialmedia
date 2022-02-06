import { useState, useEffect } from "react";
import { members } from "../data.js";
import ProfileCard from "./ProfileCard.js";
import { v4 as uuidv4 } from "uuid";
import ProfilePage from "./ProfilePage.js";
import Title from "./Title.js";

// import {
//   BookmarkAltIcon,
//   BookOpenIcon,
//   RssIcon,
//   ViewListIcon,
// } from "@heroicons/react/outline";

export default function Body() {
  const [people, setPeople] = useState(members);
  console.log(people[0].name);
  const [filter, setFilter] = useState(null);
  const [spotlight, setSpotlight] = useState(null);
  console.log(spotlight);

  useEffect(() => {
    console.log(filter, "filter");
    if (filter) {
      setPeople(
        people.filter(
          (p) => p.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        )
      );
      console.log(people);
    } else {
      setPeople(members);
    }
  }, [filter]);

  return (
    <div className="bg-white">
      <main className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mt-20">
          <Title />
          {spotlight ? (
            <ProfilePage person={spotlight} setSpotlight={setSpotlight} />
          ) : (
            <div>
              <div className="max-w-5xl mx-auto py-8 sm:py-12">
                <div className=" flex rounded-md shadow-sm">
                  <div className="relative flex items-stretch flex-grow focus-within:z-10">
                    <input
                      type="text"
                      name="filter"
                      id="filter"
                      className="focus:ring-indigo-500 sm:text-md focus:border-indigo-500 block w-full tracking-wider py-3 px-4 rounded-lg border  border-gray-300 placeholder-gray-500"
                      placeholder="Search to Filter..."
                      onKeyUp={(e) => setFilter(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {people.map((person) => (
                  <ProfileCard
                    person={person}
                    key={person.name}
                    setSpotlight={setSpotlight}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
