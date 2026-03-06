import React from 'react';
import { Droplet, Layers, Zap } from 'lucide-react';

const features = [
    {
        name: 'HDMR Technology',
        description: 'High-Density Moisture Resistance provides unparalleled protection against dampness and creates a durable, long-lasting surface.',
        icon: Droplet,
    },
    {
        name: 'Smooth Finish',
        description: 'Achieve a remarkably sleek, level surface ready for direct painting, eliminating the need for additional putty work.',
        icon: Layers,
    },
    {
        name: 'Zero Wastage',
        description: 'Our proprietary formula ensures optimal workability, reducing material waste and optimizing your project budget.',
        icon: Zap,
    },
];

const Features = () => {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Why Choose DK</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        A Better Way to Plaster
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Engineered for professionals who demand perfection. Our HDMR gypsum saves time and delivers flawless results.
                    </p>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 hover:border-indigo-100 group">
                                <div className="absolute top-8 left-8">
                                    <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="pt-16">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.name}</h3>
                                    <p className="text-base text-gray-500 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
