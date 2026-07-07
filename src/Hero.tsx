import React from 'react';

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-transparent flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-transparent" />
            <div className="relative z-10 flex flex-col items-center text-center px-6">
                {/* Model Image (replace src as needed) */}
                <img
                    src="/path-to-your-image.png"
                    alt="GAZU model"
                    className="w-[60%] max-w-4xl object-contain mb-8"
                />

                <h1 className="mt-8 text-6xl md:text-8xl font-bold tracking-tight text-gray-900">Ruma</h1>
                <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">Fashion that moves with you.</p>

                <div className="mt-8 flex gap-4">
                    <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">Shop Now</button>
                    <button className="px-6 py-3 border border-gray-800 text-gray-800 rounded-md hover:bg-gray-100 transition">Explore New In</button>
                </div>
            </div>
        </section>
    );
}
