import React from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

const LogisticsCapabilities = () => {
  return (
    <>
      <section className='logistics_capabilities py-[5rem] bg-white'>
        <div className="container px-[20px] lg:px-[50px] w-full">
          <div className="flex flex-wrap gap-4">
            <div className="content_wrap_one w-[60%]">
              <div>
                <Link to={'/services'} className='no-underline text-gray-900 relative w-fit before:absolute before:-bottom-[20%] before:left-0 before:h-[1px] before:bg-gray-900 before:w-full duration-500 hover:before:w-0 before:duration-500 font-[500] text-[20px] flex items-center gap-3'>
                  <span>All Services</span>
                  <FaIcons.FaExternalLinkAlt />
                </Link>
              </div>
              <h1 className='text-gray-800 mt-[50px] font-[700] text-[114px] leading-[114px]'>
                Logistics Capabilities
              </h1>
              <hr className='mt-9' />
              <h3 className='mt-5 text-[32px] text-gray-800 font-[400]'>
                Delivering Possibilities, On Time
              </h3>
              <p className='mt-5 w-full text-gray-700'>
                At Logistica, we are more than just a logistics company – we are the architects of seamless supply chains, the navigators of global trade, and the enablers of business growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LogisticsCapabilities