define("mui/zebra-particle/index-pc",["mui/kissy-polyfill/index","mui/zepto/zepto","mui/particle/index"],function(e,i,a){function t(e,i){var a={"image":{"src":"//img.alicdn.com/tfs/TB1d5YGPXXXXXXiaFXXXXXXXXXX-96-83.png","width":96,"height":83}},t=JSON.parse(i),o=Object.assign(a,t),l={"particles":{"number":{"value":100,"density":{"enable":!0,"value_area":800}},"color":{"value":"#fff"},"shape":{"type":"image","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":o.image},"opacity":{"value":.5,"random":!0,"anim":{"enable":!1,"speed":1,"opacity_min":.1,"sync":!1}},"size":{"value":10,"random":!0,"anim":{"enable":!1,"speed":40,"size_min":.1,"sync":!1}},"line_linked":{"enable":!1,"distance":500,"color":"#ffffff","opacity":.4,"width":2},"move":{"enable":!0,"speed":6,"direction":"bottom","random":!1,"straight":!1,"out_mode":"out","bounce":!1,"attract":{"enable":!1,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":!0,"mode":"bubble"},"onclick":{"enable":!0,"mode":"repulse"},"resize":!0},"modes":{"grab":{"distance":400,"line_linked":{"opacity":.5}},"bubble":{"distance":400,"size":4,"duration":.3,"opacity":1,"speed":3},"repulse":{"distance":200,"duration":.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":!0};n("zebra-particle",l)}e("mui/kissy-polyfill/index");var n=(e("mui/zepto/zepto"),e("mui/particle/index"));a.exports=t});