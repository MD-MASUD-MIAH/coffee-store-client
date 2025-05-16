import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, price, taste } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.isConfirmed);

        fetch(
          `https://coffee-store-server-one-ashen.vercel.app/coffee/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remainingCoffe = coffees.filter((cof) => cof._id !== _id);

              setCoffees(remainingCoffe);
            }

            console.log("after delete", data);
          }); // Logs: true
      } else {
        console.log(result.isConfirmed); // Logs: false
      }
    });

    console.log(_id);
  };
  return (
    <div>
      <div>
        <div className="flex items-center gap-6 bg-base-100 shadow-md py-4 px-8 rounded-xl w-full max-w-md">
          <img
            src={photo}
            image
            URL
            alt="Coffee"
            className="w-24 h-32 object-contain"
          />
          <div className="flex flex-col justify-between flex-grow">
            <p>
              <span className="font-semibold">Name:</span> {name}
            </p>
            <p>
              <span className="font-semibold">Taste :</span> {taste}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {price}
            </p>
          </div>
          <div className="flex flex-col gap-2 ml-4">
            <Link to={`/coffee/${_id}`}>
              <button className="btn btn-sm bg-[#D2B48C] text-white hover:bg-[#c1a373]">
                <FaEye />
              </button>
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn btn-sm bg-gray-600 text-white hover:bg-gray-700">
                <FaEdit />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
