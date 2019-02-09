import React from'react';
import {Form} from "semantic-ui-react";
import { Dropdown } from 'semantic-ui-react'


class DishSelector extends React.Component{

    constructor(props) {
        super(props)
        this.state ={
            dishes: this.props.dishes,
            options: []
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e, data){
        let dishes = [];
        this.state.dishes.forEach(dish => {
            data.value.forEach(val => {
                if (val === dish.id){
                    dishes.push(dish);
                }
            })
        });
        this.props.reset_dishes(dishes);
    }

    ordered_dishes(dishes =  this.props.selected_dishes){
        return dishes.map( dish => {
                return dish.id
            });
    }

    componentDidMount() {
        let options = [];
        this.state.dishes.forEach(dish => {
            options.push({
                key: dish.id,
                text: dish.name,
                value: dish.id,
            });
        });
        this.setState(
            {
                options: options,
            }
        );
    }

    render() {

        return (
            <div className="seven wide field">
                <Form.Field >
                    <Dropdown
                        placeholder="Dishes available"
                        fluid multiple selection options={this.state.options}
                        onChange={this.onChange}
                        defaultValue={this.ordered_dishes()}
                    />
                </Form.Field>
            </div>
        );
    }

};

export default DishSelector;