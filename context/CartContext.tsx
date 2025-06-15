"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Input from "@/components/ui/input";
import { toast } from "sonner";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "RAMSHA ELAHI",
    email: "ramshaelah111@gmail.com",
    address: "123",
    city: "karachi",
    postalCode: "2345",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.country) {
      toast.error("Please select a country");
      return;
    }
    toast.success(`Order placed for ${formData.country}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Shipping Information</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <Label>Full Name</Label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        {/* Email Field */}
        <div>
          <Label>Email</Label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>

        {/* Address Field */}
        <div>
          <Label>Address</Label>
          <Input
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
        </div>

        {/* City Field */}
        <div>
          <Label>City</Label>
          <Input
            value={formData.city}
            onChange={(e) => setFormData({...formData, city: e.target.value})}
          />
        </div>

        {/* Postal Code Field */}
        <div>
          <Label>Postal Code</Label>
          <Input
            value={formData.postalCode}
            onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
          />
        </div>

        {/* Country Field - Using Native Select */}
        <div>
          <Label>Country</Label>
          <select
            value={formData.country}
            onChange={(e) => setFormData({...formData, country: e.target.value})}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="">Select Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="UAE">United Arab Emirates</option>
            <option value="India">India</option>
          </select>
          
          {/* Debug display */}
          <p className="text-sm text-gray-500 mt-2">
            Selected: {formData.country || "None"}
          </p>
        </div>

        <Button type="submit" className="w-full">
          Place Order
        </Button>
      </form>
    </div>
  );
};

export default CheckoutPage;