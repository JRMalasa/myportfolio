'use client';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/page/about' },
  { name: 'Contact', href: '/page/contact' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const pathname = usePathname();
  
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gradient-to-br from-[#1e40af] to-[#3b82f6]">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-start">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex flex-col items-center md:items-start">
                        <Link href="#">
                          <Image
                            className="h-10 w-10 rounded-full text-slate-400"
                            src={'/jrmlogo.png'}
                            alt={'logo'}
                            width={24}
                            height={24}
                          />
                          <span className="sr-only">JRM</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              pathname === item.href
                                ? 'text-white underline'
                                : 'text-gray-300 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={pathname === item.href ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <Link
                        type="button"
                        className="relative rounded-full p-1 text-gray-800 hover:text-white"
                        href={'https://github.com/JRMalasa'}
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Github</span>
                        <FaGithub className="h-6 w-6" aria-hidden="true" />
                      </Link>
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
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
                          {/* Menu items go here */}
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'text-white underline'
                          : 'text-gray-300 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <Link
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full p-1 text-gray-800 hover:text-white focus:outline-none focus:ring-2"
                      href={'https://github.com/JRMalasa'}
                    >
                      <span className="absolute -inset-1.5" />
                      <FaGithub className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
