import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
// import './Testimonial.css'
{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Testimonial</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-pink-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIgpa4P5yznYh1RiqHcEozY2mb_qN0ghJvg&s" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                    <p className='text-2xl text-[#DB2777]'>★★★★★</p>
                                    Great Quality and Warm! I purchased a winter cap from CapHub, and it exceeded my expectations! The material is soft and keeps me warm even on the coldest days. The fit is perfect, and I love the stylish design. Highly recommend!</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Anish Kumar Sharma</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Full-Stack Devloper</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJJJQn00_ngvzn6C5x6SelwIGTky4Ac_Qmpw&s" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                <p className='text-2xl text-[#DB2777]'>★★★★★</p>
                                    Wide Range of Options CapHub has a great variety of winter caps to choose from. I found exactly what I was looking for, and I appreciate the different styles and colors available. The only reason I didn't give five stars is because some sizes were out of stock.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Rahul Kumar</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYP6N7jVSNsWs34JfdH5iakGjPizqDQPr5AQ&s" />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">
                                <p className='text-2xl text-[#DB2777]'>★★★★★</p>
                                Fast and Reliable Shipping I was pleasantly surprised by how quickly my order arrived. CapHub offers reliable shipping options, and the package was well-protected. I didn't have to worry about any damage during transit. Will definitely order again!
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sandeep Kumar</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Software Devloper</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial