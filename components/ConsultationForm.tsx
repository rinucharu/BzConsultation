"use client";
import React, { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

type FormState = {
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    date?: string;
    timeZone?: string;
    time?: string;
  };
};

const validateForm = async (
  prevState: FormState,
  formData: FormData,
): Promise<FormState> => {
  const errors: FormState["errors"] = {};

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const date = formData.get("date") as string;
  const timeZone = formData.get("timeZone") as string;
  const time = formData.get("time") as string;

  if (!firstName?.trim()) errors.firstName = "First name is required";
  if (!lastName?.trim()) errors.lastName = "Last name is required";
  if (!email?.trim()) errors.email = "Email is required";
  if (!phone?.trim()) errors.phone = "Phone number is required";
  if (!date) errors.date = "Please select the Date";
  if (!timeZone) errors.timeZone = "Please select the time Zone";
  if (!time || time === "Select Time") errors.time = "Please select a time";

  return { errors };
};

const ConsultationForm = () => {
  const [state, formAction] = useActionState(validateForm, { errors: {} });
  return (
    <section className="py-10 px-4">
      <form action={formAction}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-40">
          {/* col-1 */}
          <div>
            <div className="my-8">
              <div className="mb-5">
                <label className="font-medium">First Name</label>
              </div>

              <Input
                name="firstName"
                type="text"
                placeholder="First Name"
                className="bg-[#EAEAEA] dark:bg-[#101010] font-medium px-5 py-5 w-full mt-4"
              />

              {state?.errors?.firstName && (
                <p className="text-red-500 text-sm mt-2">
                  {state.errors.firstName}
                </p>
              )}
            </div>
            <div className="my-8">
              <div className="mb-5">
                <label className="font-medium">Last Name</label>
              </div>

              <Input
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="bg-[#EAEAEA] px-5 py-5 dark:bg-[#101010]   font-medium w-full mt-4"
              />

              {state?.errors?.lastName && (
                <p className="text-red-500 text-sm mt-2">
                  {state.errors.lastName}
                </p>
              )}
            </div>

            <div className="my-8">
              <div className="mb-5">
                {" "}
                <label className="font-medium">Email Address</label>
              </div>

              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                className=" bg-[#EAEAEA]  font-medium px-5 py-5 w-full mt-4"
              />
              {state?.errors?.email && (
                <p className="text-red-500 text-sm mt-2">
                  {state.errors.email}
                </p>
              )}
            </div>

            <div className="my-8">
              <div className="mb-5">
                {" "}
                <label className="font-medium">Phone Number</label>
              </div>

              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="bg-[#eaeaea]  font-medium px-5 py-5 w-full mt-4"
              />
              {state?.errors?.phone && (
                <p className="text-red-500 text-sm mt-2">
                  {state.errors.phone}
                </p>
              )}
            </div>
          </div>

          {/* col-2 */}
          <div>
            <div className="my-8">
              <div className="m-5">
                {" "}
                <label className="font-medium">Select Date</label>
              </div>

              <Input
                name="date"
                type="date"
                className=" px-5 py-5 bg-[#eaeaea]  font-medium w-full mt-4"
              />

              {state?.errors?.date && (
                <p className="text-red-500 text-sm mt-2">{state.errors.date}</p>
              )}
            </div>

            <div className="mt-8">
              <div className="mb-5">
                {" "}
                <label className="font-medium">Select Time Zone</label>
              </div>

              <select
                dir="ltr"
                name="timeZone"
                className="w-full mt-4 bg-[#eaeaea] px-5 py-4 font-medium dark:bg-[#101010]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select time
                </option>

                <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                <option value="-11:00">
                  (GMT -11:00) Midway Island, Samoa
                </option>
                <option value="-10:00">(GMT -10:00) Hawaii</option>
                <option value="-09:50">(GMT -9:30) Taiohae</option>
                <option value="-09:00">(GMT -9:00) Alaska</option>
                <option value="-08:00">
                  (GMT -8:00) Pacific Time (US & Canada)
                </option>
                <option value="-07:00">
                  (GMT -7:00) Mountain Time (US & Canada)
                </option>
                <option value="-06:00">
                  (GMT -6:00) Central Time (US & Canada), Mexico City
                </option>
                <option value="-05:00">
                  (GMT -5:00) Eastern Time (US & Canada), Bogota, Lima
                </option>
                <option value="-04:50">(GMT -4:30) Caracas</option>
                <option value="-04:00">
                  (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
                </option>
                <option value="-03:50">(GMT -3:30) Newfoundland</option>
                <option value="-03:00">
                  (GMT -3:00) Brazil, Buenos Aires, Georgetown
                </option>
                <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                <option value="-01:00">
                  (GMT -1:00) Azores, Cape Verde Islands
                </option>
                <option value="+00:00">
                  (GMT) Western Europe Time, London, Lisbon, Casablanca
                </option>
                <option value="+01:00">
                  (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
                </option>
                <option value="+02:00">
                  (GMT +2:00) Kaliningrad, South Africa
                </option>
                <option value="+03:00">
                  (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
                </option>
                <option value="+03:50">(GMT +3:30) Tehran</option>
                <option value="+04:00">
                  (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
                </option>
                <option value="+04:50">(GMT +4:30) Kabul</option>
                <option value="+05:00">
                  (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
                </option>
                <option value="+05:50">
                  (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
                </option>
                <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                <option value="+06:00">
                  (GMT +6:00) Almaty, Dhaka, Colombo
                </option>
                <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                <option value="+07:00">
                  (GMT +7:00) Bangkok, Hanoi, Jakarta
                </option>
                <option value="+08:00">
                  (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
                </option>
                <option value="+08:75">(GMT +8:45) Eucla</option>
                <option value="+09:00">
                  (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
                </option>
                <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                <option value="+10:00">
                  (GMT +10:00) Eastern Australia, Guam, Vladivostok
                </option>
                <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                <option value="+11:00">
                  (GMT +11:00) Magadan, Solomon Islands, New Caledonia
                </option>
                <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                <option value="+12:00">
                  (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
                </option>
                <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                <option value="+14:00">
                  (GMT +14:00) Line Islands, Tokelau
                </option>
              </select>

              {state?.errors?.timeZone && (
                <p className="text-red-500 text-sm mt-2">
                  {state.errors.timeZone}
                </p>
              )}
            </div>
            <div className="mt-8">
              <div className="mb-5">
                {" "}
                <label className="font-medium">Select Time</label>
              </div>

              <div className="space-y-3 max-h-[300px] overflow-y-auto  mt-6 flex flex-col items-center">
                {[
                  "Select Time",
                  "9:30 am",
                  "10:00 am",
                  "10:30 am",
                  "11:00 am",
                  "11:30 am",
                  "2:00 pm",
                  "2:30 pm",
                  "3:00 pm",
                  "3:30 pm",
                  "4:00 pm",
                  "4:30 pm",
                  "5:00 pm",
                  "5:30 pm",
                ].map((time) => (
                  <label
                    key={time}
                    className={`block p-3 border-black dark:border-white border md:w-[300px] w-[200px] text-center cursor-pointer 
      dark:hover:bg-[#929292] dark:hover:text-black
      ${time === "Select Time" ? "bg-[#EAEAEA] text-black cursor-not-allowed" : ""}`}
                  >
                    <Input
                      type="radio"
                      name="time"
                      value={time}
                      className="hidden"
                      disabled={time === "Select Time"}
                    />

                    {time}
                  </label>
                ))}
              </div>
              {state?.errors?.time && (
                <p className="text-red-500 text-sm mt-2">{state.errors.time}</p>
              )}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2 mt-">
            {/* captcha logo */}
            <div className="">
              <ReCAPTCHA theme="dark" sitekey="6Le9lpQsAAAAAO0h298D3eJDXb65MTkU3C-pa-uz" />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 mt-16 px-4">
          <Button
            type="submit"
            className="font-bold text-lg sm:text-base md:text-lg 
                     px-8 sm:px-12 py-4  text-white 
                     hover:bg-white hover:text-primary 
                     transition-all duration-500 
                     hover:border-2 hover:border-black"
          >
            Click to Schedule
          </Button>

          <h4 className="text-xl sm:text-2xl md:text-4xl  font-bold">
            Our Team will contact you!
          </h4>
        </div>
      </form>
    </section>
  );
};

export default ConsultationForm;
