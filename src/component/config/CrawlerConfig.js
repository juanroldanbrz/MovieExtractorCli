import React, {Component} from 'react';
import Glyphicon from "react-bootstrap/es/Glyphicon";
import axios from 'axios';

class CrawlerConfigComponent extends Component {

    amIaSelectedStatus = (selectedStatus) => this.state && this.state.status === selectedStatus;
    amIaBehindFirewall = () => this.state && this.state.isBehindFirewall;

    constructor(props) {
        super(props);

        this.onChangeInputUrl = this.onChangeInputUrl.bind(this);

        this.state = {

            toSave : {
                entryPoint : '',
                whiteList : '',
                blackList : ''
            },

            status : 'unknown',
            isBehindFirewall: false
        };
    }

    onChangeInputUrl(event) {
        this.setState({entryPoint: event.target.value});
    }

    testConnection = (event) => {
        event.preventDefault();
        axios.get('http://localhost:8080/utils/test-connection?url=' + this.state.toSave.entryPoint)
            .then((res) => {
                let isBehindFirewall = res.data.isBehindFirewall;
                if(isBehindFirewall){
                    this.setState({isBehindFirewall: isBehindFirewall});
                }
                this.setState({status: res.data.status});
            }
            );
    };

    render = () => <div className="row">
        <div className="col-xs-12">
            <form>
                <div className="form-group row">
                    <div className="col-sm-2">
                        <label for="entryPoint">Entry point</label>
                    </div>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" value={this.state.toSave.entryPoint} onChange={this.onChangeInputUrl} />
                    </div>
                    <div className="col-sm-2">
                        <div className="col-xs-2" hidden={!this.amIaSelectedStatus('unknown')} >
                            <span title="This website can be crawled" className='pull-left'>
                                <Glyphicon glyph="exclamation-sign"/>
                            </span>
                        </div>
                        <div className="col-xs-2" hidden={!this.amIaSelectedStatus('alive')}>
                            <span title="Connection successful" className='pull-left'>
                                <Glyphicon glyph="ok"/>
                            </span>
                        </div>
                        <div className="col-xs-2" hidden={!this.amIaSelectedStatus('dead')}>
                            <span title="Connection error" className='pull-left'>
                                <Glyphicon glyph="glyphicon-remove"/>
                            </span>
                        </div>
                        <div className="col-xs-5" hidden={!this.amIaBehindFirewall()}>
                            <span title="This website is under a firewall" className='pull-left'>
                                <Glyphicon glyph="lock"/>
                            </span>
                        </div>

                    </div>
                    <div className="col-sm-2">
                        <button className='btn btn-info pull-left' onClick={this.testConnection}>Test connection</button>
                    </div>
                    <div className="col-sm-2">
                        <button className='btn btn-success pull-right'>Save</button>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputWhiteList" className="col-sm-2 col-form-label">White list</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputWhiteList" value='*'/>
                    </div>
                </div>
                <div className="form-group row">
                    <label for="inputBlackList" className="col-sm-2 col-form-label">Black list</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputBlackList" value=''/>
                    </div>
                </div>
            </form>
        </div>
    </div>

}

export default CrawlerConfigComponent;