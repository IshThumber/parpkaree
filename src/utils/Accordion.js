import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { acc } from "./accMenu";
import { AiOutlinePlus } from "react-icons/ai";

function Icon({ id, open }) {
  return <AiOutlinePlus className={`${id === open ? "rotate-45" : ""} h-5 w-5 transition-transform`} />;
}

export default function Acc() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {acc.map((item, index) => (
        <Accordion key={index} open={open === index + 1} icon={<Icon id={index + 1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(index + 1)} className="indent-3 text-black text-left py-2 text-lg">
            {item.question}
          </AccordionHeader>
          <AccordionBody className="text-left ml-2 ">
            {item.id === 2 && Array.isArray(item.answer) ? item.answer.join("\n") : item.answer}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}
