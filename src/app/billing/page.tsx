"use client"; // Mark this as a client component

import React, 'react';
import CustomerSearch from '@/components/billing/CustomerSearch';
import BillItemRow from '@/components/billing/BillItemRow';
import TotalCalculator from '@/components/billing/TotalCalculator';
import { BillItem } from '@/types/billing';

// Function to generate a unique ID
const generateUniqueId = () => `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

const BillingPage = () => {
  const [billItems, setBillItems] = React.useState<BillItem[]>([
    { id: generateUniqueId(), partNumber: '', brand: '', mrp: 0, quantity: 1 },
  ]);
  const [totals, setTotals] = React.useState({ subtotal: 0, gst: 0, grandTotal: 0 });

  const handleAddItem = () => {
    setBillItems([
      ...billItems,
      { id: generateUniqueId(), partNumber: '', brand: '', mrp: 0, quantity: 1 },
    ]);
  };

  const handleUpdateItem = (id: string, updatedField: Partial<BillItem>) => {
    setBillItems(
      billItems.map((item) =>
        item.id === id ? { ...item, ...updatedField } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setBillItems(billItems.filter(item => item.id !== id));
  };

  React.useEffect(() => {
    const subtotal = billItems.reduce((acc, item) => acc + item.mrp * item.quantity, 0);
    const gst = subtotal * 0.18; // Assuming 18% GST
    const grandTotal = subtotal + gst;
    setTotals({ subtotal, gst, grandTotal });
  }, [billItems]);

  const handleGeneratePdf = () => {
    // In a real app, this would trigger a PDF generation service
    const billData = {
      items: billItems,
      totals,
    };
    console.log("Generating PDF with data:", billData);
    alert("PDF generation is not implemented yet. Bill data has been logged to the console.");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-cyan-400">New Bill</h1>
        <p className="text-gray-400">Create a new invoice for a customer.</p>
      </header>

      <div className="bg-gray-800 p-8 rounded-lg">
        <form>
          <CustomerSearch />

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Bill Items</h2>
            <div className="grid grid-cols-12 gap-4 mb-2 text-gray-400 px-2">
              <div className="col-span-4">Part Number</div>
              <div className="col-span-2">Brand</div>
              <div className="col-span-2">MRP</div>
              <div className="col-span-1">Qty</div>
              <div className="col-span-2 text-right">Amount</div>
              <div className="col-span-1"></div> {/* For remove button */}
            </div>

            <div className="space-y-2">
              {billItems.map((item) => (
                <BillItemRow
                  key={item.id}
                  item={item}
                  onUpdate={handleUpdateItem}
                  onRemove={handleRemoveItem}
                />
              ))}
            </div>
             <button
                type="button"
                onClick={handleAddItem}
                className="mt-4 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                + Add another item
              </button>
          </div>

          <div className="border-t border-gray-700 my-8"></div>

          <TotalCalculator totals={totals} />

          <div className="flex justify-end mt-8">
            <button
                type="button"
                onClick={handleGeneratePdf}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-8 text-lg rounded-lg"
              >
                Create & Send Bill
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingPage;
