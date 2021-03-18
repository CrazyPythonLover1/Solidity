'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Solidity\\kickstart\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew(props) {
        var _this2 = this;

        (0, _classCallCheck3.default)(this, CampaignNew);

        var _this = (0, _possibleConstructorReturn3.default)(this, (CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call(this, props));

        _this.state = {
            minimumContribution: '',
            errorMessage: ''
        };

        _this.onSubmit = function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _context.prev = 1;
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.next = 7;
                                return _factory2.default.methods.createCampaign(_this.state.minimumContribution).send({
                                    from: accounts[0]
                                });

                            case 7:
                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](1);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[1, 9]]);
            }));

            return function (_x) {
                return _ref.apply(this, arguments);
            };
        }();

        return _this;
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('h1', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, ' Create a new Campaign!'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, ' Minimum Contribution '), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                placeholder: '',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { negative: true, error: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(_semanticUiReact.Message.Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, ' ', this.state.errorMessage, ' ')), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, ' Create! ')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkNhbXBhaWduTmV3IiwicHJvcHMiLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJzZXRTdGF0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFWDt5Q0FDRjs7eUJBQUEsQUFBWSxPQUFPO3FCQUFBOzs0Q0FBQTs7b0pBQUEsQUFDVDs7Y0FEUyxBQUtuQjtpQ0FBUSxBQUNpQixBQUNyQjswQkFQZSxBQUtYLEFBRVU7QUFGVixBQUNKOztjQU5lLEFBc0JuQix1QkF0Qm1CO2dHQXNCUixpQkFBQSxBQUFPLE9BQVA7b0JBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7c0NBRE8sQUFDUCxBQUFNOztnREFEQztnREFBQTt1Q0FJb0IsY0FBQSxBQUFLLElBSnpCLEFBSW9CLEFBQVM7O2lDQUExQjtBQUpILG9EQUFBO2dEQUFBO3lEQUtHLEFBQVEsUUFBUixBQUNELGVBQWUsTUFBQSxBQUFLLE1BRG5CLEFBQ3lCLHFCQUR6QixBQUVEOzBDQUNTLFNBUlgsQUFLRyxBQUVJLEFBQ0ksQUFBUztBQURiLEFBQ0YsaUNBSEY7O2lDQUxIO2dEQUFBO0FBQUE7O2lDQUFBO2dEQUFBO2dFQVlIOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBWjFCLEFBWUgsQUFBYyxBQUFtQjs7aUNBWjlCO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0FBdEJROztpQ0FBQTt3Q0FBQTtBQUFBO0FBQUE7O2VBR2xCOzs7Ozs2Q0FPb0IsQUFFcEI7Ozs0Q0FFbUIsQUFFbkI7OzsrQ0FFc0IsQUFFdEI7OztpQ0FrQlE7eUJBQ0w7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLDRDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNBLDJDQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOzZCQUZKLEFBRWdCLEFBQ1o7K0JBSEosQUFHa0IsQUFDZDt1QkFBTyxLQUFBLEFBQUssTUFKaEIsQUFJc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxxQkFBcUIsTUFBQSxBQUFNLE9BQXBELEFBQVMsQUFBYyxBQUFvQztBQUx6RTs7OEJBQUE7Z0NBSEosQUFDSSxBQUVBLEFBU0E7QUFUQTtBQUNJLGlDQVFKLEFBQUMsMENBQVEsVUFBVCxNQUFrQixPQUFsQjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCx5QkFBQSxBQUFTOzs4QkFBVDtnQ0FBQTtBQUFBO0FBQUEsZUFBbUIsVUFBQSxBQUFLLE1BQXhCLEFBQThCLGNBYnRDLEFBWUksQUFDSSxBQUdKLHVCQUFBLEFBQUMseUNBQU8sTUFBUixBQUFhLFVBQVMsU0FBdEI7OEJBQUE7Z0NBQUE7QUFBQTtlQXJCWixBQUNJLEFBSUksQUFnQkksQUFJZjs7Ozs7QSxBQWpFcUIsQUFxRTFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Tb2xpZGl0eS9raWNrc3RhcnQifQ==