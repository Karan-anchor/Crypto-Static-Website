import React from 'react'
import BannerImage from '../assets/BannerImage.png';

const Banner = () => {
    return (
        <div>
            <section className='relative bg-center bbg-no-repet h-[60vh] flex items-center justify-center text-white'
                style={{
                    backgroundImage: `url(${BannerImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                {/* {Gradient Overlay} */}
                <div className='absolute inset-0'
                    style={{
                        background: "linear-gradient(to bottom,rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,1)  80%"
                    }} />

                {/* {   Banner Content} */}
                <div className='relative z-10 max-w-4xl text-center px-4 py-8 mx-auto'>
                    <h2 className='text-xl md:text-5xl mt-22 sm:text-xl lg:text-6xl font-bold mb-6
                            font-montserrat tracking-tighter'>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-cyan-400
                                to-blue-500'>
                            Multi-Blockchain Defi Earn
                        </span>
                        <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500
                                ml-6'>
                            Works and <br /> Borrows Across Networks
                        </span>
                    </h2>

                    <p className='text-lg md:text-2xl md-8 leading-relaxed'
                        style={{
                            fontFamily: "Poppins sans-serif",
                            textShadow: "2px 1px 3px rgba(0,0,0,0.5)"
                        }}>
                        Seamlessly earn interest andd borrow assets across multiple blockchains with a mdern approach.
                    </p>
                    <button className='relative mb-10 bg-gradient-to-r from-purple-500 to-indigo-600
                                border-none px-8 py-2 rounded-full text-white text-lg md:text-xl font-semibold
                                transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xlhobver:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-500 overflow-hidden
                                group' style={{ fontFamily: "Poppins sans-serif", }}>
                        <span className='relative z-10'>Launch App</span>

                    </button>
                </div>
            </section>

            {/* {Marketbox Section} */}
            <section className='bg-black py-12 px-4'>
                <div className='relative w-full max-w-5xl mx-auto'>
                    <div className='absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                    opacity-50 blur-lg animate-border'/>
                    {/* {Main Content} */}
                    <div className='relative backdrop-blur-xl bg-gradient-to-br  from-[#000b1d] to-[#0a1226]
                    border border-[#ffffff15] rounded-3xl p-8 shadow-2xl style={{
                     clipPath: "polygon(0 5%, 100% 0,100%,95%,0 100%)",
                     boxShadow: "0 0 50px rgba(104,109,224,0.2)",
                    }}'>
                        {/* FLOATING PARTICLES BG */}
                        <div className="absolute inset-0 opacity-20">
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white rounded-full animate-float"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animationDelay: `${i * 0.5}s`,
                                    }}
                                ></div>
                            ))}
                        </div>
                        
                        {/* CONTENT GRID */}
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {["Total Value", "Market Value", "Value Locked"].map((title) => (
                                <div
                                    key={title}
                                    className="group relative p-6 rounded-xl transition-all duration-500 hover:bg-[#ffffff08] hover:-translate-y-2"
                                >
                                    <div
                                        className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:w-full group-hover:transition-all duration-300"
                                    ></div>
                                    {/* CONTENT */}
                                    <div className="text-center space-y-4">
                                        <h3 className="text-sm uppercase tracking-widest text-cyan-300 font-bold opacity-90">
                                            {title}
                                        </h3>

                                        <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-200 to-cyan-300 bg-clip-text text-transparent">
                                            $605.04M
                                        </p>
                                    </div>
                                    {/* CONTENT ACCENTS */}
                                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-50"></div>

                                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-pink-400 opacity-50"></div>
                                </div>
                            ))}
                        </div>
                        {/* CENTER DIVIDER */}
                        <div className="absolute inset-x-0 top-1/2 md:block lg:hidden">
                            <div className="h-[1px] bg-gradient-to-r from-transparent via-[#ffffff15] to-transparent w-full"></div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Banner