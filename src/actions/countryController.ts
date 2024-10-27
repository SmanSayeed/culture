"use server"

import { getCollection } from "@/lib/db"

export const getCountries = async function () {
    const collection = await getCollection("countries")
    const todos = await collection.find({}).toArray()
    return todos
}