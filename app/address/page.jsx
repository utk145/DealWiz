"use client"

import { useState } from "react"
import MainLayout from "../layouts/MainLayout"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import TextInput from "../components/TextInput.Compoent"

export default function AddressPage() {

    const [addressId, setAddressId] = useState(null)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [isUpdatingAddress, setIsUpdatingAddress] = useState(false)
    const [error, setError] = useState({})

    const submit = () => {
        console.log("Logging..");
    };

    const showError = (type) => {
        return ''
    }

    return (
        <>
            <MainLayout>
                <div
                    id="AddressPage"
                    className="mt-4 max-w-[600px] mx-auto px-2"
                >
                    <div className="mx-auto bg-white rounded-lg p-3">

                        <div className="text-xl text-bold mb-2">Address Details</div>

                        <form onSubmit={submit}>
                            <div className="mb-4">
                                <TextInput
                                    className="w-full"
                                    string={name}
                                    placeholder="Name"
                                    onUpdate={setName}
                                    error={showError('name')}
                                />
                            </div>

                            <div className="mb-4">
                                <TextInput
                                    className="w-full"
                                    string={address}
                                    placeholder="Address"
                                    onUpdate={setAddress}
                                    error={showError('address')}
                                />
                            </div>

                            <div className="mb-4">
                                <TextInput
                                    className="w-full mt-2"
                                    string={zipcode}
                                    placeholder="Zip Code"
                                    onUpdate={setZipcode}
                                    error={showError('zipcode')}
                                />
                            </div>

                            <div className="mb-4">
                                <TextInput
                                    className="w-full mt-2"
                                    string={city}
                                    placeholder="City"
                                    onUpdate={setCity}
                                    error={showError('city')}
                                />
                            </div>

                            <div>
                                <TextInput
                                    className="w-full mt-2"
                                    string={country}
                                    placeholder="Country"
                                    onUpdate={setCountry}
                                    error={showError('country')}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isUpdatingAddress}
                                className={`
                                mt-6
                                w-full 
                                text-white 
                                text-lg 
                                font-semibold 
                                p-3 
                                rounded
                                ${isUpdatingAddress ? 'bg-blue-800' : 'bg-blue-600'}
                            `}
                            >
                                {!isUpdatingAddress
                                    ? <div>Update Address</div>
                                    : <div className="flex items-center justify-center gap-2">
                                        <AiOutlineLoading3Quarters className="animate-spin" />
                                        Please wait...
                                    </div>
                                }
                            </button>

                        </form>
                    </div>
                </div>
            </MainLayout>
        </>
    )
}