define("mui/common/js/tm",function(e,a,n){var t=e("mui/custom-event/index");var i={};i.loginHttp="https";i._isLoginStatusReady=false;i._loginStatusReadyFnList=[];i._isMemberInfoReady=false;i._memberInfoReadyFnList=[];i.userInfo={memberInfo:{}};i.instance={};i.elCont={};i.Global=i.Global||{on:t.on,fire:t.trigger,trigger:t.trigger,detach:t.off,off:t.off};n.exports=i});