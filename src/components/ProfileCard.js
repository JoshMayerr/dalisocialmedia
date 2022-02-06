import { ArrowRightIcon } from "@heroicons/react/outline";

export default function ProfileCard({ person, setSpotlight }) {
  console.log(person);
  return (
    <a
      key={person.email}
      className="relative rounded-lg border border-gray-300 bg-white px-4 py-5 shadow-sm flex justify-between items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
      onClick={() => setSpotlight(person)}
    >
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={person.picture} alt="" />
        </div>
        <div className="flex-1 min-w-0">
          <a href="#" className="focus:outline-none">
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500 truncate">{person.role}</p>
          </a>
        </div>
      </div>
      <div className="w-4 h-4 text-gray-400">
        <ArrowRightIcon />
      </div>
    </a>
  );
}
