import { getCollection } from "./db";

// Fetch cultural data for a specific country
export const fetchCultureData = async (countryName: string) => {
  const collection = await getCollection("culture");
  return await collection.findOne({ countryName });
};

// Insert new cultural data for a country
export const insertCultureData = async (countryName: string, cultureData: { key: string; value: string }[]) => {
  const collection = await getCollection("culture");
  await collection.insertOne({ countryName, cultureData });
};

// Update cultural data for a country
export const updateCultureData = async (countryName: string, cultureData: { key: string; value: string }[]) => {
  const collection = await getCollection("culture");
  await collection.updateOne(
    { countryName },
    { $set: { cultureData } }
  );
};

// Delete cultural data for a country
export const deleteCultureData = async (countryName: string) => {
  const collection = await getCollection("culture");
  await collection.deleteOne({ countryName });
};
