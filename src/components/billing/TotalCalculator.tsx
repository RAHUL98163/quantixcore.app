import React from 'react';

interface TotalCalculatorProps {
  totals: {
    subtotal: number;
    gst: number;
    grandTotal: number;
  };
}

const TotalCalculator: React.FC<TotalCalculatorProps> = ({ totals }) => {
  return (
    <div className="w-full md:w-1/3 ml-auto bg-gray-700 p-4 rounded-lg">
      <div className="flex justify-between mb-2">
        <span className="text-gray-400">Subtotal</span>
        <span className="font-mono">₹{totals.subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-400">GST (18%)</span>
        <span className="font-mono">₹{totals.gst.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-600 my-2"></div>
      <div className="flex justify-between font-bold text-lg">
        <span>Grand Total</span>
        <span className="font-mono text-cyan-400">₹{totals.grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default TotalCalculator;
