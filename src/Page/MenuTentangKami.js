import React from "react";

class MenuTentangKami extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tentang:"Warung Nusantara Adalah Restoran Yang Bernuansa Bening"
        }
    }

    render(){
        return(
            <div>
                <center>
                    <p>Tentang Kami <br></br> {this.state.tentang}</p>
                </center>
            </div>
        );
    }
}export default MenuTentangKami;