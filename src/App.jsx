import React from "react";
import { Card } from "./components/card/card";
import { Form } from "./components/form/form";

function App() {
  const [data, Setdata] = React.useState([]);
  const getdata = () => {
    fetch("http://localhost:3600/todos")
      .then((res) => res.json())
      .then((data) => Setdata(data));
  };
  React.useEffect(() => {
    getdata();
  }, []);
  return (
    <>
      <div className="container">
        <Form refetch={getdata} />
        <div className="my-[50px]  ">
          {data?.map((item) => (
            <Card
              refetch={getdata}
              key={item.id}
              id={item.id}
              title={item.title}
              des={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
