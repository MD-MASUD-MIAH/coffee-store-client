import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, price, photo, supplier, taste, quantity, details } =
    coffee;
  console.log(coffee);

  const handlupdate = (e) => {
    e.preventDefault();

    console.log("onClick update");

    const form = e.target;

    const formData = new FormData(form);

    const updateCoffe = Object.fromEntries(formData.entries());

    console.log(updateCoffe);

    fetch(`https://coffee-store-server-one-ashen.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Coffee Updated!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }

        console.log(data);
      });
  };

  return (
    <div>
      <div className="min-h-screen  flex flex-col items-center px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#374151] mb-4">
          <span className="font-cursive">Update Coffee </span>
        </h2>
        <p className="max-w-xl text-center text-gray-600 mb-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form
          onSubmit={handlupdate}
          className="w-full max-w-4xl bg-[#f4f3f0] p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              name="name"
              type="text"
              defaultValue={name}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Quantity
            </label>
            <input
              name="quantity"
              type="text"
              defaultValue={quantity}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Supplier
            </label>
            <input
              name="supplier"
              type="text"
              defaultValue={supplier}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Taste
            </label>
            <input
              name="taste"
              type="text"
              defaultValue={taste}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Price
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Details
            </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-semibold text-gray-700">
              Photo
            </label>
            <input
              name="photo"
              type="text"
              defaultValue={photo}
              className="input input-bordered w-full"
            />
          </div>

          <div className="md:col-span-2 text-center">
            <button className="btn bg-[#D2B48C] hover:bg-[#caa57a] w-full text-black font-semibold">
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
