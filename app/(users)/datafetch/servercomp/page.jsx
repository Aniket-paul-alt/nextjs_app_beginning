import { Suspense } from "react";
import DataCard from "./DataCard";
import Load from "./load";

export default async function DataFetchPage(props) {
  const searchParams = await props.searchParams
  const { name } = searchParams;
  console.log(name)

  

  // Handle case where no name is provided
  if (!name || name.charAt(0) === `"` || name.charAt(0) === `'`) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              No Name Provided
            </h1>
            <p className="text-gray-600">
              Please add ?name=yourname to the URL
            </p>
          </div>
        </div>
      </div>
    );
  }

  

  return (
    <div className="grid grid-cols-2 gap-3 h-full">
      <div className="h-full flex justify-center items-center">
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus qui, quisquam nam maiores quibusdam cum dolores eveniet suscipit maxime blanditiis illum recusandae, quod eum quas iure quaerat minima totam similique temporibus adipisci dolor nihil quia repellendus ex. Cumque eos corrupti voluptatum delectus dolorum quaerat odit quibusdam laboriosam eaque. Explicabo, nulla?</h2>

      </div>
      <Suspense fallback={<Load/>}>
        <DataCard name={name}/>
      </Suspense>
    </div>
  );
}