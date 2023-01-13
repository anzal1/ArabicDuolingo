import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3BottomLeftIcon, BellIcon } from "@heroicons/react/24/outline";
import { navigation } from "../constants/constants";
import { loggedIn } from "../constants/constants";
const userNavigation = [
  {
    name: `${loggedIn ? "Your Profile" : "Login to view"}`,
    href: `${loggedIn ? "/profile" : "/login"}`,
  },
  { name: "Settings", href: "#" },
  {
    name: `${loggedIn ? "My skills" : ""}`,
    href: `${loggedIn ? "/skills" : "#"}`,
  },
  { name: "Sign out", href: "#" },
];

const Header = (props: any) => {
  return (
    <>
      <div className="sticky top-0 z-30 flex h-16 flex-shrink-0 bg-gray-900 shadow">
        <button
          type="button"
          className="px-4 text-gray-500 focus:outline-none md:hidden"
          onClick={props.onClick}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="hidden lg:space-x-10 space-x-6 md:ml-8 md:flex items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-medium text-white hover:text-gray-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex justify-between px-4 ml-auto">
          <div className="flex items-center">
            <button
              type="button"
              className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={`${
                            active ? "bg-gray-100" : ""
                          } block px-4 py-2 text-sm text-gray-700`}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
