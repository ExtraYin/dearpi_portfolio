//index.js

var bkg_img_list = ['123665147859405668.jpg', '564206975470062966.jpg', '640999239315762742.jpg', '642937979973547359.jpg',
    '712012402254975154.jpg', '715252349923378279.jpg', '908364515923191597.jpg', 'index_L2.jpg'];

var selected = Math.floor(Math.random() * bkg_img_list.length);

$(".header_photo").attr("src", "public/img/index_bkg/" + bkg_img_list[selected]);