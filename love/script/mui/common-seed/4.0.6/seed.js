KISSY.config({combine:true,modules:{"mui/bucket/index":{requires:["base","ajax","cookie","mui/bucket/tool"]},"mui/common-seed/index.xtpl":{requires:["mui/xtemplate/runtime"]},"mui/searchbar/base":{requires:["node","rich-base","dom","combobox","ua","cookie","event","io"]},"mui/searchbar/index":{requires:["mui/searchbar/base","mui/searchbar/plugin/spm","mui/searchbar/plugin/hq4Mb","mui/searchbar/plugin/hq4Pc","mui/searchbar/plugin/placeholder","mui/searchbar/plugin/inShop","mui/searchbar/plugin/history/index","mui/searchbar/template/index","mui/searchbar/suggest.css"]},"mui/searchbar/instance/chaoshi":{requires:["node","ajax","mui/searchbar/base","mui/searchbar/plugin/spm","mui/searchbar/plugin/placeholder","mui/searchbar/template/cat","mui/searchbar/template/list","mui/searchbar/suggest.css"]},"mui/searchbar/instance/chaoshi-m":{requires:["node","ajax","mui/searchbar/base","mui/searchbar/plugin/spm","mui/searchbar/plugin/placeholder","mui/searchbar/plugin/hq4Mb","mui/searchbar/template/hq","mui/searchbar/template/list"]},"mui/searchbar/instance/default":{requires:["node","ajax","mui/searchbar/base","mui/searchbar/plugin/spm","mui/searchbar/plugin/placeholder","mui/searchbar/plugin/hubaccess","mui/searchbar/template/act","mui/searchbar/template/shipShop","mui/searchbar/template/cat","mui/searchbar/template/list","mui/searchbar/template/shop","mui/searchbar/template/quickSearch","mui/bucket/index","mui/searchbar/template/meetingPlace","mui/searchbar/suggest.css"]},"mui/searchbar/instance/default-m":{requires:["node","ajax","mui/searchbar/base","mui/searchbar/plugin/spm","mui/searchbar/plugin/placeholder","mui/searchbar/plugin/hq4Mb","mui/searchbar/template/hq4Mb","mui/searchbar/template/act","mui/searchbar/template/cat","mui/searchbar/template/list","mui/searchbar/plugin/popSearchBar","mui/searchbar/template/meetingPlace4Mb","mui/searchbar/instance/native"]},"mui/searchbar/instance/detail":{requires:["node","ajax","json","cookie","mui/searchbar/base","mui/searchbar/plugin/spm","mui/searchbar/plugin/placeholder","mui/searchbar/plugin/inShop","mui/searchbar/template/act","mui/searchbar/template/shipShop","mui/searchbar/template/cat","mui/searchbar/template/list","mui/searchbar/template/shop","mui/searchbar/template/quickSearch","mui/searchbar/plugin/hq4Pc","mui/bucket/index","mui/searchbar/template/meetingPlace","mui/searchbar/suggest.css"]},"mui/searchbar/instance/h5":{requires:["dom","event"]},"mui/searchbar/instance/hk":{requires:["node","ajax","mui/searchbar/base","mui/searchbar/plugin/spm","mui/searchbar/plugin/placeholder","mui/searchbar/template/list","mui/searchbar/suggest.css"]},"mui/searchbar/instance/list-m":{requires:["ajax","mui/searchbar/base","mui/searchbar/plugin/spm","mui/searchbar/plugin/placeholder","mui/searchbar/template/act","mui/searchbar/template/cat","mui/searchbar/template/list"]},"mui/searchbar/instance/native":{requires:["node"]},"mui/searchbar/instance/tmhk":{requires:["node","ajax","mui/searchbar/base","mui/searchbar/plugin/spm","mui/searchbar/plugin/placeholder","mui/searchbar/template/act","mui/searchbar/template/cat","mui/searchbar/template/list","mui/searchbar/template/quickSearch","mui/bucket/index","mui/searchbar/plugin/hq4Pc","mui/searchbar/suggest.css"]},"mui/searchbar/plugin/history/cloud":{requires:["base","ajax","cookie"]},"mui/searchbar/plugin/history/index":{requires:["base","event","node","ajax","cookie","mui/searchbar/plugin/history/remoteBridge","mui/searchbar/template/history"]},"mui/searchbar/plugin/history/localBridge":{requires:["base","mui/searchbar/plugin/history/storage"]},"mui/searchbar/plugin/history/remoteBridge":{requires:["base","mui/searchbar/plugin/history/cloud"]},"mui/searchbar/plugin/history/storage":{requires:["base","ua"]},"mui/searchbar/plugin/history4Mb":{requires:["dom","base","ajax"]},"mui/searchbar/plugin/hq4Mb":{requires:["dom","base","ajax"]},"mui/searchbar/plugin/hq4Pc":{requires:["dom","event","base","ajax"]},"mui/searchbar/plugin/hubaccess":{requires:["dom","base","event","uri","ua"]},"mui/searchbar/plugin/inShop":{requires:["event","base","node"]},"mui/searchbar/plugin/login4Mb":{requires:["dom","base","mui/login-m"]},"mui/searchbar/plugin/placeholder":{requires:["dom","base"]},"mui/searchbar/plugin/popSearchBar":{requires:["dom","base","ajax","event","mui/searchbar/suggest-m.css"]},"mui/searchbar/plugin/spm":{requires:["dom","base"]},"mui/searchbar/template/act":{requires:["ajax"]},"mui/searchbar/template/cat":{requires:["dom"]},"mui/searchbar/template/history":{requires:["dom"]},"mui/searchbar/template/hq4Mb":{requires:["dom","event"]},"mui/searchbar/template/index":{requires:["mui/searchbar/template/act","mui/searchbar/template/history","mui/searchbar/template/cat","mui/searchbar/template/list","mui/searchbar/template/item","mui/searchbar/template/shop","mui/searchbar/template/quickSearch"]},"mui/searchbar/template/meetingPlace":{requires:["dom","uri"]},"mui/searchbar/template/meetingPlace4Mb":{requires:["dom","uri"]},"mui/view-port-listen/index":{requires:["mui/zepto/touch"]},"mui/zepto/event":{requires:["mui/zepto/zepto"]},"mui/zepto/form":{requires:["mui/zepto/zepto"]},"mui/zepto/fx":{requires:["mui/zepto/zepto"]},"mui/zepto/fx_methods":{requires:["mui/zepto/zepto"]},"mui/zepto/gesture":{requires:["mui/zepto/zepto"]},"mui/zepto/ie":{requires:["mui/zepto/zepto"]},"mui/zepto/selector":{requires:["mui/zepto/zepto"]},"mui/zepto/stack":{requires:["mui/zepto/zepto"]},"mui/zepto/touch":{requires:["mui/zepto/zepto","mui/zepto/event"]}},packages:{kissy:{base:"//g.alicdn.com/kissy/k/1.4.10/",version:"1.4.10"},"mui/bucket":{debug:true,ignorePackageNameInUri:true,path:"//g.alicdn.com/mui/bucket/3.0.4/",version:"3.0.4"},"mui/common-seed":{debug:true,group:"tm",ignorePackageNameInUri:true,path:"//g.alicdn.com/mui/common-seed/4.0.6/",version:"4.0.6"},"mui/jquery":{debug:true,group:"tm",ignorePackageNameInUri:true,path:"//g.alicdn.com/mui/jquery/4.0.1/",version:"4.0.1"},"mui/searchbar":{debug:true,group:"tm",ignorePackageNameInUri:true,path:"//g.alicdn.com/mui/searchbar/3.3.28/",version:"3.3.28"},"mui/view-port-listen":{debug:true,group:"tm",ignorePackageNameInUri:true,path:"//g.alicdn.com/mui/view-port-listen/4.0.3/",version:"4.0.3"},"mui/zepto":{debug:true,group:"tm",ignorePackageNameInUri:true,path:"//g.alicdn.com/mui/zepto/4.0.3/",version:"4.0.3"}}});