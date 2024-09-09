import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";

export default async function EmployeesCards({store} : {store : string | undefined | string[]}) {
  const token = cookies().get(TOKEN_NAME)?.value;
  const { data } = await axios.get(
    `${API_URL}/employees/location/${store}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return data.map((employee: any) => {
    return (
      <Card className="mx-10" title={`Tienda `}>
        <CardHeader>
          <b>
            {employee.employeeName} {employee.employeeLastName}
          </b>
        </CardHeader>
        <Divider />
        <CardBody>La mejor tienda!</CardBody>
      </Card>
    );
  });
}
