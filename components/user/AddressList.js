import React from 'react';

class AddressList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectItemId: 1,
      address: props.address,
    }
  }

  componentDidMount() {
    this.setState({ selectItemId: this.props.address[0].id });
  }

  selectItem = (item) => {
    this.setState({ selectItemId: item.id }, () => {
      this.props.select(item);
    });
  }

  render() {
    const { address } = this.props;
    return (
      <div>
        <div className="address-list">
          {  address.map((item) => {
            return (
              <div className={item.id === this.state.selectItemId ? 'row address-item address-item-select' : 'row address-item'} key={item.id} onClick={() => this.selectItem(item)}>
                <div className="col-md-12 address-content">
                  <div className="address-body">
                    <div className="title-address">{item.addressMap}</div>
                    <div>{item.area}, {item.street}, {item.zipcode}</div>
                  </div>
                </div>
              </div>
            )
          }) }
        </div>
        <style jsx>{`
          .address-list {

          }

          .address-content {
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          .check {
            color: #3BCF75;
          }

          .nocheck {
            color: #DDD;
          }

          .address-status {
            padding-right: 15px;
          }

          .title-address {
            color: #42413E;
            font-weight: bold;
            padding: 3px 0px;
          }

          .address-item {
            background: #FFF;
            border-bottom: 1px solid rgba(217,219,224,0.5);
            margin: 0px 0;
            padding: 13px 5px;
            color: #79776B;
            cursor: pointer;
            border-radius: 3px;
          }

          .address-item:hover {
            /* border: 2px solid var(--primary-color); */
            background: #F7F7F7;
          }

          .address-item-select {
            background: rgba(59, 207, 117, 0.3);
          }
          .address-item-select:active, .address-item-select:focus, .address-item-select:visited, .address-item-select:hover {
            background: rgba(59, 207, 117, 0.3);
          }
        `}</style>
      </div>
    )
  }
}

export default AddressList;
