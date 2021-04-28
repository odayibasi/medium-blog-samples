import React from 'react';
import {routes} from "routes";
import {ProductTableContainer,SideMenuContainer} from "containers";
import {ProductModal} from "../ProductForm/ProductModal";
import './AdminPage.scss'

export class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        }
    }

    
    handleModalClose = () => {
        this.setState({isModalOpen: false})
    }

    handleModalApply = (product) => {
        debugger;
        const {products} = this.props.products;
        let newId = 0;
        if (Array.isArray(products) && products.length > 0) {
            const id = products[products.length - 1].id;
            newId = id + 1;
        }

        product.creationDate = (new Date()).getTime();
        product.updatedDate = (new Date()).getTime();
        product.id = newId

        this.setState({isModalOpen: false})
        this.props.addProduct(product);

    }

    handleNewProduct = () => {
        this.setState({isModalOpen: true})
    }

    render() {
        return (
            <div>
                <h1>Admin Page</h1>
                <SideMenuContainer/>
                <button onClick={this.handleLogout}>Logout</button>
                <button onClick={this.handleNewProduct}>New Product</button>
                <ProductTableContainer/>
                <ProductModal
                    isOpen={this.state.isModalOpen}
                    handleClose={this.handleModalClose}
                    handleApply={this.handleModalApply}
                    title='Create Product'
                    desc='Please Enter fields ... ... ..'
                    applyTitle='Create'
                />
            </div>
        )
    }
}
