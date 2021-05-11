import Base from './modules/base';
import TopBar from './modules/TopBar';
import ZoomPage from './modules/ZoomPage';
import PointerFllow from './modules/PointerFllow';
import CursorAuto from './modules/CursorAuto';
class Assist extends Base {
  
    constructor(opts = {}) {
      super(opts);
      // 合并参数
      this.mergeConfig(opts);
      this.init();
    }
  
    init() {
      this.use(TopBar);
      this.use(ZoomPage);
      this.use(PointerFllow);
      this.use(CursorAuto);
    }

  }
  new Assist()
  export default Assist;
