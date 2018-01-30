import React, { Component } from 'react';

class HeaderComponent extends Component{
    render() {
        return (
            <div class="container-fluid">
                <nav class="navbar navbar-default">
                    <div class="container">
                        <div class="navbar-header">
                            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <a class="navbar-brand" href="#">The Movie Octopus</a>
                        </div>

                        <div class="collapse navbar-collapse" id="navbar-collapse-1">
                            <ul class="nav navbar-nav navbar-right">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">News</a></li>
                                <li><a href="#">Contact</a></li>
                                <li>
                                    <a class="btn btn-default btn-outline btn-circle"  data-toggle="collapse" aria-expanded="false" aria-controls="nav-collapse1">STOP EVERYTHING</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        );
    }
}

export default HeaderComponent;