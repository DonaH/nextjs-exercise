import React from "react";

// Class component
class Wishlist2 extends React.Component {
  constructor(props: {}) {
    super(props);
    this.state = {
      wishlist: [],
    };
  }

  addToWishlist = (item: string) => {
    this.setState((prevState: { wishlist: string[] }) => ({
      wishlist: [...prevState.wishlist, item],
    }));
  };

  state = {
    wishlist: [] as string[],
  };
  render() {
    return (
      <div>
        <h2>Wishlist 2</h2>
        {this.state.wishlist.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={() => this.addToWishlist("New Item")}>Add New Product</button>
      </div>
    );
  }
}

export default Wishlist2;
