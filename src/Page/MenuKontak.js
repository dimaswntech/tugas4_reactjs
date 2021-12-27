import React from "react";

class MenuKontak extends React.Component {
    constructor (props){
        super(props);
        this.state={
            alamat:"Jl. Jeruk Jl. Jeruk Jl. Jeruk Jl. Jeruk Jl. Jeruk ",
            kontak:"082312341234"
        }
    }

    render() {
        return (
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h4>Kontak Kami = {this.state.kontak}</h4>
                </center>
            </div>
        );
    }
}export default MenuKontak;