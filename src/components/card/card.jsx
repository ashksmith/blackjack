import React from "react";
import "./card.scss";

const Card = (props) => {
  const { suit, value, index } = props;

  return (
    <div className="card-container">
      <div
        className="card-header"
        style={{ color: suit == "♥" || suit == "♦" ? "red" : "black" }}
      >
        {suit}
        {value}
      </div>
      <div
        className="card-footer"
        style={{ color: suit == "♥" || suit == "♦" ? "red" : "black" }}
      >
        {suit}
        {value}
      </div>
    </div>
  );
};

export default Card;

/*
export default class Card extends React.Component<any> {
  render() {
    const { suit, value, index } = this.props;
    return (
      // prettier-ignore
      <PlayingCard style={{marginLeft: index == 0 ? '0px' : '-140px', marginTop: index * 30 }}>
          <div style={{ paddingTop: "1px", paddingLeft: "3px" }}>
            <div style={{ fontSize: '1.5rem',color: suit == "hearts" || suit == "diams" ? "red" : "black" }}
              dangerouslySetInnerHTML={{ __html: `${value}&${suit};` }} />
          </div>
        </PlayingCard>
    );
  }
}

*/
