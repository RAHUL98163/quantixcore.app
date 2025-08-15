import React from 'react';
import { BillItem } from '@/types/billing';

interface BillItemRowProps {
  item: BillItem;
  onUpdate: (id: string, updatedField: Partial<BillItem>) => void;
  onRemove: (id: string) => void;
}

const BillItemRow: React.FC<BillItemRowProps> = ({ item, onUpdate, onRemove }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Convert to number if the field is mrp or quantity
    const newValue = (name === 'mrp' || name === 'quantity') ? parseFloat(value) || 0 : value;
    onUpdate(item.id, { [name]: newValue });
  };

  const amount = (item.mrp * item.quantity).toFixed(2);

  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      <div className="col-span-4">
        <input
          type="text"
          name="partNumber"
          value={item.partNumber}
          onChange={handleInputChange}
          placeholder="Part Number"
          className="w-full bg-gray-700 rounded-md p-2 border border-gray-600"
        />
      </div>
      <div className="col-span-2">
        <input
          type="text"
          name="brand"
          value={item.brand}
          onChange={handleInputChange}
          placeholder="Brand"
          className="w-full bg-gray-700 rounded-md p-2 border border-gray-600"
        />
      </div>
      <div className="col-span-2">
        <input
          type="number"
          name="mrp"
          value={item.mrp}
          onChange={handleInputChange}
          placeholder="MRP"
          className="w-full bg-gray-700 rounded-md p-2 border border-gray-600"
        />
      </div>
      <div className="col-span-1">
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={handleInputChange}
          className="w-full bg-gray-700 rounded-md p-2 border border-gray-600"
        />
      </div>
      <div className="col-span-2 text-right font-mono pr-2">
        ₹{amount}
      </div>
      <div className="col-span-1 text-center">
        <button type="button" onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-400 text-2xl font-bold">
          &times;
        </button>
      </div>
    </div>
  );
};

export default BillItemRow;
