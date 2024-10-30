import type { NextApiRequest, NextApiResponse } from 'next';
import { getCollection } from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { countryName, cultureData } = req.body;

  if (!countryName || !cultureData) {
    return res.status(400).json({ message: 'Country name and culture data are required' });
  }

  try {
    const collection = await getCollection('cultures');
    await collection.insertOne({ countryName, cultureData });
    return res.status(200).json({ message: 'Culture data added successfully' });
  } catch (error) {
    console.error('Error inserting culture data:', error);
    return res.status(500).json({ message: 'Failed to insert culture data' });
  }
}
