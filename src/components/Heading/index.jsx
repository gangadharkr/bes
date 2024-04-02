import React from "react";

const sizes = {
  s: "text-2xl font-bold md:text-[22px]",
  md: "text-4xl font-bold md:text-[34px] sm:text-[32px]",
  xs: "text-xl font-bold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
