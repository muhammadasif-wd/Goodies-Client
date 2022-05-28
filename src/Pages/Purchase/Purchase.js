import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [seeMore, setSeeMore] = useState(false);
  const { id } = useParams();
  const [parts, setParts] = useState([]);
  const {
    _id,
    img,
    name,
    price,
    maximumQuantity,
    minimumQuantity,
    descriptions,
  } = parts;
  useEffect(() => {
    fetch(`https://evening-brook-77039.herokuapp.com/parts/${id}`)
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  const [orderQuantity, setOrderQuantity] = useState(minimumQuantity);

  const placeOrder = (e) => {
    e.preventDefault();
    const productName = e.target.productName.value;
    const productQuantity = e.target.productQuantity.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const orderData = {
      productName: productName,
      productQuantity: productQuantity,
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    console.log(orderData);
    const url = `https://evening-brook-77039.herokuapp.com/orders`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          toast("Your Order has been added");
        }
      });
  };

  const purchaseQuantity = (e) => {
    e.preventDefault();
    const orderQuantity = Number(e.target.orderQuantity.value);
    if (orderQuantity > maximumQuantity) {
      toast.warning(
        `We Have No ${orderQuantity} Piece . We Have Only ${maximumQuantity}`
      );
    } else if (orderQuantity < minimumQuantity) {
      toast.warning(`Minimum Order Quantity is ${minimumQuantity}`);
    } else {
      setOrderQuantity(orderQuantity);
      toast.info("Please Submit Order");
    }
  };

  return (
    <div>
      <div className="pt-32 w-96 mb-5 mx-auto my-auto">
        <div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg border-2">
            <img className="w-full xl:w-56 mx-auto" src={img} alt="" />

            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-primary">
                {name?.slice(0, 30)}
              </div>
              <span className="text-sm text-natural font-serif text-center">
                Parts ID: {_id}
              </span>
              <p className="text-md">price: ${price}</p>
              <p className="text-md">Available Quantity: {maximumQuantity}</p>
              <p className="text-md">Minimum Quantity: {minimumQuantity}</p>
              <p>
                {seeMore ? descriptions : descriptions?.slice(0, 100)}
                <button
                  className="pl-1 text-orange-400"
                  onClick={() => setSeeMore(!seeMore)}
                >
                  ...see more
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full mx-auto">
          <div className="shadow">
            <div className="w-full p-5 mx-auto xl:w-5/6">
              <div className="w-1/5 mx-auto">
                <form onSubmit={purchaseQuantity}>
                  <span className="label-text block">Order Quantity</span>
                  <input
                    className="input input-bordered "
                    name="orderQuantity"
                    type="number"
                    defaultValue={minimumQuantity}
                  />
                  <button
                    className="btn btn-primary mt-5 w-48 "
                    disabled={maximumQuantity <= 0}
                  >
                    Purchase
                  </button>
                </form>
              </div>
              <h2 className="text-center text-2xl pt-5 font-bold ">
                Purchase <span className="text-primary">Your Product</span>
              </h2>
              <div className="divider h-1 w-36 mx-auto bg-primary"></div>
              <div></div>
              <form onSubmit={placeOrder} className="md:w-2/4 mx-auto my-3">
                <span className="label-text">Product Name</span>
                <input
                  name="productName"
                  value={name}
                  type="text"
                  className="input block input-bordered my-2 font-bold  w-full  "
                  disabled
                />
                <span className="label-text">Order Quantity</span>
                <input
                  name="productQuantity"
                  type="number"
                  className="input block input-bordered  my-2  font-bold  w-full  "
                  value={orderQuantity}
                  disabled={orderQuantity}
                  required
                  placeholder="Please Click Order Purchase"
                />
                <span className="label-text">Your Name</span>
                <input
                  name="name"
                  value={user?.displayName}
                  type="text"
                  className="input block input-bordered my-2 font-bold  w-full  "
                  disabled
                />
                <span className="label-text">Your Email</span>
                <input
                  name="email"
                  value={user?.email}
                  type="text"
                  className="input block input-bordered my-2 font-bold  w-full  "
                  disabled
                />
                <span className="label-text">Your Phone Number</span>
                <input
                  name="phone"
                  type="number"
                  className="input block input-bordered bg-[#F0F6FF] my-2 font-bold  w-full  "
                  required
                />
                <span className="label-text">Address</span>
                <input
                  name="address"
                  type="text"
                  className="input block input-bordered bg-[#F0F6FF] my-2 font-bold  w-full  "
                  required
                />
                <input
                  className="btn btn-primary mt-3"
                  type="submit"
                  disabled={maximumQuantity <= 0 && orderQuantity === undefined}
                  value={"Submit Order"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
