import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let history = useNavigate();

  return (
    <Popover className="relative bg-[#4f46e5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* eslint-disable-next-line */}
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              {/* eslint-disable-next-line */}
              <a
                href="#"
                className="whitespace-nowrap text-base font-medium text-black hover:text-gray-900 mr-[20px]"
                onClick={() => history("/")}
              >
                Logout
              </a>
              <Avatar
                alt="Remy Sharp"
                src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-1.aac046b6.png"
              />
            </Popover.Button>
          </div>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {/* eslint-disable-next-line */}
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900"
              onClick={() => history("/")}
            >
              Logout
            </a>
            {/* eslint-disable-next-line */}
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              <Avatar
                alt="Remy Sharp"
                src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-1.aac046b6.png"
              />
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <Avatar
                      alt="Remy Sharp"
                      src="https://demos.themeselection.com/materio-vuetify-vuejs-admin-template/demo-1/assets/avatar-1.aac046b6.png"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
