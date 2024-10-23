import React from "react";
import { Form } from "../form/form";
import { toast } from "react-toastify";
export const Card = ({ des, title, id, refetch }) => {
  const [show, setShow] = React.useState(false);
  const deleteItem = () => {
    fetch(`http://localhost:3600/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json(""))
      .then(() => {
        refetch();
      });
  };

  return (
    <>
      <div className="container">
        <div className=" py-[20px] bg-white rounded-[20px]  text-center border-[2px] border-red-600 mb-[20px]">
          {show ? (
            <Form
              setShow={setShow}
              id={id}
              defaultValues={{ title, des }}
              refetchCard={refetch}
            />
          ) : (
            <>
              <h2>{title}</h2>
              <p className="mb-[20px]">{des}</p>
              <div className="flex gap-[20px] justify-center">
                <button onClick={deleteItem} className="bg-red-500">
                  Delete
                </button>
                <button
                  onClick={() => setShow(!show)}
                  className="bg-yellow-500"
                >
                  Edit
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
