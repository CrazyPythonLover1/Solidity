import React, { Component } from 'react';
import { Button, Form, Input, Message} from 'semantic-ui-react'
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
    constructor(props) {
        super(props);

    }

    state = {
        minimumContribution: '',
        errorMessage: ''
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    onSubmit = async (event) => {
        event.preventDefault();

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods
                .createCampaign(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                });

        } catch (err) {
            this.setState({errorMessage: err.message})
        }
    };

    render() {
        return (
            <Layout>
                <h1> Create a new Campaign!</h1>


                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                    <label> Minimum Contribution </label>
                    <Input 
                        label='wei' 
                        placeholder='' 
                        labelPosition='right' 
                        value={this.state.minimumContribution}
                        onChange={event => this.setState({ minimumContribution: event.target.value })}
                    />
                    </Form.Field>

                    <Message negative error>
                        <Message.Header> { this.state.errorMessage } </Message.Header>
                    </Message>

                    <Button type='submit' primary> Create! </Button>
                </Form>
            </Layout>
        );
    }
}


export default CampaignNew;