import mixin from './mixin';
import reactMixin from 'react-mixin';

export function interval(time, action) {
  return (target) => {
    var intervalMixin = mixin({
      isActivated: false,
      _interval: null,
      activateInterval: function() {
        if (!this.isActivated) {
          this._interval = setInterval(() => {
            this.context.store.dispatch(action());
          }, time);
          this.isActivated = true;
        }
      },
      deactivateInterval: function () {
        if (this.isActivated) {
          clearInterval(this._interval);
        }
      }
    });
    return intervalMixin(target);
  }
}

