"use server"
import { countries, Country } from "@/lib/countries";
import { getCollection } from "@/lib/db";
import { Collection } from "mongoose";
import { success, fail, Response } from "./response";

// Function to retrieve countries from the database
export const getCountries = async function (): Promise<Response<Country[]>> {
    const collection: Collection<Country> = await getCollection("countries");
    try {
        const countries = await collection.find({}).toArray();
        return success(countries, "Countries retrieved successfully.");
    } catch (error) {
        console.log("error get countries :",error);
        return fail("Failed to retrieve countries.");
    }
};

// Function to import countries if not already in the database
export const importCountries = async function (): Promise<Response<string>> {
    const collection: Collection<Country> = await getCollection("countries");

    try {
        for (const country of countries) {
            const existingCountry = await collection.findOne({ code: country.code });

            if (!existingCountry) {
                await collection.insertOne(country);
            }
        }
        return success("Countries import completed.", "Countries imported successfully.");
    } catch (error) {
        console.log("error import countries :",error)
        return fail("Failed to import countries.");
    }
};
