import React from 'react';
import './AgapeLandingPage.css';
import { Search, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const AgapeLandingPage: React.FC = () => {
    return (
        <div className="agape-landing-container">
            {/* Header */}
            <header className="agape-header">
                <div className="container mx-auto px-6 h-28 flex items-center justify-between">
                    <div className="logo flex items-center">
                        <img src="/assets/AGAPE/image_3__1_-removebg-preview 1.png" alt="Agape Logo" className="h-20 w-auto object-contain" />
                    </div>
                    <nav className="hidden md:flex items-center space-x-12">
                        <a href="#" className="nav-link active">Home</a>
                        <a href="#" className="nav-link">Buy Cars</a>
                        <a href="#" className="nav-link">Blog</a>
                        <a href="#" className="nav-link">Service</a>
                    </nav>
                    <button className="hire-now-btn px-10 py-3 uppercase tracking-wider text-[11px] font-black">
                        Hire Now
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section" style={{ backgroundImage: 'url("/assets/AGAPE/Services- Slider.png")' }}>
                <div className="overlay"></div>
                <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                    <div className="max-w-3xl text-left">
                        <h1 className="hero-title">
                            PURCHASE YOUR <br />
                            <span className="text-orange-500">PERFECT</span> CAR
                        </h1>
                        <p className="hero-subtitle mb-12 max-w-lg">
                            Over 1000+ New Cars Available Here <br />
                            lorem ipsum dolor sit amet, consectetur adipiscing <br />
                            elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </p>
                        <div className="hero-btns flex space-x-6">
                            <button className="btn-primary">Explore More</button>
                            <button className="btn-outline">Rent Cars</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="about-section py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="md:w-1/2">
                            <img src="/assets/AGAPE/image_3-removebg-preview 1.png" alt="About Car" className="w-full rounded-none shadow-2xl" />
                        </div>
                        <div className="md:w-1/2 text-left">
                            <h2 className="section-title text-orange-500 uppercase tracking-[0.2em] text-xl font-extrabold mb-6">ABOUT US</h2>
                            <p className="about-text text-black font-semibold text-sm leading-relaxed mb-6 italic">
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>
                            <p className="about-text text-gray-700 text-sm leading-[1.8] mb-10">
                                Currently, there are 1,440 car colors available across the US. From the classic colors that everyone knows and loves to the unique hues that make a statement, there's a color for everyone.
                                <br /><br />
                                White is the most popular car color, accounting for 23% of all cars sold in the US. Black is the second most popular car color, followed by gray and silver. These four colors account for more than 75% of all cars sold.
                            </p>
                            <button className="btn-primary-orange px-10 py-4 text-xs font-bold tracking-widest">READ MORE</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Banner */}
            <section className="services-banner relative py-48 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/assets/AGAPE/image_1-removebg-preview 1.png")' }}></div>
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="container mx-auto px-6 relative z-10 text-left">
                    <h2 className="banner-title text-5xl md:text-7xl font-black text-white uppercase italic leading-[0.9]">
                        WE ARE PROVIDE PROFESSIONAL <br />
                        <span className="text-orange-500">CAR SERVICES</span>
                    </h2>
                </div>
            </section>

            {/* Latest Cars Section */}
            <section className="latest-cars-section py-24 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-black text-gray-900 uppercase mb-4">OUR LATEST CARS</h2>
                    <p className="text-gray-500 text-sm mb-12">lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

                    <div className="flex justify-end space-x-2 mb-8">
                        <button className="slider-btn"><ChevronLeft size={20} /></button>
                        <button className="slider-btn active"><ChevronRight size={20} /></button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Car Card 1 */}
                        <div className="car-card bg-white rounded-none overflow-hidden shadow-sm flex flex-col border border-gray-100">
                            <div className="p-8 text-left bg-white">
                                <h3 className="font-extrabold text-gray-800 text-lg">Luxurious Auto Mobile</h3>
                                <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
                                    lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit. <br />
                                    pulvinar dapibus leo.
                                </p>
                            </div>
                            <div className="flex-grow flex items-center justify-center p-6 bg-white">
                                <img src="/assets/AGAPE/image_3-removebg-preview 1.png" alt="Car" className="w-full h-auto object-contain" />
                            </div>
                            <div className="bg-[#111] py-5 text-white text-[10px] font-bold uppercase tracking-[0.25em] text-left px-8">
                                <span className="text-orange-500">HOT SELLS</span>
                                <div className="h-[2px] w-32 bg-orange-500 mt-3"></div>
                            </div>
                        </div>
                        {/* Car Card 2 */}
                        <div className="car-card bg-white rounded-none overflow-hidden shadow-sm flex flex-col border border-gray-100">
                            <div className="p-8 text-left bg-white">
                                <h3 className="font-extrabold text-gray-800 text-lg">Luxurious Auto Mobile</h3>
                                <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
                                    lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit. <br />
                                    pulvinar dapibus leo.
                                </p>
                            </div>
                            <div className="flex-grow flex items-center justify-center p-6 bg-white">
                                <img src="/assets/AGAPE/image_1-removebg-preview 1.png" alt="Car" className="w-full h-auto object-contain" />
                            </div>
                            <div className="bg-[#111] py-5 text-white text-[10px] font-bold uppercase tracking-[0.25em] text-left px-8">
                                <span className="text-orange-500">HOT SELLS</span>
                                <div className="h-[2px] w-32 bg-orange-500 mt-3"></div>
                            </div>
                        </div>
                        {/* Car Card 3 */}
                        <div className="car-card bg-white rounded-none overflow-hidden shadow-sm flex flex-col border border-gray-100">
                            <div className="p-8 text-left bg-white">
                                <h3 className="font-extrabold text-gray-800 text-lg">Luxurious Auto Mobile</h3>
                                <p className="text-[11px] text-gray-400 mt-2 leading-relaxed">
                                    lorem ipsum dolor sit amet, <br />
                                    consectetur adipiscing elit. <br />
                                    pulvinar dapibus leo.
                                </p>
                            </div>
                            <div className="flex-grow flex items-center justify-center p-6 bg-white">
                                <img src="/assets/AGAPE/image_3-removebg-preview 1.png" alt="Car" className="w-full h-auto object-contain" />
                            </div>
                            <div className="bg-[#111] py-5 text-white text-[10px] font-bold uppercase tracking-[0.25em] text-left px-8">
                                <span className="text-orange-500">HOT SELLS</span>
                                <div className="h-[2px] w-32 bg-orange-500 mt-3"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Sections (The two columns with large images) */}
            <section className="cta-section py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="cta-box text-left">
                            <div className="bg-gray-100 mb-8 overflow-hidden rounded-sm flex items-center justify-center">
                                <img src="/assets/AGAPE/image_1-removebg-preview 1.png" alt="Blue Car" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="font-extrabold text-sm text-black uppercase tracking-widest mb-4">Lorem ipsum dolor sit</h3>
                            <p className="text-gray-500 text-[12px] leading-loose mb-8 max-w-sm">lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <button className="btn-primary-orange px-10 py-3 text-[11px]">READ MORE</button>
                        </div>
                        <div className="cta-box text-left">
                            <div className="bg-gray-100 mb-8 overflow-hidden rounded-sm flex items-center justify-center">
                                <img src="/assets/AGAPE/image_5-removebg-preview 1.png" alt="Tail view" className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="font-extrabold text-sm text-black uppercase tracking-widest mb-4">Lorem ipsum dolor sit</h3>
                            <p className="text-gray-500 text-[12px] leading-loose mb-8 max-w-sm">lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                            <button className="btn-primary-orange px-10 py-3 text-[11px]">READ MORE</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Quote / Pamphlets */}
            <section className="quote-section py-24 bg-gray-50">
                <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <img src="/assets/AGAPE/image_3-removebg-preview 1.png" alt="Silver Car" className="w-full h-auto" />
                    </div>
                    <div className="md:w-1/2 text-left">
                        <h3 className="text-orange-500 font-bold mb-6 text-xl">Some pamphlets contents</h3>
                        <p className="text-gray-700 font-semibold italic mb-8 leading-relaxed">"lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo."</p>
                        <p className="text-gray-500 text-sm leading-loose">"lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo. lorem ipsum dolor <br /> sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo."</p>
                    </div>
                </div>
            </section>

            {/* Book Your Ride Section */}
            <section className="grid-features-section py-24 bg-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2 text-left">
                        <h3 className="text-orange-500 font-bold mb-6 text-xl">Book your ride online</h3>
                        <p className="text-black font-semibold mb-6 leading-relaxed">lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br /> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className="text-gray-500 text-sm leading-loose">lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br /> luctus nec ullamcorper mattis, pulvinar dapibus leo. lorem ipsum dolor<br /> sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<br /> ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/assets/AGAPE/image_1-removebg-preview 1.png" alt="Side view car" className="w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* Bottom Two Image Grid */}
            <section className="bottom-grid-images py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex justify-center items-center bg-gray-50 py-8">
                            <img src="/assets/AGAPE/image_4__1_-removebg-preview 1.png" alt="Black car" className="max-h-64 object-contain" />
                        </div>
                        <div className="flex justify-center items-center bg-gray-50 py-8">
                            <img src="/assets/AGAPE/image_5-removebg-preview 1.png" alt="Silver car road" className="max-h-64 object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="agape-footer bg-black text-white pt-20 pb-10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between border-b border-gray-800 pb-12">
                    <div className="footer-brand mb-10 md:mb-0">
                        <div className="logo flex items-center mb-6">
                            <img src="/assets/AGAPE/image_3__1_-removebg-preview 1.png" alt="Agape Logo" className="h-16 w-auto object-contain brightness-200" />
                        </div>
                        <p className="text-gray-400 max-w-xs">Connecting people with their perfect cars for over a decade.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="font-bold mb-6">Mobil-app</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-orange-500">Feature</a></li>
                                <li><a href="#" className="hover:text-orange-500">Showcase</a></li>
                                <li><a href="#" className="hover:text-orange-500">Pricing</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Community</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-orange-500">Newsletter</a></li>
                                <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
                                <li><a href="#" className="hover:text-orange-500">Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6">Company</h4>
                            <ul className="space-y-4 text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-orange-500">About Us</a></li>
                                <li><a href="#" className="hover:text-orange-500">Careers</a></li>
                                <li><a href="#" className="hover:text-orange-500">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-0">
                        <button className="bg-orange-500 text-white px-8 py-2 rounded-sm font-black text-sm uppercase">Hires</button>
                        <div className="mt-4 flex bg-white rounded-sm overflow-hidden">
                            <input type="text" placeholder="Search..." className="px-4 py-2 w-full text-black outline-none text-sm" />
                            <button className="bg-orange-500 px-4 flex items-center justify-center text-white"><Search size={18} /></button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>© Copyright 2024 AGAPE Motors Limited</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-orange-500"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-orange-500"><Twitter size={20} /></a>
                        <a href="#" className="hover:text-orange-500"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-orange-500"><Linkedin size={20} /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AgapeLandingPage;
