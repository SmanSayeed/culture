"use server"
import { getCollection } from "@/lib/db";
import { Collection } from "mongoose";
import { success, fail, Response } from "./response";

// Function to retrieve countries from the database
export const insertData = async function (){
    try {
        // insert  data in mongodb
      } catch (error) {
          console.log("insert error :",error)
          return fail("Failed to insert.");
      }
};

// Function to import countries if not already in the database
export const fetchData = async function () {

    try {
      // fetch data from mongodb
    } catch (error) {
        console.log("fetch error :",error)
        return fail("Failed to fetch.");
    }
};

export const editData = async function () {

    try {
      // fetch data from mongodb
    } catch (error) {
        console.log("edit error :",error)
        return fail("Failed to edit.");
    }
};

export const deleteData = async function () {

    try {
      // delete data from mongodb
    } catch (error) {
        console.log("delete error :",error)
        return fail("Failed to delete.");
    }
};
