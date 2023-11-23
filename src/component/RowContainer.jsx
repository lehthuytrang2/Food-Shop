import React from 'react'
import { heroProductData as heroData } from '../utils/data'
const RowContainer = () => {
  return (
    // <div className="flex w-full h-full absolute top-0 left-0 lg:px-32 py-4 items-center justify-center flex-wrap gap-4">
    <div className="flex w-full h-full top-0 left-0 lg:px-32 py-4 items-center justify-center flex-wrap gap-4">
      {heroData.map(n => (
        <div className="flex lg:w-275 p-4 bg-red-200 backdrop:blur-md rounded-md items-center justify-center">
          <img className='w-20 lg:w-32 mr-2 ' src={n.imageSrc} alt="i1" />
          <div>
            <p className="text-base lg:text-lg mt-2 lg:mt-4 font-semibold text-textColor my-1">
              {n.name} </p>
            <p className="text-[13px] font-semibold text-lighttextGray my-1 lg:my-3" >
              {n.description}
            </p>
            <p className="text-sm font-semibold text-headingColor"
            >{n.price}
              <span className="text-ts text-red-600"> đồng</span>
            </p>
          </div>

        </div>
      ))}
    </div>

  )
}

export default RowContainer