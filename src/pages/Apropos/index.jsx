import { useState } from "react";
import styled from 'styled-components'
import faqs from '../../datas/datafaq.json'
import AccordionItem from '../../components/AccordionItem';
import '../../styles/Accordion.css';
import bandeau from '../../assets/apropos.png'
import '../../styles/Banner.css'
import '../../styles/index.css'

const Banner = styled.div`
  background-image: url('${bandeau}');
  max-width: 1240px;
  height: 180px;
  background-color: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
  border-radius: 25px;
  color: white;
  justify-content: center;
	align-items: center;
  margin-bottom: 43px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
}
`

function Apropos() {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <div className="container">
        <Banner>
				<div className="layer">
        </div>
			</Banner>
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          faq={faq}
        />
      ))}
    </ul>
    </div>
  );
};

export default Apropos
