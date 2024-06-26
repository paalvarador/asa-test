import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ListContact from "../components/ListContact";

interface ContactInfoProps {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
}

function Lists() {
  const [contacInfo, setContactInfo] = useState<ContactInfoProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          "http://6172cfe5110a740017222e2b.mockapi.io/elements"
        );
        if (!response.ok) {
          throw new Error("Failed to fech data");
        }

        const data = await response.json();
        setContactInfo(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contact info", error);
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex w-full h-full justify-center items-center">
          Loading...
        </div>
      </>
    );
  }

  return (
    <div>
      <ul>
        {contacInfo.map((contact) => (
          <li key={contact.id}>
            <ListContact
              name={contact.name}
              avatar={contact.avatar}
              createdAt={contact.createdAt}
            />
          </li>
          // Aquí puedes mostrar otros campos según la estructura de datos
        ))}
      </ul>
      <div className="text-center mt-2">
        <Link to="/">Volver al Inicio</Link>
      </div>
    </div>
  );
}

export default Lists;
