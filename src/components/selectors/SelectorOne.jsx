import { Combobox, Transition } from '@headlessui/react';
import React, { Fragment, useState } from 'react';

import { CheckIcon, SelectorIcon } from '@heroicons/react/outline';

export const SelectorOne = ({
    items,
    setSelected,
    selected
}) => {

    const [query, setQuery] = useState('')
  
    const filteredItems =
      query === ''
        ? items
        : items.filter((item) =>
            item.name
              .toLowerCase()
              .replace(/\s+/g, '')
              .includes(query.toLowerCase().replace(/\s+/g, ''))
          )

    return (
        <div>
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-teal-300 focus-visible:ring-offset-2 sm:text-sm overflow-hidden">
                        <Combobox.Input
                            className="w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                            displayValue={(item) => item.name}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <SelectorIcon
                            className="w-5 h-5 text-gray-400"
                            aria-hidden="true"
                        />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredItems.length === 0 && query !== '' ? (
                            <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                Nothing found.
                            </div>
                        ) : (
                            filteredItems.map((item, idx) => (
                                <Combobox.Option
                                    key={idx}
                                    className={({ active }) =>
                                        `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                        active ? 'text-white bg-teal-600' : 'text-gray-900'
                                        }`
                                    }
                                    value={item}
                                >
                                    {({ selected, active }) => (
                                        <>
                                            <span
                                            className={`block truncate ${
                                                selected ? 'font-medium' : 'font-normal'
                                            }`}
                                            >
                                            {item.name}
                                            </span>
                                            {selected ? (
                                            <span
                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                active ? 'text-white' : 'text-teal-600'
                                                }`}
                                            >
                                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                            </span>
                                            ) : null}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))
                        )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}
