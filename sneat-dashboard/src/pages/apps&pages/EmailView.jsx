import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8080";

export default function EmailView() {
  const [email, setEmail] = useState(null);
  useEffect(() => {
    axios
      .get(baseUrl + "/")
      .then((res) => {
        console.log(res.data);
        setEmail(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);
  return (
    <div>
      <h1>email</h1>
      <ul style={{ listStyle: "none" }}>
        {email &&
          email.map((v) => (
            <li key={v.id}>
              <h5>
                {v.from.name}:{v.from.avatar}
              </h5>
            </li>
          ))}
      </ul>
    </div>
  );
}
