import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Message} from 'semantic-ui-react'

class ContributeForm extends Component {
    constructor(props) {
        super(props);
     }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <Form>
                <Form.Field>
                    <label> Amount to Contribute </label>
                    <Input 
                        label='ether' 
                        placeholder='' 
                        labelPosition='right' 
                        // value={this.state.minimumContribution}
                        // onChange={event => this.setState({ minimumContribution: event.target.value })}
                    />
                </Form.Field>
                <Button primary>
                    Contribute!
                </Button>
            </Form>
        );
    }
}

ContributeForm.propTypes = {

};

export default ContributeForm;