import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddAProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const url = `https://evening-brook-77039.herokuapp.com/parts`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          toast("Your new item has been added");
        }
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl mb-4 uppercase mt-32">
        <span className="text-primary">ADD</span> A Product
      </h2>
      <form
        className="gird grid-cols-1 gap-3 xl:w-1/2 lg:w-1/2 md:w-1/2 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="p-2 mb-2 text-xl w-full border"
          placeholder="Photo URL"
          type="text"
          {...register("img", { required: true })}
        />
        <input
          className="p-2 mb-2 text-xl w-full border"
          placeholder="Name"
          type="text"
          {...register("name", { required: true })}
        />
        <input
          className="p-2 mb-2 text-xl w-full border"
          placeholder="Price"
          type="number"
          {...register("price", { required: true })}
        />
        <input
          className="p-2 mb-2 text-xl w-full border"
          placeholder="Available Quantity"
          type="number"
          {...register("availableQuantity", { required: true })}
        />
        <input
          className="p-2 mb-2 text-xl w-full border"
          placeholder="Minimum Quantity"
          type="number"
          {...register("minimumQuantity", { required: true })}
        />
        <textarea
          className="w-full border p-2"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Descriptions"
          minLength={100}
          {...register("minimumQuantity", { required: true })}
        ></textarea>

        <input
          className="btn bg-base-300 text-natural text-2xl w-full"
          type="submit"
          value="ADD"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
