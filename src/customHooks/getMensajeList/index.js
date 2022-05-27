import { useEffect, useState } from "react";

const useMensajes = () => {
  const [mensajes, setMensajes] = useState();

  const getLista = async () => {
    const response = await fetch("https://randomuser.me/api/?results=15");
    const json = await response.json();
    const array = [
      ...json.results.map(({ name, email, picture, registered }) => {
        const nombre = name.title + " " + name.first + " " + name.last;
        const avatar = picture.large;
        const datelastmessage = registered.date;
        return {
          username: nombre,
          lastmessage: email,
          avatar,
          datelastmessage,
        };
      }),
    ];

    setMensajes(array);
  };
  useEffect(() => {
    getLista();
  }, []);
  return mensajes;
};

export default useMensajes;
