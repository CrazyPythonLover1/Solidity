import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xB6d3337D61BE5686b13ee0d702FA3dA2ae6b0cD6'
);

export default instance;