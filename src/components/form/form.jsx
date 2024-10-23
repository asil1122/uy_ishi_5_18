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
        className="flex justify-center flex-col w-[300px] mx-auto gap-5 mt-[100px]"
      >
        <input
          {...register("title")}
          className="py-[20px] pl-[10px] text-white border-none outline-none rounded-[20px] text-[20px] capitalize bg-blue-500"
          type="text"
        />
        <input
          {...register("description")}
          className="py-[20px] pl-[10px] text-white border-none outline-none rounded-[20px] text-[20px] capitalize bg-red-500"
          type="text"
        />
        {defaultValues?.title ? (
          <>
            <button type="submit" className="bg-yellow-500">
              Edit
            </button>
          </>
        ) : (
          <>
            <button
              type="submit"
              className="bg-green-500 py-[20px] w-[100px] mx-auto rounded-[20px] text-white"
            >
              Send
            </button>
          </>
        )}
      </form>
    </>
  );
};
