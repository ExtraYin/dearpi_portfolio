var React = require('react');
var cookie = require("react-cookie");

var nav_title = {
    "CN": {
      "home": "主页",
      "portfolio": "作品集",
      "resume": "个人简介"
    },
    "EN": {
        "home": "Home",
        "portfolio": "Portfolio",
        "resume": "Resume"
    },
    "JA": {
        "home": "ホームぺーじ",
        "portfolio": "ポートフォリオ",
        "resume": "履歴書"
    }
};


var TopNavBar = React.createClass({
    getInitialState() {
        var lang = cookie.load("langOpt");
        if (lang){
            return nav_title[lang]
        } else {
            return nav_title['CN'];
        }
    },
    changeToChinese(){
        this.setState(nav_title['CN']);
        cookie.save("langOpt", "CN", {path: '/'});
        console.log(cookie.load("langOpt"));
    },
    changeToEnglish(){
        this.setState(nav_title['EN']);
        cookie.save("langOpt", "EN", {path: '/'});
        console.log(cookie.load("langOpt"));
    },
    changeToJapanese(){
        this.setState(nav_title['JA']);
        cookie.save("langOpt", "JA", {path: '/'});
        console.log(cookie.load("langOpt"));
    },
    render: function () {
        console.log(cookie.load("langOpt"));
        return (
            <nav className="navbar navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a className="nav-opt" href="index.html">{this.state.home}</a>
                            </li>
                            <li>
                                <a className="nav-opt" href="portfolio.html">{this.state.portfolio}</a>
                            </li>
                            <li>
                                <a className="nav-opt" href="resume.html">{this.state.resume}</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a className="nav-opt" onClick={this.changeToChinese}>中文</a>
                            </li>
                            <li>
                                <a className="nav-opt-eng" onClick={this.changeToEnglish}>English</a>
                            </li>
                            <li>
                                <a className="nav-opt" onClick={this.changeToJapanese}>日本語</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = TopNavBar;