import React from "react";

const sizes = {
  xs: "text-sm font-normal",
  lg: "text-xl font-medium",
  s: "text-[15px] font-normal",
  md: "text-lg font-normal",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
