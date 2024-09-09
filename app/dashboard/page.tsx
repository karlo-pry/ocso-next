import EmployeesCards from "./_components/Employees";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div className="h-[90vh] w-3/12  overflow-hidden overflow-y-auto">
        <div className="flex flex-col gap-10 my-10">
          {searchParams?.store ? (
            <EmployeesCards store={searchParams.store} />
          ) : (
            <div className="mx-4 text-center">Selecciona una tienda para ver los empleados</div>
          )}
        </div>
      </div>
    </>
  );
}
