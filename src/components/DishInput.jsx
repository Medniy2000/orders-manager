import React from'react';
import {Form} from "semantic-ui-react";


class DishInput extends React.Component{

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
        this.changeCount = this.changeCount.bind(this)

    }

    changeCount(e){
        const count = e.target.value;
        this.props.edit_dish({
            id: this.props.dish.id,
            items_count: parseInt(count)
        });
    }

    render() {
        return (
            <li>
                {this.props.dish.name}
                <div className="two wide field">
                    <Form.Field >
                        <input
                            type="number"
                               defaultValue={this.props.dish.items_count}
                               onChange={this.changeCount}
                        />
                    </Form.Field>
                </div>
            </li>
        );
    }

};

export default DishInput;