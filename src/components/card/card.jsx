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
      <div>
        <div>
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
              <p>{des}</p>
              <div>
                <button onClick={deleteItem}>Delete</button>
                <button onClick={() => setShow(!show)}>Edit</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
