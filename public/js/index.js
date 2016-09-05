//index.js
var React = require('react');
var ReactDOM = require('react-dom');
var TopNavBar = require('./top_nav.js');

var bkg_img_list = ['123665147859405668.jpg', '564206975470062966.jpg', '640999239315762742.jpg', '642937979973547359.jpg',
    '712012402254975154.jpg', '715252349923378279.jpg', '908364515923191597.jpg', '36629755858063848.jpg'];

var IndexBackgroundImage = React.createClass({
    render: function () {
        var selected = Math.floor(Math.random() * bkg_img_list.length);
        return (
            <img
                src={"public/img/index_bkg/" + bkg_img_list[selected]}
                alt="photo"
                className="header_photo"
            />
        );
    }
});


ReactDOM.render(<TopNavBar />, document.getElementById('index_header'));
ReactDOM.render(<IndexBackgroundImage />, document.getElementById('index_bkg'));
