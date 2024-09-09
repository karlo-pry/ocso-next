"use client";
import { Select } from "@nextui-org/react";
import { SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface SelectedLocationProps {
  stores: any[],
  defaultSelected: any[]
}
export default function SelectLocations({ stores, defaultSelected } : SelectedLocationProps) {
  const router = useRouter();
  return (
    <Select
      classNames={{
        mainWrapper: "hover:ring-4 transition-all ring-red-200 rounded-xl"
      }}
      className="w-1/2"
      name="location"
      selectedKeys={defaultSelected}
      onChange={(selected) => {
        if (selected.target.value === "") router.push("/dashboard");
        else {
          router.push(`/dashboard?store=${selected.target.value}`);
        }
      }}
      label="Tiendas"
      placeholder="Selecciona una tienda"
    >
      {stores?.map((location: any) => {
        return (
          <SelectItem key={location.locationId}>
            {location.locationName}
          </SelectItem>
        );
      })}
    </Select>
  );
}
