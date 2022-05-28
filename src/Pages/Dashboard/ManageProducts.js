import React, { useState } from "react";
import { useQuery } from "react-query";
import useParts from "../../Hooks/useParts";
import Loading from "../../Shared/Loading";
import ManageProductDetails from "./ManageProductDetails";

const ManageProducts = () => {
  const [parts] = useParts();
  const [setDeletingParts] = useState(null);
  const {
    data: part,
    isLoading,
    refetch,
  } = useQuery("parts", () =>
    fetch(`https://evening-brook-77039.herokuapp.com/parts`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div>
        <div className="pb-10 pt-48 text-center text-4xl uppercase font-bold">
          <span className="text-nature">Motor</span>
          <span className="text-primary "> Bike Parts</span>
          <span className="divider bg-primary h-[3px] w-1/4 mx-auto xl:mt-12 2xl:mt-12 lg:mt-8 mt-4"></span>
          <h1>My All Doctors Length:{part.length}</h1>
        </div>
        <div className=" grid xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-8 w-11/12 mx-auto">
          {parts.map((p) => (
            <ManageProductDetails
              p={p}
              key={p._id}
              refetch={refetch}
              setDeletingDoctor={setDeletingParts}
            ></ManageProductDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
