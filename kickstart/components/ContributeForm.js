import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Message} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';

class ContributeForm extends Component {
     state = {
         value: ''
     };

    componentWillMount() {

    }
    // console.log(this.state.value)

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            });

            console.log(campaign)
            console.log(this.state.value)

        } catch (err) {
            console.log(campaign)
            console.log(this.state.value)
        }
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label> Amount to Contribute </label>
                    <Input 
                        label='ether' 
                        placeholder='' 
                        labelPosition='right' 
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })}
                    />
                </Form.Field>
                <Button type='submit' primary>
                    Contribute!
                </Button>
            </Form>
        );
    }
}

ContributeForm.propTypes = {

};

export default ContributeForm;