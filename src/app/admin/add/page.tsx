'use client'
import CultureForm from '@/components/CultureForm';
import React from 'react';
import axios from 'axios';

type Props = {};

export default function AddCulture({}: Props) {
  // Handle submission of the culture data to the backend API
  const handleSubmit = async (cultureData: { key: string; value: string }[]) => {
    try {
      // Send a POST request to the API route with the culture data
      const response = await axios.post('/api/addCulture', {
        countryName: 'USA',  // Replace with a selected country if dynamic
        cultureData
      });

      if (response.status === 200) {
        alert('Culture data added successfully');
      } else {
        alert('Failed to add culture data');
      }
    } catch (error) {
      console.error("Error adding culture data:", error);
      alert('An error occurred while adding culture data');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Add Culture</h1>
      <CultureForm onSubmit={handleSubmit} />
    </div>
  );
}
