import { useRef } from "react";
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../assets/arrow-up.svg';

const AccordionItem = ({ faq, active, onToggle }) => {
  const { question, answer } = faq;

  const contentEl = useRef();


  return (
    <li className={`accordion_item ${active ? "active" : ""}`}>
      <button className="button" onClick={onToggle}>
        {question}
        <span className="control">{active ? <ArrowUp/> : <ArrowDown/>} </span>
      </button>
      <div
        ref={contentEl}
        className="answer_wrapper"
        style={
          active
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div className="answer">{answer}</div>
      </div>
    </li>
  );
};

export default AccordionItem;