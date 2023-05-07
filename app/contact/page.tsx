"use client"

import Image from 'next/image';
import { NextResponse } from 'next/server';
import { useEffect, useState } from 'react';

export default function Contact() {

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [reasonError, setReasonError] = useState(false);

    const [APIError, setAPIError] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = async () => {
        if (name && email && reason) {
            setNameError(false);
            setEmailError(false);
            setReasonError(false);
            console.log('success');
        } else {
            if (!name) {
                setNameError(true);
            } else {
                setNameError(false);
            }
            if (!email) {
                setEmailError(true);
            } else {
                setEmailError(false);
            }
            if (!reason) {
                setReasonError(true);
            } else {
                setReasonError(false);
            }
            return;
        }
        const response = await fetch('/api/contact', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, reason
            }),
        });
        if (response.status === 200) {
            setButtonDisabled(true);
        } else {
            setAPIError(true);
        }

    }

    useEffect(() => {
        setNameError(false);
        setEmailError(false);
        setReasonError(false);
        setAPIError(false);
        setButtonDisabled(false);
        setName('');
        setEmail('');
        setReason('');
    }, [])

    return (
        <main className="bg-zinc-900 relative flex min-h-screen w-full flex-col font-sans pb-4 py-40 xl:px-8">
            <div className='flex px-4 sm:px-16 flex-col sm:flex-row'>
                <div>
                    <div className="relative h-96 w-68 sm:w-72 rounded-lg overflow-hidden">
                        <Image src="/me.png" alt="Me" fill className='object-cover'></Image>
                    </div>
                    <div className='flex justify-center mt-4 bg-zinc-950 p-4 rounded-xl'>
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-fuchsia-950 sm:mx-0 sm:h-10 sm:w-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-fuchsia-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div className='ml-2 sm:ml-4'>
                            <div className='text-semibold text-slate-100'>Mail me at</div>
                            <div className='text-bold text-fuchsia-700'>haolin@haolin.dev</div>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center bg-zinc-950 grow pt-8 sm:ml-8 mt-4 sm:mt-0 rounded-2xl max-w-screen-xl mx-auto h-max mb-16'>
                    <h2 className='text-2xl sm:text-3xl font-bold'>
                        <em>Contact me directly!</em>
                    </h2>
                    <div className='mx-8 mt-12 mb-8 flex flex-col flex-wrap justify-center'>
                        <div className="mb-6">
                            <label htmlFor="name" className="text-left block mb-2 text-sm font-medium text-slate-100">Your name</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="border text-slate-100 text-sm rounded-lg block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-fuchsia-500 focus:border-zinc-500" placeholder="Haolin Wu" required />
                            {nameError ? <div className="text-left text-sm pb-2 mt-1 text-red-600">Name cannot be empty.</div> : <></>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="text-left block mb-2 text-sm font-medium text-slate-100">Your email address</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border text-slate-100 text-sm rounded-lg block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-fuchsia-500 focus:border-zinc-500" placeholder="name@haolin.dev" required />
                            {emailError ? <div className="text-left text-sm pb-2 mt-1 text-red-600">Email cannot be empty.</div> : <></>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="reason" className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Reason</label>
                            <textarea id="reason" rows={4} value={reason} maxLength={1000} onChange={(e) => setReason(e.target.value)} className="border text-slate-100 text-sm rounded-lg block w-full p-2.5 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-fuchsia-500 focus:border-zinc-500" placeholder="Let's get a coffee!"></textarea>
                            <div className="text-gray-600 text-sm mt-1 pb-1 float-right">{reason.length}/1000</div>
                            {reasonError ? <div className="text-left text-sm pb-2 mt-1 text-red-600">Reason cannot be empty.</div> : <></>}
                        </div>
                        <div>
                            {!buttonDisabled ? (
                                <button type="button" onClick={() => handleSubmit()} className="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">Submit</button>
                            ) : (
                                <button type="button" className="rounded-md bg-violet-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm" disabled>Submitted!</button>
                            )}
                            {APIError ? <div className="text-left text-sm pb-2 mt-1 text-red-600">An error has occured, please try again.</div> : <></>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}