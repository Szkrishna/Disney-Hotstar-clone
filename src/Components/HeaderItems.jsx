// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function HeaderItems({ title, Icon }) {
  return (
    <div className="flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2">
      <Icon />
      <h2 className="md:block">{title}</h2>
    </div>
  );
}

export default HeaderItems;
