import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddReview = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const url = `https://evening-brook-77039.herokuapp.com/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
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
      <h2 className="text-center text-3xl mb-4 uppercase">
        <span className="text-primary">ADD</span> REVIEW
      </h2>
      <form
        className="gird grid-cols-1 gap-3 w-1/2 mx-auto"
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
          placeholder="ratings"
          type="text"
          {...register("ratings", { required: true })}
        />
        <textarea
          className="w-full border p-2"
          name=""
          id=""
          cols="30"
          rows="3"
          placeholder="Descriptions"
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

export default AddReview;
