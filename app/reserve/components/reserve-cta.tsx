"use client";

export default function ReserveCta() {
  return (
    <div className="mt-10 flex flex-wrap justify-between">
      <input
        type="text"
        className="ml-2nded p-3 md:p-5 w-full md:w-56 mb-4 rounded-xl"
        placeholder="First name"
      />
      <input
        type="text"
        className="ml-2nded p-3 md:p-5 w-full md:w-56 mb-4 rounded-xl"
        placeholder="Last name"
      />
      <input
        type="text"
        className="ml-2nded p-3 md:p-5 w-full md:w-56 mb-4 rounded-xl"
        placeholder="Phone number"
      />
      <input
        type="text"
        className="ml-2nded p-3 md:p-5 w-full md:w-56 mb-4 rounded-xl"
        placeholder="Email"
      />
      <input
        type="text"
        className="ml-2nded p-3 md:p-5 w-full md:w-56 mb-4 rounded-xl"
        placeholder="Occasion (optional)"
      />
      <input
        type="text"
        className="ml-2nded p-3 md:p-5 w-full md:w-56 mb-4 rounded-xl"
        placeholder="Requests (optional)"
      />
      <button
        className="
      bg-blue-600 w-full p-3 text-white
      font-bold rounded-xl disabled:bg-gray-300"
      >
        Complete reservation
      </button>
      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </div>
  );
}
