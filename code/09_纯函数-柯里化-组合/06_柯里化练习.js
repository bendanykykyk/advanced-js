// 实现一个打印，可以输出当前打印的时间，打印的类型（DEBUG，ONLINE），真正打印的东西
// 原本可能需要通过 log(new Date(),'DEBUG',"text内容") 这样前面2项每次都基本要重复 很麻烦 ，就可以考虑柯里化

function log(date, logType) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  return function (text) {
    console.log(`${hours}:${minutes}:${seconds}`, logType, text);
  };
}

const nowAndDebugLog = log(new Date(), "DEBUG");

nowAndDebugLog("嘿嘿");
nowAndDebugLog("芜湖");

const nowAndOnlineLog = log(new Date(), "ONLINE");
nowAndOnlineLog("哇塞");
