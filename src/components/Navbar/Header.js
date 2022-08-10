/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "Mint", href: "#", current: false },
    { name: "My Saints", href: "#", current: false },
    { name: "Staking", href: "#", current: false },
    { name: "Rarity", href: "#", current: false },
    { name: "Marketplace", href: "#", current: false },
    { name: "Fan Fiction", href: "#", current: false },
    
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
      <Disclosure as="nav" className="bg-red-800 ">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                
                <div className="flex-1 flex items-center justify-center md:items-stretch ">
                <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="./images/logoredsaint.png"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="./images/logoredsaint.png"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block md:ml-6">
                    <div className="flex space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-white text-red-800' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'px-2 py-2 mx-4 rounded-md text-xs font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0  right-5 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                  <button
                    type="button"
                    className="bg-white p-2 border-4 font-bold border-red-900 rounded-full text-red-900 hover:bg-gray-700 hover:text-white"
                  >
                    Connected
                  </button>
                </div>
              </div>
            </div>
  
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    )
  }
  