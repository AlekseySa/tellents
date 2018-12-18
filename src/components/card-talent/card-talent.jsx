import React from 'react';

class CardTalent extends React.Component {
  render() {
    return <div>{this.props.item.full_name}</div>;
  }
}

export default CardTalent;
