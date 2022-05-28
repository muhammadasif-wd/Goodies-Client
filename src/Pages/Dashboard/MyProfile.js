import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const MyProfile = () => {
  const { register, handleSubmit } = useForm();
  const refetch = useQuery();
  const [user] = useAuthState(auth);
  const onSubmit = (data) => {
    if (user?.email) {
      const url = `https://evening-brook-77039.herokuapp.com/users/${user.email}`;

      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result) {
            toast("Your Profile Updated Successfully");
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <div className="w-full mx-auto xl:w-1/2 mt-16 mb-16">
        <div className="shadow-xl">
          <div className="w-full p-5 mx-auto">
            <h2 className="text-center text-3xl uppercase">
              <span className="text-primary">Update your</span> profile
            </h2>
            <div className="divider bg-primary h-[2px] w-96 mx-auto"></div>
            <form
              className="gird grid-cols-1 gap-3"
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
                placeholder="Location"
                type="text"
                {...register("location", { required: true })}
              />
              <input
                className="p-2 mb-2 text-xl w-full border"
                placeholder="Phone Number"
                {...register("phoneNumber", { required: true })}
              />

              <input
                className="btn bg-base-300 text-natural text-2xl w-full"
                type="submit"
                value="UPDATE"
              />
            </form>
          </div>
        </div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default MyProfile;
