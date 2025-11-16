import React from "react";
import { BsQuote } from "react-icons/bs";

const ReviewCard = ({ data }) => {
  const { review, userName, user_photoURL } = data;
  return (
    <div>
      <div className="card  bg-white h-70 shadow-xl p-6 rounded-2xl">
        {/* Quote Icon */}
        <div className="text-blue-300 font-serif mb-4">
          <BsQuote size={60}></BsQuote>
        </div>

        {/* Review Text */}
        <p className="text-gray-700 text-lg mb-6">{review}</p>

        {/* Separator Line */}
        <hr className="border-t-2 border-dashed border-cyan-800 mb-6" />

        {/* Reviewer Info */}
        <div className="flex items-center">
          {/* Avatar */}
          <div className="avatar placeholder mr-4">
            <div className="bg-cyan-900 text-neutral-content rounded-full w-14 h-14">
              {/* You could put initials here or an image */}
              <span className="text-xl">
                <img src={user_photoURL} alt="" />
              </span>
            </div>
          </div>
          <div>
            {/* Reviewer Name */}
            {/* Reviewer Title */}
            <p className=" font-bold text-cyan-900 ">{userName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
