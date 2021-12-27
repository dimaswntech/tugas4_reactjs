import React from "react";
import MenuMakanan from "../Page/MenuMakanan";

class ListMakanan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
datalist:this.props.imgmkn
        }
    }
    render() {
        return (
            <div>
                <img src={this.state.datalist} width="150" alt="Produk Makanan"></img>

            </div>
        );
    }
}
export default ListMakanan;