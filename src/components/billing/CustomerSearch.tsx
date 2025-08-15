import React from 'react';

const CustomerSearch = () => {
  return (
    <div className="mb-6">
      <label htmlFor="customer-search" className="block text-lg font-medium mb-2">
        Customer
      </label>
      <input
        type="text"
        id="customer-search"
        placeholder="Search for a customer by name or phone..."
        className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 focus:ring-cyan-500 focus:border-cyan-500"
      />
    </div>
  );
};

export default CustomerSearch;
