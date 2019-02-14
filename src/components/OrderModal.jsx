import React from'react'
import {Button, Modal, Form} from "semantic-ui-react"
import DishInput from './DishInput.jsx'
import DishSelector from '../containers/DishesState.js'

import {map} from 'lodash/collection'

class OrderModal extends React.Component{

    constructor(props) {
        super(props)
        this.state ={
            btn_name: "Button",
            btn_class: "primary",
            header: "Header",
            open: false,
            id: null,
            client: "",
            dishes: [],
        }
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.resetDishes = this.resetDishes.bind(this)
        this.editClient = this.editClient.bind(this)
        this.editDishCount = this.editDishCount.bind(this)
        this.dishes = this.dishes.bind(this)
        this.id = this.id.bind(this)
        this.client = this.client.bind(this)
        this.order = this.order.bind(this)
        this.update = this.update.bind(this)
        this.create = this.create.bind(this)
        this.delete = this.delete.bind(this)
        this.isValid = this.isValid.bind(this)
    }

    componentDidMount() {
       this.setState({
          btn_name: this.props.btn_name,
          btn_class: this.props.btn_class ? this.props.btn_class : this.state.btn_class,
          header: this.props.header,
          open: this.props.open,
          client: this.client(),
          dishes: this.dishes(),
       })
    }

    order = (dishes = this.dishes(), client = this.client()) => {
        return {
            id: this.id(),
            client: client,
            dishes: dishes
        }
    }

    id(){
        if(this.state.id != null){
            return this.state.id
        }else{
            return this.props.order.id != null ? this.props.order.id : null
        }
    }

    client(){
        return this.state.client.length > 0 ? this.state.client : this.props.order.client
    }

    dishes(){
        return this.state.dishes.length > 0 ? this.state.dishes : this.props.order.dishes
    }

    open() {
        this.setState({open: true})
    }

    close() {
        this.setState({open: false, dishes:[], client:'', id:null})
    }

    create(){
        let order = this.order()
        if (this.isValid(order)) {
            this.props.showNotification(
                {
                    "type": "success",
                    "title": "ORDER ACTION STATUS",
                    "message": "Created!!",
                    "icon": "bullhorn",
                    "time": 2000,
                    "timeout": 250,
                    "onClose": ''
                }
            )
            let order_created = this.props.onCreate({client: this.client(), dishes: this.dishes()})
            this.setState(order_created)
        }else {
            this.props.showNotification(
                {
                    "type": "warning",
                    "title": "ORDER ACTION STATUS",
                    "message": "Invalid data!",
                    "icon": "bullhorn",
                    "time": 2000,
                    "timeout": 250,
                    "onClose": ''
                }
            )
        }
    }

    update(){
        let order = this.order()
        if (this.isValid(order)) {
            this.props.showNotification(
                {
                    "type": "success",
                    "title": "ORDER ACTION STATUS",
                    "message": "Updated!",
                    "icon": "bullhorn",
                    "time": 2000,
                    "timeout": 250,
                    "onClose": ''
                }
            )
            let order_updated = this.props.onUpdate(this.order())
            this.setState(order_updated)
        }else {
            this.props.showNotification(
                {
                    "type": "warning",
                    "title": "ORDER ACTION STATUS",
                    "message": "Invalid data!",
                    "icon": "bullhorn",
                    "time": 2000,
                    "timeout": 250,
                    "onClose": ''
                }
            )
        }
    }

    delete(){
        this.props.showNotification(
            {
                "type": "warning",
                "title": "ORDER ACTION STATUS",
                "message": "Deleted!",
                "icon": "bullhorn",
                "time": 2000,
                "timeout": 250,
                "onClose": ''
            }
        )
        this.props.onDelete(this.id())
        this.setState({open:true, dishes:[], client:'', id:null})
    }

    editClient(e){
        let client_edited = e.target.value
        this.setState({client:client_edited})
    }

    editDishCount(dish_edited){
        let dishes = map(this.dishes(), (dish) => {
            if (dish.id === dish_edited.id){
                dish.items_count = dish_edited.items_count
            }
            return dish
        })
        this.setState({dishes:dishes})
    }

    resetDishes(dishes) {
        let dishes_props = this.props.order.dishes
        map(dishes, (dish) => {
            if (dishes_props.length > 0) {
                dishes_props.map(d =>{
                    if (d.id === dish.id){
                        dish.items_count = d.items_count
                    }else {
                        dish.items_count = 1
                    }
                    return dish
                })
            }else {
                dish.items_count = 1
            }
            return dish
        })
        this.setState({dishes: dishes})
    }

    isValid(obj){
        let is_valid = true
        if(obj.hasOwnProperty('client')){
            if (obj.client.length === 0){
                is_valid = false
            }
        }

        if(obj.hasOwnProperty('dishes')){
            if (obj.dishes.length === 0){
                is_valid = false
            }
        }
        return is_valid
    }

    render() {
        return (
            <div id="action_area">
                <Button className={this.state.btn_class} onClick={this.open}>
                    {this.state.btn_name}
                </Button>
                <Modal open={this.state.open} onClose={this.close}>
                    <Modal.Header>
                        {this.state.header}{this.id()}
                    </Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field width={4}>
                                <label>Client</label>
                                <input defaultValue={this.client()} size={25} onChange={this.editClient}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Dishes Ordered:</label>
                            </Form.Field>
                            <ul>
                                {
                                    this.dishes().map((dish) => {
                                        return <DishInput key={dish.id} dish={dish} edit_dish={this.editDishCount} />
                                    })
                                }
                            </ul>
                            <DishSelector
                                selected_dishes={this.dishes()}
                                reset_dishes={this.resetDishes}
                            />
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.close}>Close</Button>
                        <Button positive onClick={this.id() != null ? this.update : this.create}>Save</Button>
                        {this.id() !== null ? <Button negative onClick={this.delete}>Delete</Button> : ''}
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }

}

export default OrderModal