// import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Component } from "react";
// import { Switch, Route } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

class Register extends Component {
    render() {
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
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Register your company</h2>
                        <p className="mt-4 text-lg leading-6 text-gray-500">
                            Enter your company's fiscal data or if you are a freelancer. You'll be able to consult, save information and create projects for periodic follow-ups.
                        </p>
                    </div>
                    <div className="mt-12">
                        <form action="#" method="POST" className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="user-name" className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your username'
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your password'
                                        type="password"
                                        name="password"
                                        id="pass-word"
                                        // autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    First name
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your firstname'
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                                    Surname
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your last surname'
                                        type="text"
                                        name="sur-name"
                                        id="text"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                                    Company name
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your company name'
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
                                    Tax ID number
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your tax ID number'
                                        type="text"
                                        name="tax-id"
                                        id="tax-id"
                                        autoComplete="organization"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your email'
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Verify your Email
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your email'
                                        id="verify-email"
                                        name="verify-email"
                                        type="email"
                                        autoComplete="email"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            {/* <div>
                                <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700">
                                    Zip code
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your zip code'
                                        type="text"
                                        name="zip-code"
                                        id="zip-code"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Country
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your country'
                                        type="text"
                                        name="country"
                                        id="country"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your city'
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="given-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                    Location
                                </label>
                                <div className="mt-1">
                                    <input
                                        required
                                        placeholder='Enter your location'
                                        type="text"
                                        name="location"
                                        id="location"
                                        autoComplete="family-name"
                                        className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                    />
                                </div>
                            </div> */}

                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <div className="mt-1 relative rounded-md shadow-sm">

                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        className="py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                        placeholder="Enter your phone number"
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
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;