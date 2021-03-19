import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {
    state = {
        value: '',
        description: '',
        recipient: ''
    }
    static async getInitialProps(props) {
        const {address} = props.query;

        return {address}
    }

    onSubmit = async (event) => {
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        const { description, value, recipient} = this.state;

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods
                .createRequest(
                    description,
                    web3.utils.toWei(value, 'ether'),
                    recipient
                )
                .send({ from: accounts[0]});
        } catch (err) {

        }
    }

    render() {
        return (
            <Layout>
                <h3> Create a Request </h3>

                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label> Description </label>
                        <input
                            value={this.state.description}
                            onChange={e => this.setState({description: e.target.value})}
                            placeholder='' 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label> Value in Ether </label>
                        <input 
                            value={this.state.vlue}
                            onChange={e => this.setState({value: e.target.value})}
                            placeholder=''
                        />
                    </Form.Field>
                    <Form.Field>
                        <label> Recipient </label>
                        <input 
                            value={this.state.recipient}
                            onChange={e => this.setState({recipient: e.target.value})}
                            placeholder='' />
                    </Form.Field>
                    <Button type='submit' primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}

RequestNew.propTypes = {

};

export default RequestNew;