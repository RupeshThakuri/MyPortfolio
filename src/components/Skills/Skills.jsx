"use client"

import React, { useEffect } from 'react';
import Glide from "@glidejs/glide";
import Image from 'next/image';

function Skills() {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  //icons for programming languages
  const icons = [
    {
      id: 1,
      icon: "/Images/Logo/whitelogo.png"
    },
    {
      id: 2,
      icon: "/Images/Logo/whitelogo.png"
    },
    {
      id: 3,
      icon: "/Images/Logo/whitelogo.png"
    },
    {
      id: 4,
      icon: "/Images/Logo/whitelogo.png"
    },
    {
      id: 5,
      icon: "/Images/Logo/whitelogo.png"
    },
    {
      id: 6,
      icon: "/Images/Logo/whitelogo.png"
    },
    {
      id: 7,
      icon: "/Images/Logo/whitelogo.png"
    },
    {
      id: 8,
      icon: "/Images/Logo/whitelogo.png"
    },
  ]

  return (
    <>
      <section id="skills">
        <div className='box_border overflow-hidden bg-[#18181B] py-10'>
          <h2 className='text-center text-3xl font-bold sm:text-4xl'>Programming Languages</h2>
          {/*<!-- Component: Testimonial carousel --> */}
          <div className="glide-09 relative w-full mt-9">
            {/* <!-- Slides --> */}
            <div data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                <li>
                  <Image
                    src="/Images/Logo/whitelogo.png"
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                    alt='GlideImg'
                    width={100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="/Images/Logo/whitelogo.png"
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                    alt='GlideImg'
                    width={100}
                    height={100}
                  />
                </li>
                <li>
                  <Image
                    src="/Images/Logo/whitelogo.png"
                    alt='GlideImg'
                    width={100}
                    height={100}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
                <li>
                  <Image
                    src="/Images/Logo/whitelogo.png"
                    alt='GlideImg'
                    width={100}
                    height={100}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
                <li>
                  <Image
                    src="/Images/Logo/whitelogo.png"
                    alt='GlideImg'
                    width={100}
                    height={100}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
                <li>
                  <Image
                    src="/Images/Logo/whitelogo.png"
                    alt='GlideImg'
                    width={100}
                    height={100}
                    className="m-auto h-20 max-h-full w-auto max-w-full"
                  />
                </li>
              </ul>
            </div>
          </div>
          {/*<!-- End Testimonial carousel --> */}
        </div>
      </section>
    </>
  )
}

export default Skills
