const Button = ({ children, variant, action, className, width }) => {
    const variants = {
        "primary": `mt-3 inline-flex w-full justify-center rounded-md border border-blue-300 bg-blue px-4 py-2 text-base font-medium text-white-700 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-[${width}] sm:text-sm`,
        "secondary": "mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
    }


  return (
    <button
      type="button"
      className={`${variants[variant]} ${className}`  }
      onClick={action}
    >
      {children}
    </button>
  );
};

export default Button;