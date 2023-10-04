/* eslint-disable react/no-unescaped-entities */

import React from 'react'; // Import React
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';




const reviews = [
    {
      id: 1,
      name: "Dianne Russell",
      company: "Starbucks",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      photo: "/src/assets/Avatar1.png",
    },
    {
      id: 2,
      name: "Kristin Watson",
      company: "Louis Vuitton",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      photo: "/src/assets/Avatar2.png",
    },
    {
      id: 3,
      name: "Kathryn Murphy",
      company: "McDonald's",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      photo: "/src/assets/Avatar3.png",
    },
    {
      id: 4,
      name: "Dianne Russell",
      company: "Starbucks",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      photo: "/src/assets/Avatar1.png",
    },
    {
      id: 5,
      name: "Kristin Watson",
      company: "Louis Vuitton",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      photo: "/src/assets/Avatar2.png",
    },
    {
      id: 6,
      name: "Kathryn Murphy",
      company: "McDonald's",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
      photo: "/src/assets/Avatar3.png",
    },
  ];

const ReviewCard = () => {
 

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      className="mySwiper -z-0"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.id} className='border border-[#006B6A] p-8 rounded'>
          <div>
            <img src="/src/assets/starts.png" alt="" className='h-4' />
            <p className='my-5'>" {review.comment}</p>
            <div className='flex gap-4 items-center'>
              <img src={review.photo} alt="" className='h-10' />
              <div>
                <p>{review.name}</p>
                <p className='text-sm'>{review.company}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCard;
