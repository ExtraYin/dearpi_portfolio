var React = require('react');
var cookie = require("react-cookie");

var nav_title = {
    "CN": {
        "home": "主页",
        "portfolio": "作品集",
        "resume": "个人简介",
        "letterSpacing": 4
    },
    "EN": {
        "home": "Home",
        "portfolio": "Portfolio",
        "resume": "Resume",
        "letterSpacing": 0
    },
    "JA": {
        "home": "ホームぺーじ",
        "portfolio": "ポートフォリオ",
        "resume": "履歴書",
        "letterSpacing": 4
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
        this.props.changeLang("CN");
    },
    changeToEnglish(){
        this.setState(nav_title['EN']);
        cookie.save("langOpt", "EN", {path: '/'});
        this.props.changeLang("EN");
    },
    changeToJapanese(){
        this.setState(nav_title['JA']);
        cookie.save("langOpt", "JA", {path: '/'});
        this.props.changeLang("JA");
    },
    render: function () {
        console.log(cookie.load("langOpt"));
        return (
            <nav className="navbar navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a style={{"letter-spacing": this.state.letterSpacing, "color": "white"}} href="index.html">{this.state.home}</a>
                            </li>
                            <li>
                                <a style={{"letter-spacing": this.state.letterSpacing, "color": "white"}} href="portfolio.html">{this.state.portfolio}</a>
                            </li>
                            <li>
                                <a style={{"letter-spacing": this.state.letterSpacing, "color": "white"}} href="resume.html">{this.state.resume}</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a style={{"letter-spacing": 4, "color": "white"}} onClick={this.changeToChinese}>中文</a>
                            </li>
                            <li>
                                <a style={{"color": "white"}} onClick={this.changeToEnglish}>English</a>
                            </li>
                            <li>
                                <a style={{"letter-spacing": 4, "color": "white"}} onClick={this.changeToJapanese}>日本語</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

module.exports = TopNavBar;