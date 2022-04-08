import React from "react";
import { Switch } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export const NewCustomer = () => {

        return (
            <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
                <div className="relative max-w-xl mx-auto">
                    <svg
                        className="absolute left-full transform translate-x-1/2"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <svg
                        className="absolute right-full bottom-0 transform -translate-x-1/2"
                        width={404}
                        height={404}
                        fill="none"
                        viewBox="0 0 404 404"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits="userSpaceOnUse"
                            >
                                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                            </pattern>
                        </defs>
                        <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                    </svg>
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Enter the new customer's data</h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Enter the fiscal data of the new customer (Company or freelancer)
                        </p>
                    </div>
                    <div className="mt-12">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Customer name
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter customer name'
                                        type="text"
                                        name="customer-name"
                                        id="customer-name"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                                    Customer surname
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter customer surname'
                                        type="text"
                                        name="surname-customer"
                                        id="surname-customer"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                                    Enter customer company name
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter customer company name'
                                        type="text"
                                        name="company-name"
                                        id="company-name"
                                        autoComplete="organization"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="tax-id" className="block text-sm font-medium text-gray-700">
                                    Enter customer tax ID number
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter customer Tax ID Number'
                                        type="text"
                                        name="tax-id-customer"
                                        id="tax-id-customer"
                                        autoComplete="organization"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email customer
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter customer email'
                                        id="email-customer"
                                        name="email-customer"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Verify new customer email
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Verify customer email'
                                        id="verify-email-customer"
                                        name="verify-email-customer"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                    Customer phone number
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">

                                    <input
                                        type="text"
                                        name="phone-number-customer"
                                        id="phone-number-customer"
                                        autoComplete="tel"
                                        className="py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder="Enter customer phone number"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <Switch
                                            // checked={agreed}
                                            // onChange={setAgreed}
                                            className={classNames(
                                                // agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                            )}
                                        >
                                            <span className="sr-only">Agree to policies</span>
                                            <span
                                                aria-hidden="true"
                                                className={classNames(
                                                    // agreed ? 'translate-x-5' : 'translate-x-0',
                                                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-base text-gray-500">
                                            By selecting this, you agree to the{' '}
                                            <a href="#" className="font-medium text-gray-700 underline">
                                                Privacy Policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="font-medium text-gray-700 underline">
                                                Cookie Policy
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Register new customer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
}
