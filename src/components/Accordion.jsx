import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion(  ) {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "What is Tailwind CSS?",
      content: "Tailwind CSS is a utility-first CSS framework that allows you to build modern websites without ever leaving your HTML. It provides low-level utility classes that let you build completely custom designs."
    },
    {
      title: "How does it work?",
      content: "Instead of predefined components, Tailwind provides low-level utility classes that you can combine to build any design directly in your markup. This approach gives you maximum flexibility while still providing the benefits of a framework."
    },
    {
      title: "Is it responsive?",
      content: "Yes! Tailwind includes a comprehensive set of responsive variants that make it easy to build responsive interfaces. You can use responsive prefixes like sm:, md:, lg:, and xl: to apply any utility class at a specific breakpoint."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-2">
      {accordionData.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-content-${index}`}
          >
            <span className="font-medium text-gray-900">{item.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            id={`accordion-content-${index}`}
            className={`transition-all duration-200 ease-in-out ${
              openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-4 bg-white border-t">
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}