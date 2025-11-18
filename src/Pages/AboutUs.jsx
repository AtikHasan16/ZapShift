import React from "react";

const AboutUs = () => {
  return (
    <div className="urbanist p-10 md:p-20 bg-white rounded-2xl my-10 ">
      <div>
        <h1 className="text-4xl font-bold text-cyan-950">About Us</h1>
        <p className="py-5 w-8/12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        <div className="divider"></div>
        <div>
          {/* name of each tab group should be unique */}
          <div className="tabs">
            <input
              type="radio"
              name="my_tabs_3"
              className="tab text-xl font-bold"
              aria-label="Story"
            />
            <div className="tab-content  p-6">
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time.
            </div>

            <input
              type="radio"
              name="my_tabs_3"
              className="tab  text-xl font-bold"
              aria-label="Mission"
              defaultChecked
            />
            <div className="tab-content  p-6">
              make parcel delivery fast, reliable, and stress-free. Over the
              years, our commitment to real-time tracking, efficient logistics,
              and customer-first service has made us a trusted partner for
              thousands. Whether it's a personal gift or a time-sensitive
              business delivery, we ensure it reaches its destination — on time,
              every time.
            </div>

            <input
              type="radio"
              name="my_tabs_3"
              className="tab  text-xl font-bold"
              aria-label="Success"
            />
            <div className="tab-content  p-6">
              We started with a simple promise — to make parcel delivery fast,
              reliable, and stress-free. Over the years, our commitment to
              real-time tracking, efficient logistics, and customer-first
              service has made us a trusted partner for thousands. Whether it's
              a personal gift or a time-sensitive business delivery, we ensure
              it reaches its destination — on time, every time.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
