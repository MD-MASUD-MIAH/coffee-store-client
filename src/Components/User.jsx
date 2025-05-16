import { useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";
const User = () => {
  const allUser = useLoaderData();

  const [users, setUsers] = useState(allUser);

  const handleDelete = (id) => {
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
        fetch(`https://coffee-store-server-one-ashen.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const raiming = users.filter((res) => res._id !== id);

              setUsers(raiming);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              console.log("after delete", data);
            }
          });
      }
    });
  };

  return (
    <div>
      <h1>I am user your bro</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gmail</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>

        {users.map((res) => (
          <tbody key={res._id} res={res}>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={res.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{res.name}</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                {res.email}
                <br />
                <span className="badge badge-ghost badge-sm">{res.phone}</span>
              </td>
              <td>Purple</td>
              <th>
                <div className="flex gap-2 ml-4">
                  <Link>
                    <button className="btn btn-sm bg-[#D2B48C] text-white hover:bg-[#c1a373]">
                      <FaEye />
                    </button>
                  </Link>
                  <Link>
                    <button className="btn btn-sm bg-gray-600 text-white hover:bg-gray-700">
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(res._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default User;
