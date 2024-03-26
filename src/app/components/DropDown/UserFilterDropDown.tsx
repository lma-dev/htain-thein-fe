import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Filter } from 'lucide-react';

export default function UserFilterDropDown({ role, accountStatus, onRoleChange, onAccountStatusChange}) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="ml-2">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-gray-700 text-white px-4 py-2 text-sm font-medium transition hover:scale-105"
                >
                  <Filter size={21}/>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div>
                                        <div className="mt-2 px-3">
                                            <label htmlFor="role" className="text-sm font-medium text-gray-900 mb-1">
                                                Role
                                            </label>
                                            <select className="mt-3 py-3 px-4 pr-9 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                                value={role}
                                                onChange={(e) => onRoleChange(e.target.value)}
                                                name="role"
                                            >
                                                <option value="">Please select</option>
                                                <option value="SuperAdmin">SuperAdmin</option>
                                                <option value="Admin">Admin</option>
                                                <option value="Member">Member</option>
                                            </select>

                                        </div>
                                        <div className="mt-2 px-3">
                                            <label htmlFor="role" className="text-sm font-medium text-gray-900 mb-1">
                                                Account Status
                                            </label>
                                            <select
                                                value={accountStatus}
                                                onChange={(e) => onAccountStatusChange(e.target.value)}
                                                name="accountStatus"
                                                className="mt-3 py-3 px-4 pr-9 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                            >
                                                <option value="">Please select</option>
                                                <option value="ACTIVE">Active</option>
                                                <option value="SUSPENDED">Suspended</option>
                                            </select>

                                        </div>
                                        <div className="mt-3 px-3">
                                            <button
                                                className="inline-block rounded border w-full border-gray-300 p-2 text-sm font-medium text-gray-600 hover:bg-gray-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                                            >
                                                Reset All
                                            </button>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
