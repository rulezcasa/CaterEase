import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/authContext";
import Button from "../../components/elements/Button";
import { Link, useNavigate } from "react-router-dom";

const CatererTable = () => {
  const { caterers } = useAuth(); // Access caterer data from context

  const navigate = useNavigate();

  const handleUpdate = (catererId) => {
    console.log(catererId);
    navigate(`/updatecat/${catererId}`);
  };


  return (
    <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Caterers</h1>
      <div className="overflow-xs-auto">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">Caterer ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {caterers.map((caterer) => (
              <tr
                key={caterer.id}
                className="bg-gray-100 border-b border-gray-200 hover:bg-gray-200 text-center"
              >
                <td className="px-4 py-2">{caterer.id}</td>
                <td className="px-4 py-2">{caterer.name}</td>
                <td className="px-4 py-2">{caterer.contact}</td>
                <td className="px-4 py-2">
                  <Button
                    onClick={() => handleUpdate(caterer.id)}
                    variant="dark"
                    sizes="small"
                  >
                    Update
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center mt-6">
          <Link to="/addcat"><Button variant="primary" size="large">
            Add
          </Button></Link>
        </div>
      </div>
    </div>
  );
};

export default CatererTable;
