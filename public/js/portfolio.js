//portfolio.js
var React = require('react');
var ReactDOM = require('react-dom');

// ------------------------------
var projects = [{
					project_title: "PAVI_Office_system",
					project_detail: "say something say something say something say something say something say something say something",
					project_img: "public/img/project_img/PAVI_Office_system.jpg",
					project_detail_page: "public/img/project_detail/PAVI1.jpg"
				}, {
					project_title: "加湿器",
					project_detail: "say something say something say something say something say something say something say something",
					project_img: "public/img/project_img/加湿器.jpg",
					project_detail_page: "public/img/project_detail/加湿器.pdf"
				}, {
					project_title: "竹编几",
					project_detail: "say something say something say something say something say something say something say something",
					project_img: "public/img/project_img/竹编几.jpg",
					project_detail_page: "public/img/project_detail/竹编几.pdf"
				}, {
					project_title: "OVO_STOOL",
					project_detail: "say something say something say something say something say something say something say something",
					project_img: "public/img/project_img/OVO_STOOL.jpg",
					project_detail_page: "public/img/project_detail/OVO_STOOL0.jpg"
				}, {
					project_title: "弹电吉他的维特鲁威人",
					project_detail: "say something say something say something say something say something say something say something",
					project_img: "public/img/project_img/弹电吉他的维特鲁威人.jpg",
					project_detail_page: "public/img/project_detail/2015年夏季T恤图案设计.pdf"
				}
];

// ------------------------------
var projectDetailPage = React.createClass({
    render: function () {
        return (
            <div className="container">
                <embed
                    src={this.props.project['project_detail_page']}
                    alt={this.props.project['project_title']}
                    style={{width: '100%', height: "100%"}}
                />
            </div>
        );
    }
});
// -----------------------------
var PortfolioItem = React.createClass({
    getInitialState() {
        return {
            opacity: 1
        };
    },
    handleHoverOn(){
        this.setState({opacity: "0.8"});
    },
    handleHoverOff(){
        this.setState({opacity: "1"});
    },
	showDetailPage() {
        // ReactDOM.render(<projectDetailPage project={this.props.project} />, document.getElementById('portfolio_root'));
        var thisStyle = {};
        var match = this.props.project['project_detail_page'].match(/\.pdf$/);
        console.log(match);
        if (match){
            thisStyle = {width: '100%', height: "100%"};
        } else {
            thisStyle = {width: '100%'};
        }
        ReactDOM.render(
            <div className="container">
                <embed
                    src={this.props.project['project_detail_page']}
                    alt={this.props.project['project_title']}
                    style={thisStyle}
                />
            </div>
            , document.getElementById('portfolio_root'));
	},
	render: function () {
		return (
			<div className="col-md-4 portfolio-item">
                <a
					// href={this.props.project['project_detail_page']}
					onClick={this.showDetailPage}
				>
                    <div className="project-img-wrapper">
                        <img
                            className="img-responsive"
                            src={this.props.project['project_img']}
                            alt={this.props.project['project_title']}
                            style={{opacity: this.state.opacity}}
                            onMouseEnter={this.handleHoverOn}
                            onMouseLeave={this.handleHoverOff}
                        />
                    </div>
                </a>
                <h3>
                    <button style={{"background": "none", "border": "none"}}><a className="project_link" onClick={this.showDetailPage}>{this.props.project['project_title']}</a></button>
                </h3>
                <p>{this.props.project['project_detail']}</p>
            </div>
		);
	}
});

var PortfolioRow = React.createClass({
	render: function () {
		var item_row = [];
		for (var i=0; i<this.props.projects.length; i++){
			item_row.push(<PortfolioItem project={this.props.projects[i]} />);
		}
		return (
			<div className="row">
				{item_row};
			</div>
		);
	}
});


var PortfolioDisplay = React.createClass({
	render: function () {
		var each_row = [];
		for (var i=0; i<this.props.projects.length/3; i++){
			each_row.push(<PortfolioRow projects={this.props.projects.slice(i*3, (i+1)*3)} />);
		}
		return (
			<div className="container">
				{each_row}
			</div>
		);
	}
});


ReactDOM.render(<PortfolioDisplay projects={projects}/>, document.getElementById('portfolio_root'));