import React from 'react';

const Gallery = () => {
    const images = [
        { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Premium home interior' },
        { src: 'https://images.unsplash.com/photo-1600607687930-cebc5a88d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Modern plaster finish' },
        { src: 'https://images.unsplash.com/photo-1541887089851-bc25ed51000f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Construction site' },
        { src: 'https://images.unsplash.com/photo-1628186103632-4759ba7c5bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Flawless wall finish' },
        { src: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Gypsum application' },
        { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Completed villa' },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">Gallery</h2>
                    <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        See Our Work Across Kerala
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        From luxury villas to commercial complexes, DK HDMR Gypsum is the trusted choice.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, index) => (
                        <div key={index} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl cursor-pointer">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end">
                                <p className="text-white p-6 font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
