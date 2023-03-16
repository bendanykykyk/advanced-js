// 简易事件总线。线上比较好的库的话有mitt

class YKEventBus {
  constructor() {
    //   bus = {'onBtnClick':[fnCallBack,fnCallBack,fnCallBack]}
    this.bus = {};
  }
  on(eventName, eventCallBack, thisArg) {
    const handlers = this.bus[eventName] || [];
    this.bus[eventName] = handlers;
    handlers.push({
      eventCallBack,
      thisArg,
    });
  }
  emit(eventName, ...payload) {
    const handlers = this.bus[eventName] || [];
    handlers.forEach((handler) => {
      handler.eventCallBack.apply(handler.thisArg, payload);
    });
  }
  off(eventName, eventCallBack) {
    const handlers = this.bus[eventName] || [];
    const tempHandlers = [...handlers];
    for (let handler of tempHandlers) {
      if (handler.eventCallBack === eventCallBack) {
        const index = handlers.indexOf(handler);
        handlers.splice(index, 1);
      }
    }
  }
}

const $eventBus = new YKEventBus();
const callBack = (payload, payload2) => {
  console.log(payload, payload2);
};
$eventBus.on("onBtnClick", callBack);
$eventBus.on("onBtnClick", callBack);

$eventBus.off("onBtnClick", callBack);

$eventBus.emit("onBtnClick", 1, 2, 3);
