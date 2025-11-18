import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const SendParcel = () => {
  const { data } = useLoaderData();
  const duplicate = data.map((d) => d.region);
  const regions = [...new Set(duplicate)];

  const {
    control,
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  const senderRegion = useWatch({ control, name: "sender_region" });
  const receiverRegion = useWatch({ control, name: "receiver_region" });
  const districtsByRegion = (region) => {
    const regionDistricts = data.filter((d) => d.region === region);
    const district = regionDistricts.map((d) => d.district);
    return district;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const sameDistrict = data.sender_district === data.receiver_district;
    const isDocument = data.parcel_type == "document";
    const parcelWeight = parseFloat(data.parcel_weight);
    console.log(sameDistrict, isDocument, parcelWeight);

    let cost = 0;

    if (isDocument) {
      cost = sameDistrict ? 60 : 80;
    } else {
      if (parcelWeight <= 3) {
        cost = sameDistrict ? 110 : 150;
      } else {
        const mainCharge = sameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = sameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = mainCharge + extraCharge;
      }
    }
    console.log(cost);
    Swal.fire({
      title: "Confirm your order",
      text: `your delivery charge is ${cost}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Confirmed!",
        //   text: "Your confirmation has been received",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="my-10">
      <div className="bg-white rounded-4xl p-10 md:p-15 urbanist">
        <h1 className="text-5xl font-bold text-cyan-950">Send A parcel</h1>
        <p className="text-2xl text-cyan-950 my-6 font-bold">
          Enter your parcel details
        </p>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleSendParcel)}>
          {/* document */}
          <div className="flex gap-6">
            <label className="text-xl flex gap-2 font-semibold">
              <input
                type="radio"
                value="document"
                className="radio radio-success"
                defaultChecked
                {...register("parcel_type")}
              />
              Document
            </label>
            <label className="text-xl flex gap-2 font-semibold">
              <input
                type="radio"
                value="not-document"
                className="radio radio-success"
                {...register("parcel_type")}
              />
              Not- Document
            </label>
          </div>
          {/* parcel info */}
          <div className="my-6">
            <div className="flex flex-col md:flex-row gap-4 md:gap-10">
              <div className="flex flex-col gap-2 w-full">
                <label>Parcel Name</label>
                <input
                  type="text"
                  name="parcel_name"
                  id=""
                  placeholder="Parcel Name"
                  className="input w-full"
                  {...register("parcel_name")}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Parcel Weight (KG)</label>
                <input
                  type="number"
                  name="parcel_weight"
                  id=""
                  placeholder="Parcel Weight"
                  className="input w-full"
                  {...register("parcel_weight")}
                />
              </div>
            </div>
            <div className="divider"></div>
          </div>
          {/* sender info */}
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-4 md:gap-10 w-full">
              <h1 className="text-xl font-bold text-cyan-950">
                Sender Details
              </h1>
              <div className="flex flex-col gap-2 w-full">
                <label>Sender Name</label>
                <input
                  type="text"
                  name="sender_name"
                  id=""
                  placeholder="Sender Name"
                  className="input w-full"
                  {...register("sender_name")}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Sender Address</label>
                <input
                  type="text"
                  name="sender_address"
                  id=""
                  placeholder="Address"
                  className="input w-full"
                  {...register("sender_address")}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Sender Phone No</label>
                <input
                  type="text"
                  name="sender_phone"
                  id=""
                  placeholder="Phone"
                  className="input w-full"
                  {...register("sender_phone")}
                />
              </div>
              <fieldset className="fieldset w-full">
                <label className=" text-[16px]">Region</label>
                <select
                  {...register("sender_region")}
                  defaultValue="Pick a browser"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((region, i) => (
                    <option key={i} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className=" text-[16px]">District</label>
                <select
                  {...register("sender_district")}
                  defaultValue="Pick a browser"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(senderRegion).map((district, i) => (
                    <option key={i} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>
            {/* Receiver Details */}

            <div className="flex flex-col gap-4 md:gap-10 w-full">
              <h1 className="text-xl font-bold text-cyan-950">
                {" "}
                Receiver Details
              </h1>
              <div className="flex flex-col gap-2 w-full">
                <label>Receiver Name</label>
                <input
                  type="text"
                  name="receiver_name"
                  id=""
                  placeholder="Parcel Name"
                  className="input w-full"
                  {...register("receiver_name")}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Receiver Address</label>
                <input
                  type="text"
                  name="receiver_address"
                  id=""
                  placeholder="Address"
                  className="input w-full"
                  {...register("receiver_address")}
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label>Receiver Phone No</label>
                <input
                  type="text"
                  name="Receiver_phone"
                  id=""
                  placeholder="Phone"
                  className="input w-full"
                  {...register("Receiver_phone")}
                />
              </div>

              {/* receiver district */}

              <fieldset className="fieldset w-full">
                <label className=" text-[16px]">Region</label>
                <select
                  {...register("receiver_region")}
                  defaultValue="Pick a browser"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a Region</option>
                  {regions.map((region, i) => (
                    <option key={i} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset w-full">
                <label className=" text-[16px]">District</label>
                <select
                  {...register("receiver_district")}
                  defaultValue="Pick a browser"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a district</option>
                  {districtsByRegion(receiverRegion).map((district, i) => (
                    <option key={i} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </fieldset>
            </div>
          </div>
          <button className="py-3 px-6 text-lg font-bold rounded-lg bg-linear-90 from-primary to-lime-400 hover:bg-linear-0  text-black my-10">
            Proceed to Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
