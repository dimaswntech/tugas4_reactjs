import React from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pesan :"",
            jumlah:0,
            tampil:""
        },
        this.pilihPesanan = this.pilihPesanan.bind(this);
        this.nasipadang = this.nasipadang.bind(this);
        this.sate = this.sate.bind(this);  
        this.soto = this.soto.bind(this);  
        this.uduk = this.uduk.bind(this);  
        this.kuning = this.kuning.bind(this);     
    }

    pilihPesanan(value, e){
        const eventTarget = e.target.value;
        this.setState((state,props) => {
            return{
                [value]:eventTarget
            };
        })
    }

    nasipadang(){
        this.setState((state, props) => {
            return{
                pesan : "Nasi Padang",
                jumlah : this.state.jumlah + 1,
                tampil : true
            };
        });
    }

    sate(){
        this.setState((state, props) => {
            return{
                pesan : "Sate",
                jumlah : this.state.jumlah + 1,
                tampil : true
            };
        })
    }

    soto(){
        this.setState((state, props) => {
            return{
                pesan : "Soto",
                jumlah : this.state.jumlah + 1,
                tampil : true
            };
        })
    }

    uduk(){
        this.setState((state, props) => {
            return{
                pesan : "Nasi Uduk",
                jumlah : this.state.jumlah + 1,
                tampil : true
            };
        })
    }

    kuning(){
        this.setState((state, props) => {
            return{
                pesan : "Nasi Kuning",
                jumlah : this.state.jumlah + 1,
                tampil : true
            };
        })
    }

    batal(){
        this.setState((state, props) => {
            return{
                pesan : "",
                jumlah : 0,
                tampil : false
            };
        })
    }
    
    render(){
        return(
            <div>
                <h3>Daftar Makanan</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan imgmkn="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.nasipadang}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan imgmkn="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.sate}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan imgmkn="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.soto}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan imgmkn="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.uduk}>Pesan Sekarang</button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan imgmkn="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button onClick={this.kuning}>Pesan Sekarang</button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br></br>
                <input type="text" value={this.state.pesan} onChange={e => this.pilihPesanan("pesan", e)} placeholder="Masukkan Makanan"></input>
                <input type="number" value={this.state.jumlah} placeholder="Jumlah Pesanan" onChange={e => this.pilihPesanan("jumlah", e)}></input>
                <button onClick={this.batal}>Batal</button>
                {this.state.tampil === true? (
                    <div>
                        <h3>Pesanan Anda : {this.state.pesan}</h3>
                        <h4>Jumlah Pesanan : {this.state.jumlah}</h4>
                    </div>
                ) : (
                    <h1>Anda Belum Pesan</h1>
                )}
            </div>
        );
    }
}
export default MenuMakanan;