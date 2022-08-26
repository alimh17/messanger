import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserToChatList } from "store/action/init_user";

const userTable = ({ data }) => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelectedUser = async (user) => {
    if (state) {
      try {
        const res = await axios.post("/api/user_to_list", {
          data: {
            me: { email: state.email },
            to: user,
          },
        });

        if (res.status === 200) {
          const user = res.data.data.map((user) => {
            delete user.email;
            return user;
          });
          dispatch(addUserToChatList(user));
          router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8" dir="rtl">
      <div className="flex flex-col">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {data &&
                    data.map((user) => (
                      <tr
                        className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                        key={user._id}
                        onClick={() => handleSelectedUser(user)}
                      >
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center">
                          <img
                            alt="profile"
                            src={`http://localhost:5000/${user.image}`}
                            className="w-12 h-12 rounded-full"
                          />
                          <p className="mr-2 text-bold">{user.username}</p>
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                          {user.email}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <span>آنلاین</span>
                          <span className="w-2 h-2 rounded-full bg-green-400 inline-block mr-2"></span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userTable;
