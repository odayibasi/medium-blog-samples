import React from 'react';
import {
    Dialog, DialogTitle, DialogContent,
    DialogContentText, TextField,
    DialogActions, Button
} from "@material-ui/core";


export class ProductModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: '', calories: 0, fat: 0, carbs: 0, protein: 0, price: 0}
    }


    componentWillReceiveProps(nextProps, nextContext) {
        const {isOpen: cOpen, selectedProduct: cProduct} = this.props;
        const {isOpen: nOpen, selectedProduct: nProduct} = nextProps;
        if (!cOpen && nOpen) {
            if(nProduct){
                this.setState({...nProduct})
            }else{
                this.setState( {name: '', calories: 0, fat: 0, carbs: 0, protein: 0, price: 0})
            }
        }
    }

    handleName = (e) => {
        const value = e.target.value;
        this.setState({name: value});
    }

    handleCalories = (e) => {
        const value = e.target.value;
        this.setState({calories: value});
    }


    handleFat = (e) => {
        const value = e.target.value;
        this.setState({fat: value});
    }


    handleCarbs = (e) => {
        const value = e.target.value;
        this.setState({carbs: value});
    }

    handleProteins = (e) => {
        const value = e.target.value;
        this.setState({protein: value});
    }


    handlePrice = (e) => {
        const value = e.target.value;
        this.setState({price: value});
    }


    handleApply = () => {
        const newProduct = {...this.state};
        this.props.handleApply(newProduct);

    }


    render() {

        const {isOpen, handleClose, title, desc, applyTitle} = this.props;
        const {id, name, calories, fat, carbs, protein, price} = this.state;

        return (
            <div>
                <Dialog
                    className='product-dialog-container'
                    open={isOpen}
                    onClose={handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {desc}
                        </DialogContentText>
                        <TextField
                            margin="dense"
                            id="id_of_product"
                            label="Id"
                            type="text"
                            value={id}
                            disabled
                        />
                        <TextField
                            onChange={(e) => this.handleName(e)}
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Product Name"
                            type="text"
                            value={name}
                            fullWidth
                        />
                        <TextField
                            id="standard-number"
                            onChange={(e) => this.handleCalories(e)}
                            label="Calories"
                            type="number"
                            value={calories}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-number"
                            onChange={(e) => this.handleFat(e)}
                            label="Fat"
                            type="number"
                            value={fat}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-number"
                            onChange={(e) => this.handleCarbs(e)}
                            label="Carbs"
                            type="number"
                            value={carbs}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-number"
                            onChange={(e) => this.handleProteins(e)}
                            label="Protein"
                            type="number"
                            value={protein}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-number"
                            onChange={(e) => this.handlePrice(e)}
                            label="Price (TL)"
                            type="number"
                            value={price}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleApply} color="primary">
                            {applyTitle}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}
