import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "jadl;shjfa;s",
      label: "Can i use a React on a project?",
      content: "You can use a React on any project you want.",
    },

    {
      id: "jadl;shjrweewfa;s",
      label: "Can i use a JavaScript on a project?",
      content: "You can use a JavaScript on any project you want.",
    },

    {
      id: "jadl;shjfsdzxfa;s",
      label: "Can i use a Node.js on a project?",
      content: "You can use a Node.js on any project you want.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
