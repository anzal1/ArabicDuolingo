import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FolderIcon } from "@heroicons/react/24/outline";
import SidebarAccordion from "./accordion";

const Dropdown = () => {
  return (
    <Menu
      as="div"
      className="rounded-md mt-5 text-gray-300 hover:bg-gray-700 hover:text-whiterelative text-left"
    >
      <div>
        <Menu.Button className="inline-flex w-full items-center rounded-md px-2 py-2 text-sm font-medium text-white shadow-sm">
          <FolderIcon className="w-6 h-6 mr-2" />
          My Skills
          <ChevronDownIcon
            className="-mr-1 ml-auto h-5 w-5"
            aria-hidden="true"
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
        <Menu.Items className=" right-0 z-10 mt-2 w-full origin-top focus:outline-none">
          <div className="bg-gray-900 rounded-md">
            <Menu.Item>
              <SidebarAccordion />
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
