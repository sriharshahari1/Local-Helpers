import React from 'react'
import {
    Button,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Carousel,
    IconButton
} from "@material-tailwind/react";
import illustration from '../assets/homepage_illustration.png'
import dom_workers from '../assets/domestic workers.png'
import ofc_workers from '../assets/office workers.png'
import expats_workers from '../assets/expats workers.png'
import driver from '../assets/permanent driver.png'
import healthcare from '../assets/healthcare workers.png'
import store from '../assets/store workers.png'
import school from '../assets/school workers.png'
import arrow from '../assets/arrow.png'
import bckgrnd from '../assets/about_us_bckgrnd.png'
import people_using_site from '../assets/People_using_the_site.png'
import bag from '../assets/bag.png'
import cursor from '../assets/cursor.png'
import shield from '../assets/shield.png'
import workers_climbing from '../assets/workers_climbing.png'
import quotation_mark from '../assets/quotation_mark.png'
import quotation_mark_2 from '../assets/quotation_mark_2.png'
import rating from '../assets/rating.png'
import two_lines from '../assets/shapes/2 lines.png'
import double_squiggle from '../assets/shapes/double squiggle.png'
import squiggle from '../assets/shapes/squiggle.png'
import double_squiggle_down from '../assets/shapes/double squiggle down.png'
import two_squiggle from '../assets/shapes/two_squiggle.png'
import fb from '../assets/social_icons/fb_icon.png'
import twitter from '../assets/social_icons/x_icon.png'
import yt from '../assets/social_icons/yt_icon.png'
import mail from '../assets/social_icons/mail_icon.png'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"





