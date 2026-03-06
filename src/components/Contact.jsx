import React from 'react';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-900 text-white py-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
                <div className="w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
                            Ready to Upgrade Your Walls?
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 max-w-md">
                            Get in touch with us for bulk orders, project estimates, or distributorship inquiries. Our team responds within 24 hours.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                                    <Phone className="h-5 w-5 text-indigo-400" />
                                </div>
                                <div className="ml-4 text-base text-gray-300">
                                    +91 8943763765
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                                    <Mail className="h-5 w-5 text-indigo-400" />
                                </div>
                                <div className="ml-4 text-base text-gray-300">
                                    info@royalwhitehomes.com
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                                    <MapPin className="h-5 w-5 text-indigo-400" />
                                </div>
                                <div className="ml-4 text-base text-gray-300">
                                    Chalakudy, Kerala, India
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 sm:space-y-6 max-w-md lg:ml-auto">
                        <a
                            href="https://wa.me/918943763765?text=I'm%20interested%20in%20DK%20HDMR%20Gypsum.%20Please%20share%20a%20quote."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full px-8 py-5 text-base font-bold text-white transition-all duration-200 bg-[#25D366] rounded-xl hover:bg-[#1da851] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-[#25D366] shadow-lg transform hover:-translate-y-1"
                        >
                            <MessageCircle className="w-5 h-5 mr-3" />
                            WhatsApp for Quote
                        </a>
                        <a
                            href="mailto:info@royalwhitehomes.com?subject=Quotation Request for DK HDMR Gypsum"
                            className="flex items-center justify-center w-full px-8 py-5 text-base font-bold text-white transition-all duration-200 bg-gray-800 border border-gray-700 rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600 shadow-md transform hover:-translate-y-1"
                        >
                            <Mail className="w-5 h-5 mr-3 text-gray-400" />
                            Email for Quotation
                        </a>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} DK Gypsum. All rights reserved.
                </div>
            </div>
        </section>
    );
};

export default Contact;
