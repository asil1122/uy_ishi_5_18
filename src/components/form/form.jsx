import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({ refetch, defaultValues, refetchCard, setShow, id }) => {
  const { reset, register, handleSubmit } = useForm({
    defaultValues: {
      title: defaultValues?.title,
      description: defaultValues?.des,
    },
  });

  const submit = (data) => {
    fetch(`http://localhost:3600/todos${id ? `/${id}` : ""}`, {
      headers: {
        "Content-type": "application/json",
      },
      method: defaultValues?.title ? "PUT" : "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        if (defaultValues?.title) {
          refetchCard();
          setShow();
        } else {
          refetch();
          reset();
        }
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submit)}
      >
        <input
          {...register("title")}
          type="text"
        />
        <input
          {...register("description")}
          type="text"
        />
        {defaultValues?.title ? (
          <>
            <button type="submit">Edit</button>
          </>
        ) : (
          <>
            <button type="submit">Send</button>
          </>
        )}
      </form>
    </>
  );
};
