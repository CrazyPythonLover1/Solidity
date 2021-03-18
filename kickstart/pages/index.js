import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
const helpers = require('web3-core-helpers');
import Layout from '../components/Layout'

helpers.formatters;
helpers.errors;

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        // console.log(campaigns)
        return {campaigns};
    }

    async componentDidMount() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        // console.log(campaigns)
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a> View Campaign </a>,
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout> 
            <div> 
                {this.props.campaigns[0]} 
                <Button content='Create Campaign' icon='plus' labelPosition='left' primary />
            </div>
            </Layout>
        )
    }
}

export default CampaignIndex;