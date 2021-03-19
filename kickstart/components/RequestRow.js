import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table  } from 'semantic-ui-react';
import web3 from '../ethereum/web3';

class RequestRow extends Component {
    
    render() {
        const {  Row, Cell, } = Table;
        const { id, request } = this.props;
        return (
            <Row>
                <Cell> { id+1} </Cell>
                <Cell> { request.description } </Cell>
                <Cell> { web3.utils.fromWei(request.value, 'ether') } </Cell>
                <Cell> { request.recipient } </Cell>
                <Cell> { request.approvalCount } </Cell>
                {/* <Cell> { request. } </Cell>
                <Cell> { request. } </Cell> */}
            </Row>
        );
    }
}

RequestRow.propTypes = {

};

export default RequestRow;