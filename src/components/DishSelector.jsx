import React from'react'
import {Form} from "semantic-ui-react"
import { Dropdown } from 'semantic-ui-react'

import {map, forEach} from 'lodash/collection'

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
        let dishes = []
        forEach(this.state.dishes, (dish) => {
            data.value.forEach(val => {
                if (val === dish.id){
                    dishes.push(dish)
                }
            })
        })
        this.props.reset_dishes(dishes)
    }

    ordered_dishes(dishes =  this.props.selected_dishes){
        return map(dishes, 'id')
    }

    componentDidMount() {
        let options = map(this.state.dishes, (dish) => {
            return{
                key: dish.id,
                text: dish.name,
                value: dish.id,
            }
        })
        this.setState(
            {
                options: options,
            }
        )
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
        )
    }

}

export default DishSelector