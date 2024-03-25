"use client";
import { useState } from 'react';
const TrackingForm = () => {
  const [trackingId, setTrackingId] = useState('');

  const handleInputChange = (event) => {
    setTrackingId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //  send the tracking ID to the server
    console.log("Tracking ID:", trackingId);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div>
          <label htmlFor="trackingId" className="block text-sm font-medium text-gray-700">
            Tracking ID
          </label>
          <div className="mt-1">
            <input
              id="trackingId"
              name="trackingId"
              type="text"
              autoComplete="trackingId"
              required
              value={trackingId}
              onChange={handleInputChange}
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-transperent hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            TRACK & TRACE
          </button>
        </div>
      </form>
    </div>
  );
};

export default TrackingForm;
