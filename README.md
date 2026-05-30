# Fly2Sun.eu.org

> 奔赴星海，探索无限 · Explore The Cosmos

**Fly2Sun** 是一个面向天文爱好者的开源科普网站。包含交互式太阳系模型、深空天体图鉴、探测任务时间线、天文知识百科、观测指南和精选天文资源导航。

**Live:** [fly2sun.eu.org](https://fly2sun.eu.org) | [miki-hunter.github.io](https://miki-hunter.github.io)

---

## 页面结构

| 页面 | 说明 |
|------|------|
| **首页** `index.html` | 交互式太阳系动画（真实比例轨道 + 小行星带 + 月球），6 张功能导航卡片 |
| **行星探索** `pages/planets.html` | 八大行星详情面板，含大小对比图，点击星球或标签切换 |
| **星空画廊** `pages/gallery.html` | 12 个著名深空天体卡片，点击弹出详情模态框（数据 + 冷知识 + 观测指南） |
| **探测任务** `pages/missions.html` | 20 个里程碑太空任务时间线，覆盖美苏中欧印五大航天力量（1957 Sputnik → 2024 Europa Clipper） |
| **天文百科** `pages/knowledge.html` | 7 大天文学主题，侧栏导航 + 滚动监听（太阳系→恒星演化→宇宙学） |
| **观测指南** `pages/observe.html` | 入门方法、设备选购对照表、四季星空亮点、进阶观测技巧 |
| **资源导航** `pages/links.html` | 30+ 精选天文网站，6 大分类（航天机构、望远镜、媒体、工具、社区） |
| **关于** `pages/about.html` | 项目使命、技术栈、FAQ、GitHub 开源信息 |

## 项目结构

```
/
├── index.html              首页
├── README.md
├── start-preview.bat      一键本地预览脚本（自动获取IP，手机可访问）
├── css/
│   └── style.css           全局响应式样式系统（CSS 变量 · 移动端适配）
├── js/
│   └── main.js             共享逻辑（Canvas 星空 · 导航 · 音效 · 光标拖尾 · 流星）
└── pages/
    ├── planets.html        行星探索
    ├── gallery.html        星空画廊
    ├── missions.html       探测任务
    ├── knowledge.html      天文百科
    ├── observe.html        观测指南
    ├── links.html          资源导航
    └── about.html          关于
```

## 技术栈

- **HTML5 Canvas** — 星空背景、小行星带粒子
- **CSS3** — 响应式布局、GPU 加速动画、`clamp()` 流体字号
- **Vanilla JavaScript** — 零框架、零依赖
- **Web Audio API** — 合成的交互音效（悬停 / 点击 / 流星）
- **中英双语** — 全站支持一键切换，`lang` 标记驱动，导航栏切换按钮
- **GitHub Pages** — 静态托管，全球 CDN

## 特效系统

- **Canvas 星空** — 320 颗闪烁恒星 + 3 个星云光斑
- **太阳系** — 8 大行星等比例公转 + 小行星带 260 粒子 + 地球月球
- **太阳耀斑** — 每 2.2 秒喷射金色火花粒子
- **行星悬停** — 青色粒子爆发 + 详情 tooltip
- **轨道拖尾** — 内行星后方光点拖尾
- **光标拖尾** — 桌面端 12 个追逐光点（移动端自动禁用）
- **卡片扫光** — 悬停时 CSS 光带从左扫到右
- **随机流星** — 带呼啸音效

## 数据来源

所有天文数据标注来源与截止日期，详见各页面底部：

- NASA Solar System Exploration
- IAU Minor Planet Center
- NASA Exoplanet Archive
- ESA / Messier Catalog / NGC

**关键数据（截至 2026-05）：**

| 数据项 | 数值 |
|--------|------|
| 土星卫星 | 285 颗（太阳系最多） |
| 木星卫星 | 101 颗 |
| 天王星卫星 | 28 颗 |
| 海王星卫星 | 16 颗 |
| 已确认系外行星 | 6,000+ |

## 部署

本项目为纯静态网站，可直接部署到任意静态托管服务。

### GitHub Pages

1. Fork 本仓库
2. **删除或编辑 `CNAME` 文件**（该文件指向本站域名 `fly2sun.eu.org`，如果你使用自己的域名请替换，否则直接删除以使用默认 `username.github.io` 域名）
3. 进入 Settings → Pages
4. Source 选择 `main` 分支，根目录 `/`
5. 保存后等待部署完成

> ⚠️ 如果保留 CNAME 中的 `fly2sun.eu.org`，GitHub Pages 会因为 DNS 验证失败而无法部署。该域名由原作者持有，DNS 指向本仓库，不会受到其他人的 fork 影响。

### 本地预览

**Windows 用户**：双击 `start-preview.bat` 一键启动，脚本会自动获取局域网 IP，方便手机扫码/输入地址调试。

```bash
# 或手动启动任意静态服务器
npx serve .
# 或
python -m http.server 8080
```

## 贡献

欢迎提交 Issue 和 Pull Request。

- 发现数据错误或过时 → 提交 Issue 并附上权威来源链接
- 希望添加新页面或功能 → Fork 后提交 PR
- 想交换友链 → 在 Issue 中留言

## 许可

MIT License — 自由使用、修改和分发。

---

<p align="center">Ad Astra Per Aspera · 循此苦旅，以达星辰</p>
