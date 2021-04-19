import React from 'react';
import {
    Dialog, DialogTitle, DialogContent,
    DialogContentText, TextField,
    DialogActions, Button
} from "@material-ui/core";


export class ProductModal extends React.Component {

    constructor(props) {
        super(props);
        const {mode} = this.props;

        if (mode === 'edit') {
            this.state = {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            }
        } else {
            this.state = {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
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


    render() {

        const {isOpen, handleClose, handleApply, title, desc, applyTitle} = this.props;
        const {name, calories, fat, carbs, protein} = this.state;

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
                            onChange={(e) => this.handleCalories(e,)}
                            label="Calories"
                            type="number"
                            value={calories}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-number"
                            onChange={(e) => this.handleInput(e, 'fat')}
                            label="Fat"
                            type="number"
                            value={fat}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-number"
                            onChange={(e) => this.handleInput(e, 'carbs')}
                            label="Carbs"
                            type="number"
                            value={carbs}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-number"
                            onChange={(e) => this.handleInput(e, 'protein')}
                            label="Protein"
                            type="number"
                            value={protein}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />


                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleApply} color="primary">
                            {applyTitle}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }

}
