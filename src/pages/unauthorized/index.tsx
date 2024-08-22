const Unauthorized = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-500">Unauthorized</h1>
        <p className="text-gray-700 mt-2">
          You do not have permission to view this page.
        </p>
      </div>
    </div>
  );
};

export default Unauthorized;
