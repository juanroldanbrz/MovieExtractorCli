import React, {Component} from 'react';
import axios from 'axios';
import './DomainManager.css'
import 'font-awesome/css/font-awesome.min.css';
import Glyphicon from "react-bootstrap/es/Glyphicon";
import Button from "react-bootstrap/es/Button";
import CrawlerConfigComponent from "./config/CrawlerConfig";

class DomainManagerComponent extends Component {

    state = {domains: []};

    showCrawlerTabContent = () => this.setState({showCrawlerTabContent: true});

    amIaSelectedTab = (tabName) => this.state.currentTab === tabName;

    selectTab = (tabName) => this.setState( {currentTab : tabName} );

    render = () => {
        let data = this.state.domains.map(obj =>
            <div className="row">
                <div className="col-xs-8">
                    <div className="panel with-nav-tabs panel-default">
                        <div className="panel-heading">
                            <div className="row">

                                <div className="col-xs-3"><h5>{obj.domain}</h5></div>
                                <div className="col-xs-5">
                                    <ul className="nav nav-tabs">
                                        <li className={this.amIaSelectedTab('stats') ? 'active' : ''}><a href="#tab1primary" data-toggle="tab">Stats</a></li>
                                        <li className={this.amIaSelectedTab('crawler') ? 'active' : ''}><a href="#tab2primary" data-toggle="tab">Crawler</a></li>
                                        <li className={this.amIaSelectedTab('extraction-rules') ? 'active' : ''}><a href="#tab3primary" data-toggle="tab">Extraction rules</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-4">
                                    <Button bsSize="small">
                                        <Glyphicon glyph="play"/>
                                    </Button>
                                    <Button bsSize="small">
                                        <Glyphicon glyph="repeat" />
                                    </Button>
                                    <Button bsSize="small">
                                        <Glyphicon glyph="pause" />
                                    </Button>
                                    <Button bsSize="small">
                                        <Glyphicon glyph="stop" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                            <div hidden={!this.amIaSelectedTab('crawler')}><CrawlerConfigComponent/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                {data}
            </div>

        )
    };

    componentDidMount = () => {
        this.selectTab('crawler');
        axios.get('http://localhost:8080/process')
            .then(
                res => {
                    this.setState({domains: JSON.parse(JSON.stringify(res.data))});
                    this.render();
                });
    }
}

export default DomainManagerComponent;