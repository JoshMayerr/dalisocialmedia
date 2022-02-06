import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/solid";
import { useState } from "react";

export default function CommentInput({ setComments, comments }) {
  const [input, setInput] = useState("");
  //   console.log(comments);
  return (
    <Disclosure>
      <Disclosure.Button>
        <div className="flex-shrink-0">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Leave a Comment
            <span className="w-4 h-4 ml-1">
              <PlusIcon />
            </span>
          </button>
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
          <div className="">
            <div className="mt-8">
              <textarea
                rows={4}
                name="comment"
                id="comment"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm bg-gray-50 p-2 border-gray-400 rounded-md"
                onChange={(e) => setInput(e.target.value)}
                placeholder="My comment is..."
              />
            </div>
            <button
              onClick={() => setComments(comments.concat(input))}
              className="text-right mt-4 px-5 py-1 rounded-lg text-md text-indigo-500 border-indigo-500 border"
            >
              Post
            </button>
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
