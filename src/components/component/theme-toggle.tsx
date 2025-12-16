@ -7,60 +7,78 @@ const styles = `
  .theme-switch {
    width: 62px;
    height: 32px;
    background-color: #e2e8f0; /* Light gray for light mode */
    background-color: #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    padding: 5px;
    padding: 2px; /* 稍微减小 padding 让滑块更大 */
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    transition: background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* 背景色平滑过渡 */
    border: 1px solid transparent; /* 预留边框位置避免抖动 */
  }
  
  .theme-switch.dark {
    background: linear-gradient(45deg, #3b82f6, #8b5cf6);
    background-color: #1e293b; /* 使用深色背景代替渐变，通常更干净，或者保留你的渐变 */
    /* background: linear-gradient(45deg, #3b82f6, #8b5cf6); // 如果你喜欢之前的渐变可以保留这行 */
    border-color: #334155;
  }

  .theme-switch-handle {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 28px;
    width: 28px; /* 稍微调整尺寸 */
    height: 28px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s ease;
    /* 关键点：使用弹性贝塞尔曲线 */
    transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
    z-index: 1;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .theme-switch.dark .theme-switch-handle {
    transform: translateX(30px);
    /* 调整位移距离以匹配新的宽度和padding */
    transform: translateX(30px); 
    background-color: #0f172a; /* 在暗黑模式下让滑块变深色一点，更有质感 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }

  /* 图标动画优化 */
  .theme-switch-icon {
    width: 16px;
    height: 16px;
    transition: opacity 0.3s ease, transform 0.3s ease;
    transition: all 0.4s ease-in-out; /* 稍微延长时间 */
  }

  /* 太阳图标 */
  .theme-switch-icon.sun {
    color: #fbbf24;
    opacity: 1;
    transform: rotate(0deg);
    transform: rotate(0deg) scale(1);
  }
  .theme-switch-icon.moon {
    color: #8b5cf6;
    position: absolute;
  
  .theme-switch.dark .theme-switch-icon.sun {
    opacity: 0;
    transform: rotate(-90deg);
    transform: rotate(180deg) scale(0); /* 旋转并缩小消失 */
  }
  .theme-switch.dark .theme-switch-icon.sun {

  /* 月亮图标 */
  .theme-switch-icon.moon {
    color: #a78bfa;
    position: absolute;
    opacity: 0;
    transform: rotate(90deg);
    transform: rotate(-180deg) scale(0); /* 初始缩小 */
  }
  
  .theme-switch.dark .theme-switch-icon.moon {
    opacity: 1;
    transform: rotate(0deg);
    transform: rotate(0deg) scale(1); /* 旋转并放大出现 */
  }
`