export default function homePage() {

    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    function Icon({ id, open }) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="orange"
                className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        );
    }

    return (
        <div className='homePage font-poppins'>
            <div className='navBar mx-10 mt-5 flex justify-between items-center'>
                <div className='navBar_left text-xl font-semibold'>
                    Logo
                </div>
                <div className='navBar_mid flex items-center'>
                    <Button variant='text' className='home_button mx-3 text-sm capitalize font-poppins font-medium rounded-full'>Home</Button>
                    <Button variant='text' className='about_button mx-3 text-sm capitalize font-poppins font-medium rounded-full'>About</Button>
                    <Button variant='text' className='contact_button mx-3 text-sm capitalize font-poppins font-medium rounded-full'>Contact</Button>
                    <Button variant='text' className='pricing_button mx-3 text-sm capitalize font-poppins font-medium rounded-full'>Pricing</Button>
                </div>
                <Button className='navBar_right capitalize font-poppins font-medium bg-[#ff9c58] text-white text-sm px-9 py-3 rounded-full'>
                    Login
                </Button>
            </div>



            <div className='main_caption flex flex-col items-center font-medium'>
                <div className='line1 text-lg text-[#ff9c58] mt-16 mb-5'>Get started for free</div>
                <div className='line2 text-5xl font-semibold my-1'>Find and Hire Verified</div>
                <img src={squiggle} className='mr-96 -ml-24'/>
                <div className='line2 text-5xl font-semibold mt-3 mb-5'>Local <span className='text-[#ff9c58]'>Helpers!</span></div>
                <div className='two_buttons flex items-center'>
                    <Button className='hire_button capitalize font-poppins font-medium bg-[#ff9c58] text-white text-sm px-11 py-3 rounded-full'>Hire now</Button>
                    <Button className='watch_button capitalize font-poppins font-medium mx-3 flex items-center border-2 border-gray-300 bg-white text-black text-sm px-6 py-3 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ff9c58" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                        <span className='font-semibold ml-3'>
                            Watch how it works
                        </span>
                    </Button>
                </div>
                <div className='line3 text-sm py-8 text-gray-600'>Join over 200+ Successful service</div>
            </div>
            <div className='illustration flex justify-center ml-10'>
                <img src={illustration} />
            </div>



            <div className='explore_section font-medium bg-[#eefcff] flex flex-col items-center'>
                <div className='heading text-lg text-[#ff9c58] mt-16 mb-5'>Services</div>
                <div className='big_heading text-5xl my-1'>Explore 20+ Workers</div>
                <img src={two_squiggle} className='mt-2 mb-16'/>
                <div className='tiles mt-10 w-full'>
                    <div className='tiles_row1 flex justify-around'>
                        <div className='tiles_row1_no1 bg-white flex flex-col items-center justify-around w-72 h-60'>
                            <img src={dom_workers} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>Domestic Workers</span>
                                <span className='font-normal text-sm'>Occupation description</span>
                            </div>
                        </div>
                        <div className='tiles_row1_no2 bg-white flex flex-col items-center justify-around w-72 h-60'>
                            <img src={ofc_workers} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>Office Workers</span>
                                <span className='font-normal text-sm'>Occupation description</span>
                            </div>
                        </div>
                        <div className='tiles_row1_no3 bg-white flex flex-col items-center justify-around w-72 h-60'>
                            <img src={expats_workers} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>Expats Workers</span>
                                <span className='font-normal text-sm'>Occupation description</span>
                            </div>
                        </div>
                        <div className='tiles_row1_no4 bg-white flex flex-col items-center justify-around w-72 h-60'>
                            <img src={driver} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>Permanent Driver</span>
                                <span className='font-normal text-sm'>Occupation description</span>
                            </div>
                        </div>
                    </div>
                    <div className='tiles_row2 mb-44 flex justify-around mt-12'>
                        <div className='tiles_row2_no1 bg-white flex flex-col items-center justify-around w-72 h-60'>
                            <img src={healthcare} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>Healthcare Workers</span>
                                <span className='font-normal text-sm'>Occupation description</span>
                            </div>
                        </div>
                        <div className='tiles_row2_no2 bg-white flex flex-col items-center justify-around w-72 h-60'>
                            <img src={store} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>Store Workers</span>
                                <span className='font-normal text-sm'>Occupation description</span>
                            </div>
                        </div>
                        <div className='tiles_row2_no3 bg-white flex flex-col items-center justify-around w-72 h-60'>
                            <img src={school} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>School Workers</span>
                                <span className='font-normal text-sm'>Occupation description</span>
                            </div>
                        </div>
                        <div className='tiles_row2_no4 bg-white border border-[#ff9c58] drop-shadow-lg
                         flex flex-col items-center justify-center w-72 h-60 rounded-md'
                            style={{
                                boxShadow: '4px 4px 0 0 rgb(60, 60, 60)'
                            }}>
                            <span className='mb-5 text-4xl'>20</span>
                            <span className='mb-9 text-sm'>More Categories</span>
                            <img src={arrow} />
                        </div>
                    </div>
                </div>
            </div>



            <div id='hello' className='about_us flex flex-col items-center justify-center font-medium bg-cover h-screen' style={{ backgroundImage: `url(${bckgrnd})` }}>
                <div className='about_us_heading mt-16 mb-10 text-5xl'>About Us</div>
                <div className='about_us_content flex flex-col items-center justify-center font-normal text-xl'>
                    <span className='mb-2'>As the name suggests, Verify Now helps you find workers near you.</span>
                    <span className='mb-2'>Verify Now uses technology and a lot of groundwork to help you</span>
                    <span className='mb-2'>connect directly with workers without any middlemen or</span>
                    <span className='mb-16'>commissions.</span>
                </div>
                <div className='Founder_block flex flex-col items-center justify-center'>
                    <span className='font-semibold text-xl'>Mr. Narayan Swaroop</span>
                    <span className='text-gray-600 mb-16'>Founder</span>
                </div>
            </div>



            <div className='statistics_and_image_section'>
                <div className='statictics flex justify-around font-medium'>
                    <div className='flex flex-col items-center'>
                        <span className='text-5xl text-[#ff9c58] mb-1'>2000+</span>
                        <span>Serviced</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-5xl text-[#1cd3c2] mb-1'>123</span>
                        <span>Countires Impacted</span>
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='text-5xl text-[#ff9c58] mb-1'>100+</span>
                        <span>workers</span>
                    </div>
                    <div className='flex flex-col items-center mb-56'>
                        <span className='text-5xl text-[#ee252a] mb-1'>918+</span>
                        <span>Successful Projects</span>
                    </div>
                </div>
                <div className='image_section bg-no-repeat bg-center bg-contain h-screen flex flex-col items-center mb-24'
                    style={{ backgroundImage: `url(${people_using_site})` }}>
                    <div className='flex flex-col mt-28 ml-32'>
                        <div className='text-white text-3xl font-medium'>India's First Tenant Screening</div>
                        <div className='text-white text-3xl mb-4'>Platform Available.</div>
                        <Button className="rounded-full text-[#ff9c58] bg-white capitalize font-poppins font-medium text-sm w-36">Verify Now</Button>
                    </div>
                    <img src={double_squiggle_down} className='ml-28 -mt-6'/>
                </div>
            </div>



            <div className='reasons_section bg-[#eefcff] flex justify-around'>
                <div className='icons flex mx-24 my-24'>
                    <div className='tiles_col1 mr-12'>
                        <div className='tiles_col1_no1 mb-12 bg-white flex flex-col items-center justify-around w-52 h-44 rounded-md hover:border border-gray-800'>
                            <img src={ofc_workers} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>Office Workers</span>
                            </div>
                        </div>
                        <div className='tiles_col1_no2 bg-white flex flex-col items-center justify-around w-52 h-44 rounded-md hover:border border-gray-800'>
                            <img src={dom_workers} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>Domestic Workers</span>
                            </div>
                        </div>
                    </div>
                    <div className='tiles_col2 mt-36'>
                        <div className='tiles_col2_no1 mb-12 bg-white flex flex-col items-center justify-around w-52 h-44 rounded-md hover:border border-gray-800'>
                            <img src={healthcare} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>Healthcare Workers</span>
                            </div>
                        </div>
                        <div className='tiles_col2_no2 bg-white flex flex-col items-center justify-around w-52 h-44 rounded-md hover:border border-gray-800'>
                            <img src={store} />
                            <div className='captions flex flex-col items-center'>
                                <span className='font-semibold mb-2'>Store Workers</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='reasons my-6 mr-24 font-medium'>
                    <div className='heading text-[#ff9c58] mt-16 mb-5'>Services</div>
                    <div className='about_us_heading mb-10 text-5xl'>What Makes Verify <br />Now Best</div>
                    <div>
                        <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="mb-5 rounded-lg drop-shadow-sm bg-white px-4">
                            <AccordionHeader onClick={() => handleOpen(1)} className={`border-b-0`}>
                                <div className='flex items-center'>
                                    <img src={bag} className='w-6 h-auto mb-2' />
                                    <span className='font-poppins font-semibold ml-6'>Lowest Price</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody className={`ml-12 font-poppins text-black`}>
                                Get the best value for your investment with our unbeatable prices. We offer top-quality manpower solutions that won't break the bank.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="mb-5 rounded-lg drop-shadow-sm bg-white px-4">
                            <AccordionHeader onClick={() => handleOpen(2)} className={`border-b-0`}>
                                <div className='flex items-center'>
                                    <img src={cursor} className='w-6 h-auto mb-2' />
                                    <span className='font-poppins font-semibold ml-6'>Fast Process</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody className={`ml-12 font-poppins text-black`}>
                                Experience swift and seamless service delivery. Our streamlined processes ensure you get the right talent exactly when you need them.
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="mb-5 rounded-lg drop-shadow-sm bg-white px-4">
                            <AccordionHeader onClick={() => handleOpen(3)} className={`border-b-0`}>
                                <div className='flex items-center'>
                                    <img src={shield} className='w-6 h-auto mb-2' />
                                    <span className='font-poppins font-semibold ml-6'>Guaranteed Services</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody className={`ml-12 font-poppins text-black`}>
                                Trust in our commitment to excellence. We guarantee reliable, high-standard services that meet your specific needs and exceed expectations.
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </div>



            <div className='rating_section font-medium mt-36 flex justify-around'>
                <div className='rating_left mt-24'>
                    <div className='rating_heading flex flex-col mb-10 text-5xl'>
                        <span>Check out how we work</span>
                        <span className='text-[#ff9c58] font-bold'>Verify Yourself</span>
                    </div>
                    <div className='flex mt-20'>
                        <img src={double_squiggle} className='-ml-16 object-none' />
                        <div className='ml-24'>
                            <img src={quotation_mark} />
                            <div className='mt-8 mb-8 text-3xl font-normal'>
                                <span>We've 9,000 Verified Workers <br /> around the country, Find workers <br /> near your neighborhood.</span>
                            </div>
                            <Button className="rounded-full bg-[#ff9c58] text-white capitalize font-poppins font-medium text-sm w-36">Verify Now</Button>
                        </div>
                    </div>
                </div>
                <div className='rating_right'>
                    <img src={workers_climbing} className='object-none' />
                </div>
            </div>
            <div className='flex justify-end mr-36 mt-16'>
                <img src={two_lines} />
            </div>
            <div className='carousel_heading flex justify-center'>
                <span className='mt-44 text-5xl font-medium'>Client Feedback</span>
            </div>



            <Carousel className="font-medium" prevArrow={({ handlePrev }) => (
                <IconButton
                    variant="text"
                    color="orange"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                        />
                    </svg>
                </IconButton>
            )}
                nextArrow={({ handleNext }) => (
                    <IconButton
                        variant="text"
                        color="orange"
                        size="lg"
                        onClick={handleNext}
                        className="!absolute top-2/4 !right-4 -translate-y-2/4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                        </svg>
                    </IconButton>
                )}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-[#ff9c58]" : "w-4 bg-gray-400"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <div className='w-full h-auto flex justify-center items-center'>
                    <div className='bg-white drop-shadow-lg flex flex-col mt-24 mb-24 rounded-md'>
                        <div className='flex justify-between mt-12'>
                            <div>
                                <span className='mx-16 text-2xl'>Very Solid!!</span>
                                <img src={rating} className='w-28 h-auto mt-2 mx-16 mb-12' />
                            </div>
                            <div>
                                <img src={quotation_mark_2} className='mr-6' />
                            </div>
                        </div>
                        <span className='mx-16 text-lg mb-6 font-normal'>They not only understand what I say but <br />
                            read between the lines and also give me <br />
                            ideas of my own.</span>
                        <span className='mx-16 mb-12 font-semibold text-sm'>Rashed Kabir,<span className='font-normal text-gray-600'> California</span></span>
                    </div>
                </div>
                <div className='w-full h-auto flex justify-center items-center'>
                    <div className='bg-white drop-shadow-lg flex flex-col mt-24 mb-24 rounded-md'>
                        <div className='flex justify-between mt-12'>
                            <div>
                                <span className='mx-16 text-2xl'>Top-Notch Service!</span>
                                <img src={rating} className='w-28 h-auto mt-2 mx-16 mb-12' />
                            </div>
                            <div>
                                <img src={quotation_mark_2} className='mr-6' />
                            </div>
                        </div>
                        <span className='mx-16 text-lg mb-6 font-normal'>Outstanding experience! The crew provided by<br /> this company was efficient,
                            hardworking, and very<br /> easy to work with. They handled our needs seamlessly<br /> and delivered fantastic results.</span>
                        <span className='mx-16 mb-12 font-semibold text-sm'>Emma L.,<span className='font-normal text-gray-600'> London</span></span>
                    </div>
                </div>
                <div className='w-full h-auto flex justify-center items-center'>
                    <div className='bg-white drop-shadow-lg flex flex-col mt-24 mb-24 rounded-md'>
                        <div className='flex justify-between mt-12'>
                            <div>
                                <span className='mx-16 text-2xl'>Reliable and Efficient</span>
                                <img src={rating} className='w-28 h-auto mt-2 mx-16 mb-12' />
                            </div>
                            <div>
                                <img src={quotation_mark_2} className='mr-6' />
                            </div>
                        </div>
                        <span className='mx-16 text-lg mb-6 font-normal'>Getting the manpower we needed was a breeze <br />
                            thanks to the user-friendly website. Highly <br /> recommended for a hassle-free experience!"

                        </span>
                        <span className='mx-16 mb-12 font-semibold text-sm'>Maya Sharma,<span className='font-normal text-gray-600'> Mumbai</span></span>
                    </div>
                </div>
            </Carousel>



            <div className='faq font-medium mt-24 mb-24 mx-96 flex flex-col items-center'>
                <div className='title flex flex-col items-center'>
                    <span className='mb-5 text-5xl font-medium'>Frequently Asked Questions</span>
                    <span className='mb-12 text-gray-600'>Everything you need to know about the product and billing.</span>
                </div>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)} className='font-poppins'>Is there a free trial available?</AccordionHeader>
                    <AccordionBody className='font-poppins'>
                        Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized
                        30-minute onboarding call to get you up and running as soon as possible.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)} className='font-poppins'>
                        Can I change my plan later?
                    </AccordionHeader>
                    <AccordionBody className='font-poppins'>
                        To be decided.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)} className='font-poppins'>
                        What is your cancellation policy?
                    </AccordionHeader>
                    <AccordionBody className='font-poppins'>
                        To be decided.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(4)} className='font-poppins'>
                        Can other info be added to an invoice?
                    </AccordionHeader>
                    <AccordionBody className='font-poppins'>
                        To be decided.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className='font-poppins'>
                    <AccordionHeader onClick={() => handleOpen(5)}>
                        How does billing work?
                    </AccordionHeader>
                    <AccordionBody className='font-poppins'>
                        To be decided.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(6)} className='font-poppins'>
                        How do I change my account email?
                    </AccordionHeader>
                    <AccordionBody className='font-poppins'>
                        To be decided.
                    </AccordionBody>
                </Accordion>
            </div>



            <div class="boreder_line border-t border-black"></div>
            <div className='footer mt-12 mb-12 flex justify-around items-center'>
                <div className='text-5xl font-medium'>Verify Now</div>
                <div className='flex w-72 justify-around items-center'>
                    <img src={fb} className='w-6 h-6'/>
                    <img src={twitter} className='w-6 h-6'/>
                    <img src={yt} className='w-6 h-6'/>
                </div>
                <div className='flex justify-center items-center'>
                    <img src={mail} className='w-9 h-9'/>
                    <span className='ml-6'>support@verifynow.com</span>
                </div>
            </div>
        </div>
    )
}
