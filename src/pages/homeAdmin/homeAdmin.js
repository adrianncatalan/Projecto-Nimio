import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react';
import 'boxicons';
import {
    BadgeCheckIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    CollectionIcon,
    SearchIcon,
    SortAscendingIcon,
} from '@heroicons/react/solid'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Settings', href: '/settings', current: true },
    { name: 'Logout', href: '/login', current: false },
]

const projects = [
    {
        name: 'Development of task management application',
        href: '#',
        siteHref: '#',
        repoHref: '#',
        tech: 'React, Tailwind & Symfony',
        lastDeploy: '3h ago',
        location: 'Spain, Málaga',
        starred: true,
        active: true,
    },
    // More projects...
]
const activityItems = [
    { project: 'Development of task management application', commit: '', environment: 'production', time: '5h' },
    // More items...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HomeAdmin() {
    return (
        <>
            {/* Background color split screen for large screens */}
            <div className="relative top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
            <div className="relative top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />
            <div className="relative min-h-screen flex flex-col">
                {/* Navbar */}
                <Disclosure as="nav" className="flex-shrink-0 bg-indigo-600">
                    {({ open }) => (
                        <>
                            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                                <div className="relative flex items-center justify-between h-16">
                                    {/* Logo section */}
                                    <div className="flex items-center px-2 lg:px-0 xl:w-64">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                                                alt="Workflow"
                                            />
                                        </div>
                                    </div>

                                    {/* Search section */}
                                    <div className="flex-1 flex justify-center lg:justify-end">
                                        <div className="w-full px-2 lg:px-6">
                                            <label htmlFor="search" className="sr-only">
                                                Search
                                            </label>
                                            <div className="relative text-indigo-200 focus-within:text-gray-400">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                                                </div>
                                                <input
                                                    id="search"
                                                    name="search"
                                                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm"
                                                    placeholder="Search"
                                                    type="search"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex lg:hidden">
                                        {/* Mobile menu button */}
                                        <Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                                            <span className="sr-only">Open main menu</span>
                                            {open ? (
                                                <XIcon className="block h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                                            )}
                                        </Disclosure.Button>
                                    </div>
                                    {/* Links section */}
                                    <div className="hidden lg:block lg:w-80">
                                        <div className="flex items-center justify-end">
                                            <div className="flex">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                            {/* Profile dropdown */}
                                            <Menu as="div" className="ml-4 relative flex-shrink-0">
                                                <div>
                                                    <Menu.Button className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white">
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
                                                    
                                                </Transition>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Disclosure.Panel className="lg:hidden">
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current
                                                    ? 'text-white bg-indigo-800'
                                                    : 'text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                {/* 3 column wrapper */}
                <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
                    {/* Left sidebar & main wrapper */}
                    <div className="flex-1 min-w-0 bg-white xl:flex">
                        {/* Account profile */}
                        <div className="xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
                            <div className="pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                                <div className="flex items-center justify-between">
                                    <div className="flex-1 space-y-8">
                                        <div className="space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8">
                                            {/* Profile */}
                                            <div className="flex items-center space-x-3">
                                                <div className="flex-shrink-0 h-12 w-12">
                                                    <img
                                                        className="h-12 w-12 rounded-full"
                                                        src="https://pbs.twimg.com/profile_images/485737516855599106/7_2o31DN_400x400.jpeg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <div className="text-sm font-medium text-gray-900">Nimio Estudio</div>
                                                    <a href="#" className="group flex items-center space-x-2.5">
                                                        <span className="text-sm text-gray-500 group-hover:text-gray-900 font-medium">
                                                            Administrator
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                            {/* Action buttons */}
                                            <div className="flex flex-col sm:flex-row xl:flex-col">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                                                >
                                                    New Customer
                                                </button>
                                            </div>
                                            <div className="flex flex-col sm:flex-row xl:flex-col">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                                                >
                                                    New Project
                                                </button>
                                            </div>
                                            <div className="flex flex-col sm:flex-row xl:flex-col">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
                                                >
                                                    New Worker
                                                </button>
                                            </div>
                                        </div>
                                        {/* Meta info */}
                                        <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6">
                                            <div className="flex items-center space-x-2">
                                                <BadgeCheckIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                <span className="text-sm text-gray-500 font-medium">4 Customers</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <CollectionIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                <span className="text-sm text-gray-500 font-medium">8 Projects</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Projects List */}
                        <div className="bg-white lg:min-w-0 lg:flex-1">
                            <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                                <div className="flex items-center">
                                    <h1 className="flex-1 text-lg font-medium">Projects</h1>
                                    <Menu as="div" className="relative">
                                        <Menu.Button className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <SortAscendingIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                                            Check
                                            <ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </Menu.Button>
                                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Customers
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Projects
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="#"
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            Tasks
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <ul role="list" className="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
                                {projects.map((project) => (
                                    <li
                                        key={project.repo}
                                        className="relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
                                    >
                                        <div className="flex items-center justify-between space-x-4">
                                            {/* Repo name and link */}
                                            <div className="min-w-0 space-y-3">
                                                <div className="flex items-center space-x-3">
                                                    <span
                                                        className={classNames(
                                                            project.active ? 'bg-green-100' : 'bg-gray-100',
                                                            'h-4 w-4 rounded-full flex items-center justify-center'
                                                        )}
                                                        aria-hidden="true"
                                                    >
                                                        <span
                                                            className={classNames(
                                                                project.active ? 'bg-green-400' : 'bg-gray-400',
                                                                'h-2 w-2 rounded-full'
                                                            )}
                                                        />
                                                    </span>

                                                    <span className="block">
                                                        <h2 className="text-sm font-medium">
                                                            <a href={project.href}>
                                                                <span className="absolute inset-0" aria-hidden="true" />
                                                                {project.name}{' '}
                                                                <span className="sr-only">{project.active ? 'Running' : 'Not running'}</span>
                                                            </a>
                                                        </h2>
                                                    </span>
                                                </div>
                                                
                                            </div>
                                            <div className="sm:hidden">
                                                <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                            </div>
                                            {/* Repo meta info */}
                                            <div className="hidden sm:flex flex-col flex-shrink-0 items-end space-y-3">
                                                <p className="flex items-center space-x-4">
                                                    <a
                                                        href={project.siteHref}
                                                        className="relative text-sm text-gray-500 hover:text-gray-900 font-medium"
                                                    >
                                                        View the project
                                                    </a>

                                                </p>
                                                <p className="mt-1.5 flex text-gray-500 text-sm space-x-2">
                                                    <span>{project.tech}</span>
                                                    <span aria-hidden="true">&middot;</span>
                                                    <span>Last modified {project.lastDeploy}</span>
                                                    <span aria-hidden="true">&middot;</span>
                                                    <span>{project.location}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}