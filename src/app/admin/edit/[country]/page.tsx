'use client'
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CultureForm from "@/components/CultureForm";
import { fetchCultureData, updateCultureData } from "@/lib/actions";

const EditCulture = () => {
  const router = useRouter();
  const { country } = router.query;
  const [cultureData, setCultureData] = useState([]);

  useEffect(() => {
    if (country) {
      fetchCultureData(country as string).then((data) => setCultureData(data?.cultureData || []));
    }
  }, [country]);

  const handleFormSubmit = async (updatedCultureData: { key: string; value: string }[]) => {
    await updateCultureData(country as string, updatedCultureData);
    router.push("/admin");  // Redirect after update
  };

  return (
    <div>
      <h1>Edit Cultural Data for {country}</h1>
      <CultureForm onSubmit={handleFormSubmit} initialData={cultureData} />
    </div>
  );
};

export default EditCulture;
