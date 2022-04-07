import { Fragment, useState } from 'react'
import { Dialog, Switch, Transition } from '@headlessui/react'
import {
    CogIcon,
    HomeIcon,
    MenuAlt2Icon,
    XIcon,
} from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: '/homeAdmin', icon: HomeIcon, current: false },
]
const secondaryNavigation = [
    { name: 'Logout', href: '/login', icon: CogIcon },
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



export default function Component() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <div className="relative h-screen bg-white overflow-hidden flex">
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-40 flex md:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-14 p-1">
                                    <button
                                        type="button"
                                        className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-600"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        <span className="sr-only">Close sidebar</span>
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 px-4 flex items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/easywire-logo-purple-600-mark-gray-900-text.svg"
                                    alt="Easywire"
                                />
                            </div>
                            <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                <nav className="h-full flex flex-col">
                                    <div className="space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-purple-50 border-purple-600 text-purple-600'
                                                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                    'group border-l-4 py-2 px-3 flex items-center text-base font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                <item.icon
                                                    className={classNames(
                                                        item.current ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500',
                                                        'mr-4 flex-shrink-0 h-6 w-6'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="mt-auto pt-10 space-y-1">
                                        {secondaryNavigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="group border-l-4 border-transparent py-2 px-3 flex items-center text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                            >
                                                <item.icon
                                                    className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                />
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden md:flex md:flex-shrink-0">
                <div className="w-64 flex flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <nav className="bg-gray-50 border-r border-gray-200 pt-5 pb-4 flex flex-col flex-grow overflow-y-auto">
                        <div className="flex-shrink-0 px-4 flex items-center">
                            <img
                                className="h-8 w-auto"
                                src="https://www.nimioestudio.com/app/views/default/layout/img/logo_nimio_horizontal_negro.svg"
                                alt="Nimio"
                            />
                        </div>
                        <div className="flex-grow mt-5 flex flex-col">
                            <div className="flex-1 space-y-1">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'bg-purple-50 border-purple-600 text-purple-600'
                                                : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                                            'group border-l-4 py-2 px-3 flex items-center text-sm font-medium'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-500',
                                                'mr-3 flex-shrink-0 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="flex-shrink-0 block w-full">
                            {secondaryNavigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="group border-l-4 border-transparent py-2 px-3 flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                >
                                    <item.icon className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6" aria-hidden="true" />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>

            {/* Content area */}
            <div className="flex-1 flex flex-col">
                <div className="w-full max-w-4xl mx-auto md:px-8 xl:px-0">
                    <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
                        <button
                            type="button"
                            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 md:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <main className="flex-1 overflow-y-auto focus:outline-none">
                    <div className="relative max-w-4xl mx-auto md:px-8 xl:px-0">
                        <div className="pt-10 pb-16">
                            <div className="px-4 sm:px-6 md:px-0">
                                <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
                            </div>
                            <div className="px-4 sm:px-6 md:px-0">
                                <div className="py-6">
                                    {/* Tabs */}
                                    <div className="lg:hidden">
                                        <label htmlFor="selected-tab" className="sr-only">
                                            Select a tab
                                        </label>
                                    </div>
                                    
                                    {/* Description list with inline editing */}
                                    <div className="mt-10 divide-y divide-gray-200">
                                        <div className="space-y-1">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
                                            <p className="max-w-2xl text-sm text-gray-500">
                                                This information will be displayed publicly so be careful what you share.
                                            </p>
                                        </div>
                                        <div className="mt-6">
                                            <dl className="divide-y divide-gray-200">
                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                                    <dt className="text-sm font-medium text-gray-500">Name</dt>
                                                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span className="flex-grow">Adrián</span>
                                                        <span className="ml-4 flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Update
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                                                    <dt className="text-sm font-medium text-gray-500">Surname</dt>
                                                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span className="flex-grow">Catalán</span>
                                                        <span className="ml-4 flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Update
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                                    <dt className="text-sm font-medium text-gray-500">Photo</dt>
                                                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span className="flex-grow">
                                                            <img
                                                                className="h-8 w-8 rounded-full"
                                                                src="https://pbs.twimg.com/profile_images/485737516855599106/7_2o31DN_400x400.jpeg"
                                                                alt=""
                                                            />
                                                        </span>
                                                        <span className="ml-4 flex-shrink-0 flex items-start space-x-4">
                                                            <button
                                                                type="button"
                                                                className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Update
                                                            </button>
                                                            <span className="text-gray-300" aria-hidden="true">
                                                                |
                                                            </span>
                                                            <button
                                                                type="button"
                                                                className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Remove
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5">
                                                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                                                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span className="flex-grow">adrian.catalan@example.com</span>
                                                        <span className="ml-4 flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Update
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                                <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200">
                                                    <dt className="text-sm font-medium text-gray-500">Password</dt>
                                                    <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                        <span className="flex-grow">*******************</span>
                                                        <span className="ml-4 flex-shrink-0">
                                                            <button
                                                                type="button"
                                                                className="bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                                                            >
                                                                Update
                                                            </button>
                                                        </span>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
