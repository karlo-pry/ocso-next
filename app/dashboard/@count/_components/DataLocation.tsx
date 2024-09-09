import { API_URL, TOKEN_NAME } from "@/constants";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import axios from "axios";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function DataLocation({ store }: { store: string }) {
  if (!store) return null;
  const token = cookies().get(TOKEN_NAME)?.value;
  const { data } = await axios.get(`${API_URL}/locations/${store}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!data) return null;
  return (
    <Card className="my-10 w-30 text-pretty items-center py-4">
      <CardHeader className="flex flex-col items-center">
        <Image
          src="/Oxxo_Logo.svg"
          width={100}
          draggable={false}
          height={200}
          alt="Oxxo Logo"
          className="mx-2"
        />
      </CardHeader>
      <CardBody className="flex flex-col items-center">
        <p className="w-full">
          Nombre: <b>{data.locationName}</b>
        </p>
        <p className="w-full">
          Dirección: <b>{data.locationAddress}</b>
        </p>
        {data.manager ? (
          <p className="w-full">
            El manager es <b>{data.manager.managerFullName}</b>
          </p>
        ) : (
          `No hay manager`
        )}
        <div>
          <iframe
            width="300"
            height="250"
            loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA8NFFcaaiz5ZKJlgQV17XsWuOzEt37QRk
              &q=${data.locationLatLng[0]},${data.locationLatLng[1]}`}
          ></iframe>
        </div>
      </CardBody>
    </Card>
  );
}
