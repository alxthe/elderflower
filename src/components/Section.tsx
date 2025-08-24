import React from "react";

type Props = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ id, className = "", children }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 md:px-8 ${className}`}>
    {children}
  </section>
);

export default Section;
