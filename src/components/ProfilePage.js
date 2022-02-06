import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { Comment } from "postcss";
import CommentInput from "./CommentInput";
import { useState } from "react";
import CommentBubble from "./CommentBubble";
import { v4 as uuidv4 } from "uuid";

export default function ProfilePage({ person, setSpotlight }) {
  const [comments, setComments] = useState([
    "Example Comment!!",
    "Note: the comments do not keep state since (what I think are solutions) by adding a 'comments' field to every member or  using a DB seemed a bit out of the scope of the challenge",
    "Nice work.",
  ]);
  return (
    <div className="bg-white">
      <button
        className="mb-16 mt-6 flex items-center text-gray-600"
        onClick={() => setSpotlight(null)}
      >
        <span className="w-4 h-4 mr-2">
          <ArrowLeftIcon />
        </span>{" "}
        Back
      </button>
      <div className="pb-16 bg-indigo-600 rounded-lg lg:pb-0 lg:z-10 lg:relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="relative lg:-my-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
            />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
              <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                <img
                  className="object-cover lg:h-full lg:w-full"
                  src={person.picture}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-16 lg:max-w-none">
              <blockquote>
                <div>
                  <h1 className="text-4xl font-medium text-white">
                    {person.name} {person.year}
                  </h1>
                  <p className="mt-6 text-2xl font-medium text-white">
                    {person.quote}
                  </p>
                </div>
                <footer className="mt-6">
                  <p className="text-base font-medium text-white">
                    {person.role}
                  </p>
                  <p className="text-base font-medium text-indigo-100">
                    {person.home}
                  </p>
                </footer>
              </blockquote>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button>
                      <div className="flex items-center text-base font-medium text-white mt-6">
                        <span>More Info</span>
                        <div className="h-5 w-5">
                          <ChevronRightIcon
                            className={`${open ? "transform rotate-90" : ""}`}
                          />
                        </div>
                      </div>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel>
                        <ul className="mt-4 text-base font-medium text-white grid grid-cols-2 gap-4">
                          <li>
                            Major:{" "}
                            <p className="text-base font-normal text-indigo-100">
                              {person.major}
                            </p>
                          </li>
                          <li>
                            Birthday:{" "}
                            <p className="text-base font-normal text-indigo-100">
                              {person.birthday}
                            </p>
                          </li>
                          <li>
                            Favorite Shoe:{" "}
                            <p className="text-base font-normal text-indigo-100">
                              {person.favoriteShoe}
                            </p>
                          </li>
                          <li>
                            Favorite Artist:{" "}
                            <p className="text-base font-normal text-indigo-100">
                              {person.favoriteArtist}
                            </p>
                          </li>
                          <li>
                            Favorite Color:{" "}
                            <p className="text-base font-normal text-indigo-100">
                              {person.favoriteColor}
                            </p>
                          </li>
                          <li>
                            Phone Type:{" "}
                            <p className="text-base font-normal text-indigo-100">
                              {person.phoneType}
                            </p>
                          </li>
                        </ul>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <label className="font-medium">Comments:</label>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mt-4">
          {comments.map((c) => (
            <CommentBubble comment={c} key={uuidv4()} />
          ))}
        </div>
      </div>
      <div className=" mt-12 ">
        <CommentInput setComments={setComments} comments={comments} />
      </div>
    </div>
  );
}
