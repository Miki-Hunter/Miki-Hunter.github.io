/* ============================================================
   Fly2Sun.eu.org — I18N Engine
   Bilingual support: zh-CN (default) / en
   Usage:
     _t('key.path')      → translated string
     data-i18n="key"     → auto-translated on load / lang switch
     lang="zh|en"        → element only visible in that language
   ============================================================ */

(function () {
  var currentLang = localStorage.getItem('fly2sun-lang') || 'zh';

  // ── Translation dictionary ──
  var dict = { zh: {}, en: {} };

  function add(key, zh, en) {
    var keys = key.split('.');
    var target = dict.zh;
    for (var i = 0; i < keys.length - 1; i++) {
      if (!target[keys[i]]) target[keys[i]] = {};
      target = target[keys[i]];
    }
    target[keys[keys.length - 1]] = zh;
    target = dict.en;
    for (var j = 0; j < keys.length - 1; j++) {
      if (!target[keys[j]]) target[keys[j]] = {};
      target = target[keys[j]];
    }
    target[keys[keys.length - 1]] = en;
  }

  // ═══════════════════════════════════════
  //  NAVIGATION & FOOTER
  // ═══════════════════════════════════════
  add('nav.home',           '首页',             'Home');
  add('nav.planets',        '行星探索',         'Planets');
  add('nav.gallery',        '星空画廊',         'Gallery');
  add('nav.missions',       '探测任务',         'Missions');
  add('nav.knowledge',      '天文百科',         'Astronomy 101');
  add('nav.observe',        '观测指南',         'Observe');
  add('nav.links',          '资源导航',         'Links');
  add('nav.about',          '关于',             'About');
  add('nav.logo',           'Fly2Sun',          'Fly2Sun');
  add('nav.menu',           'Menu',             'Menu');

  add('footer.line1',       'Fly2Sun.eu.org © 2026 — 奔赴星海，探索无限',
                            'Fly2Sun.eu.org © 2026 — Explore The Cosmos');
  add('footer.line2',       'Made with passion for the cosmos · 致敬每一位仰望星空的人',
                            'Made with passion for the cosmos · For everyone who looks up');
  add('footer.data',        '天文数据来源: NASA / IAU / ESA (截至 2026-05)',
                            'Data: NASA / IAU / ESA (as of 2026-05)');
  add('footer.quote',       '"宇宙不仅比我们想象的要奇特，它比我们能想象的还要奇特。" — J.B.S. Haldane',
                            '"The universe is not only queerer than we suppose, but queerer than we can suppose." — J.B.S. Haldane');

  // ═══════════════════════════════════════
  //  HOME PAGE
  // ═══════════════════════════════════════
  add('home.subtitle',      '奔赴星海',         'Fly2Sun');
  add('home.tagline',       '探索宇宙的无限可能', 'Explore the infinite cosmos');
  add('home.scroll',        '滚动探索',         'Scroll');
  add('home.sectionTitle',  '探索之旅',         'Begin Your Journey');
  add('home.feat1.title',   '行星探索 →',       'Planets →');
  add('home.feat1.desc',    '八大行星详情面板，真实比例与轨道周期，深入每颗行星的科学数据与趣味冷知识。',
                            'Explore all eight planets with true-to-scale orbits, detailed data panels, and fun trivia.');
  add('home.feat2.title',   '星空画廊 →',       'Gallery →');
  add('home.feat2.desc',    '12 个著名深空天体图鉴，点击查看详情——星云、星系、星团，含观测指南与科学数据。',
                            '12 iconic deep-sky objects — nebulae, galaxies, and clusters with observation guides and scientific data.');
  add('home.feat3.title',   '探测任务 →',       'Missions →');
  add('home.feat3.desc',    '从旅行者号到韦伯望远镜，人类深空探测里程碑全记录，追踪正在进行的伟大征程。',
                            'From Voyager to Webb — a complete timeline of deep space exploration milestones.');
  add('home.feat4.title',   '天文百科 →',       'Astronomy 101 →');
  add('home.feat4.desc',    '太阳系、恒星演化、星系、宇宙学、系外行星——循序渐进的天文学知识体系。',
                            'Solar System, stellar evolution, galaxies, cosmology, exoplanets — a progressive astronomy curriculum.');
  add('home.feat5.title',   '观测指南 →',       'Observing Guide →');
  add('home.feat5.desc',    '从裸眼入门到望远镜选购，四季星空亮点、进阶观测技巧，开启你的探索之旅。',
                            'From naked-eye astronomy to telescope selection — seasonal highlights and advanced observation techniques.');
  add('home.feat6.title',   '资源导航 →',       'Resources →');
  add('home.feat6.desc',    '精选 30+ 全球天文网站——航天机构、空间望远镜、天文媒体、观测工具与社区。',
                            'Curated 30+ astronomy websites — space agencies, telescopes, media, tools, and communities.');
  add('home.quick1',        '行星探索',         'Planets');
  add('home.quick2',        '星空画廊',         'Gallery');
  add('home.quick3',        '探测任务',         'Missions');
  add('home.quick4',        '天文百科',         'Astronomy 101');
  add('home.clickHint',     '点击查看',         'Click to view');

  // Planet labels & tooltips
  add('planet.tip.sun',         '太阳 Sun\n光谱型: G2V 黄矮星\n直径: 1,392,700 km\n表面温度: 5,500°C\n年龄: ~46 亿年',
                            'The Sun\nType: G2V Yellow Dwarf\nDiameter: 1,392,700 km\nSurface temp: 5,500°C\nAge: ~4.6 billion years');
  add('planet.label.sun',    '太阳',             'Sun');
  add('planet.tip.mercury',     '水星 Mercury\n直径: 4,879 km\n公转周期: 88 天\n无大气层 · 陨石坑密布\n昼夜温差达 600°C',
                            'Mercury\nDiameter: 4,879 km\nOrbital period: 88 days\nNo atmosphere · Heavily cratered\nDay-night temp diff: 600°C');
  add('planet.label.mercury','水星',             'Mercury');
  add('planet.tip.venus',       '金星 Venus\n直径: 12,104 km\n公转周期: 225 天\n浓密 CO₂ 大气\n表面温度 465°C',
                            'Venus\nDiameter: 12,104 km\nOrbital period: 225 days\nDense CO₂ atmosphere\nSurface temp: 465°C');
  add('planet.label.venus',  '金星',             'Venus');
  add('planet.tip.earth',       '地球 Earth\n直径: 12,742 km\n公转周期: 365.25 天\n唯一已知存在生命的星球\n液态水覆盖 71% 表面',
                            'Earth\nDiameter: 12,742 km\nOrbital period: 365.25 days\nOnly known planet with life\n71% surface covered by water');
  add('planet.label.earth',  '地球',             'Earth');
  add('planet.tip.mars',        '火星 Mars\n直径: 6,779 km\n公转周期: 687 天\n红色星球 · 富含氧化铁\n奥林帕斯山高 21.9 km',
                            'Mars\nDiameter: 6,779 km\nOrbital period: 687 days\nThe Red Planet · Iron oxide rich\nOlympus Mons: 21.9 km high');
  add('planet.label.mars',   '火星',             'Mars');
  add('planet.tip.jupiter',     '木星 Jupiter\n直径: 139,820 km\n公转周期: 11.86 年\n气态巨行星 · 大红斑风暴\n已知 101 颗卫星',
                            'Jupiter\nDiameter: 139,820 km\nOrbital period: 11.86 years\nGas giant · Great Red Spot\n101 known moons');
  add('planet.label.jupiter','木星',             'Jupiter');
  add('planet.tip.saturn',      '土星 Saturn\n直径: 116,460 km\n公转周期: 29.46 年\n壮观行星环 · 密度小于水\n已知 285 颗卫星（太阳系最多）',
                            'Saturn\nDiameter: 116,460 km\nOrbital period: 29.46 years\nMagnificent rings · Less dense than water\n285 known moons (most in Solar System)');
  add('planet.label.saturn', '土星',             'Saturn');
  add('planet.tip.uranus',      '天王星 Uranus\n直径: 50,724 km\n公转周期: 84.01 年\n冰巨行星 · 自转轴平躺\n大气呈淡蓝绿色',
                            'Uranus\nDiameter: 50,724 km\nOrbital period: 84.01 years\nIce giant · Axis tilted sideways\nCyan atmosphere');
  add('planet.label.uranus', '天王星',           'Uranus');
  add('planet.tip.neptune',     '海王星 Neptune\n直径: 49,244 km\n公转周期: 164.8 年\n太阳系风速最快(>2,000 km/h)\n深邃幽蓝的冰巨行星',
                            'Neptune\nDiameter: 49,244 km\nOrbital period: 164.8 years\nFastest winds in Solar System (>2,000 km/h)\nDeep blue ice giant');
  add('planet.label.neptune','海王星',           'Neptune');

  // ═══════════════════════════════════════
  //  PAGE TITLES & SUBTITLES (zh title + en sub ⇄ en title + zh sub)
  // ═══════════════════════════════════════
  add('home.title',            'Fly2Sun',          'Fly2Sun');
  add('home.subtitle',         '奔赴星海',         'Explore The Cosmos');
  add('page.planets.title',    '行星探索',         'PLANET EXPLORER');
  add('page.planets.sub',      'PLANET EXPLORER',  '行星探索');
  add('page.planets.desc',     '深入八大行星的详细数据，从水星到海王星',
                               'In-depth data for all eight planets, from Mercury to Neptune');
  add('page.gallery.title',    '星空画廊',         'DEEP SKY ATLAS');
  add('page.gallery.sub',      'DEEP SKY ATLAS',   '星空画廊');
  add('page.gallery.desc',     '点击卡片查看天体详情',
                               'Click any card to explore');
  add('page.gallery.footer',   '真实影像请访问',
                               'For more images visit');
  add('page.missions.title',   '探测任务',         'SPACE MISSIONS');
  add('page.missions.sub',     'SPACE MISSIONS',   '探测任务');
  add('page.missions.desc',    '人类探索宇宙的壮丽征程 · 从近地轨道到星际空间',
                               'Humanity\'s grand journey of exploration · from low Earth orbit to interstellar space');
  add('page.missions.heroTitle','人类已向太空发射了超过 250 次探测任务',
                               'Humanity has launched over 250 space missions');
  add('page.missions.heroDesc','从 1957 年第一颗人造卫星 Sputnik 1，到 2021 年发射的詹姆斯·韦伯空间望远镜，人类的足迹已遍布太阳系的每一颗行星，探测器正朝着星际空间进发。以下是最具里程碑意义的探测任务。',
                               'From Sputnik 1 in 1957 to the James Webb Space Telescope in 2021, humanity has visited every planet in the Solar System, and our probes are now heading toward interstellar space. Here are the most significant milestones.');
  add('page.knowledge.title',  '天文百科',         'ASTRONOMY 101');
  add('page.knowledge.sub',    'ASTRONOMY 101',    '天文百科');
  add('page.knowledge.desc',   '从基础概念到前沿宇宙学，循序渐进读懂星空的秘密',
                               'From basic concepts to cutting-edge cosmology — understand the universe step by step');
  add('page.observe.title',    '观测指南',           "OBSERVER'S HANDBOOK");
  add('page.observe.sub',      "OBSERVER'S HANDBOOK", '观测指南');
  add('page.observe.desc',     '从裸眼入门到望远镜选购，四季星空亮点、进阶观测技巧',
                               'From naked-eye astronomy to telescope selection — seasonal highlights and advanced techniques');
  add('page.links.title',      '资源导航',           'COSMIC DIRECTORY');
  add('page.links.sub',        'COSMIC DIRECTORY',   '资源导航');
  add('page.links.desc',       '精选全球 30+ 天文网站，涵盖航天机构、望远镜、媒体与社区',
                               'Curated 30+ global astronomy websites — space agencies, telescopes, media & community');
  add('page.about.title',      '关于',             'ABOUT');
  add('page.about.sub',        'ABOUT FLY2SUN',    '关于 Fly2Sun');
  add('page.about.mission',   '我们的使命',       'Our Mission');
  add('page.about.tech',      '技术栈',           'Tech Stack');
  add('page.about.faq',       '常见问题',         'FAQ');
  add('page.about.license',   '开源许可',         'Open Source License');

  // ═══════════════════════════════════════
  //  MISSIONS — STATUS LABELS
  // ═══════════════════════════════════════
  add('status.active',        '● 运行中',         '● Active');
  add('status.ongoing',       '◉ 航行中',         '◉ En Route');
  add('status.ended',         '● 已结束',         '● Completed');
  add('status.future',        '◉ 进行中',         '◉ In Progress');
  add('status.dormant',       '● 已休眠',         '● Dormant');
  add('stats.location',       '📍',               '📍');
  add('stats.duration',       '⏱️',               '⏱️');
  add('stats.agency',         '🌍',               '🌍');

  // ═══════════════════════════════════════
  //  GALLERY — TYPE LABELS
  // ═══════════════════════════════════════
  add('gallery.type.emission',   '发射星云',       'Emission Nebula');
  add('gallery.type.emission_cluster', '发射星云 + 疏散星团', 'Emission Nebula + Open Cluster');
  add('gallery.type.snr',        '超新星遗迹',     'Supernova Remnant');
  add('gallery.type.planetary',  '行星状星云',     'Planetary Nebula');
  add('gallery.type.spiral',     '螺旋星系',       'Spiral Galaxy');
  add('gallery.type.interacting','交互螺旋星系',   'Interacting Spiral Galaxy');
  add('gallery.type.open_cluster','疏散星团 + 反射星云', 'Open Cluster + Reflection Nebula');
  add('gallery.type.dark',       '暗星云',         'Dark Nebula');
  add('gallery.type.sa',         '螺旋星系 (SA(s)a)', 'Spiral Galaxy (SA(s)a)');
  add('gallery.funfact',         '冷知识',         'Fun Fact');
  add('gallery.observe',         '🔭 观测指南',    '🔭 Observing Guide');
  add('gallery.more',            '更多',           'More');

  // ═══════════════════════════════════════
  //  KNOWLEDGE PAGE — SECTION HEADERS
  // ═══════════════════════════════════════
  add('kb.solar',      '太阳系',          'The Solar System');
  add('kb.solarSub',   'THE SOLAR SYSTEM', 'THE SOLAR SYSTEM');
  add('kb.stars',      '恒星演化',        'Stellar Evolution');
  add('kb.starsSub',   'STELLAR EVOLUTION','STELLAR EVOLUTION');
  add('kb.galaxies',   '星系',            'Galaxies');
  add('kb.galaxiesSub','GALAXIES',        'GALAXIES');
  add('kb.cosmology',  '宇宙学',          'Cosmology');
  add('kb.cosmologySub','COSMOLOGY',      'COSMOLOGY');
  add('kb.exoplanets', '系外行星',        'Exoplanets');
  add('kb.exoplanetsSub','EXOPLANETS',    'EXOPLANETS');
  add('kb.phenomena',  '天文现象',        'Celestial Phenomena');
  add('kb.phenomenaSub','CELESTIAL PHENOMENA', 'CELESTIAL PHENOMENA');
  add('kb.scale',      '宇宙尺度',        'Cosmic Scale');
  add('kb.scaleSub',   'COSMIC SCALE',    'COSMIC SCALE');

  // ═══════════════════════════════════════
  //  OBSERVE PAGE — SECTION HEADERS
  // ═══════════════════════════════════════
  add('obs.basics',    '入门方法',        'Getting Started');
  add('obs.equipment', '设备选择',        'Equipment Guide');
  add('obs.seasons',   '四季星空',        'Seasonal Highlights');
  add('obs.advanced',  '进阶技巧',        'Advanced Techniques');

  // ═══════════════════════════════════════
  //  LINKS PAGE — CATEGORIES
  // ═══════════════════════════════════════
  add('links.agencies',  '航天机构',      'Space Agencies');
  add('links.telescopes','空间望远镜',    'Space Telescopes');
  add('links.media',     '天文媒体',      'Astronomy Media');
  add('links.tools',     '观测工具',      'Observation Tools');
  add('links.community', '社区',          'Community');

  // ═══════════════════════════════════════
  //  ABOUT PAGE
  // ═══════════════════════════════════════
  add('about.missionTitle','🌟 我们的使命', '🌟 Our Mission');
  add('about.missionText', '让天文学变得触手可及。无论你是刚入门的好奇者，还是经验丰富的天文爱好者，这里都有为你准备的内容。仰望星空是人类最原始的好奇，也是科技最前沿的边界。Ad Astra Per Aspera — 循此苦旅，以达星辰。',
                            'Making astronomy accessible to everyone. Whether you are a curious beginner or an experienced enthusiast, there is something here for you. Looking up at the stars is humanity\'s oldest curiosity and the frontier of modern science. Ad Astra Per Aspera — through hardship to the stars.');
  add('about.desc', 'Fly2Sun 是一个面向天文爱好者的开源科普网站，提供交互式太阳系模型、深空天体图鉴、探测任务时间线、天文知识百科、观测指南和精选天文资源导航。',
                    'Fly2Sun is an open-source astronomy education website featuring an interactive Solar System model, deep-sky atlas, space mission timeline, astronomy encyclopedia, observing guide, and curated resource directory.');
  add('about.techTitle','技术栈',         'Tech Stack');
  add('about.faqTitle', '常见问题',       'FAQ');
  add('about.licenseTitle','开源许可',    'Open Source License');

  add('page.planets.title',    '行星探索',         'PLANET EXPLORER');
  add('page.planets.sub',      'PLANET EXPLORER',  '行星探索');
  add('page.planets.sizeHint', '▲ 行星相对大小对比（等比例缩放） — 点击星球直接切换详情', '▲ Relative planet sizes (to scale) — Click a dot to view details');
  add('planetDesc.mercury',    '水星是太阳系中最小、最靠近太阳的行星。它几乎没有大气层，表面布满了撞击坑，昼夜温差极为剧烈——白天可达 430°C，夜晚降到 -180°C。水星绕太阳公转一周仅需 88 天，但自转一周需要 59 天。水星的密度仅次于地球，暗示其内部有一个巨大的铁核。', 'The smallest planet and closest to the Sun. With virtually no atmosphere, its cratered surface endures extreme temperature swings — 430°C by day, -180°C by night. It orbits the Sun in just 88 days but takes 59 days to rotate. Its high density suggests an enormous iron core.');
  add('planetFunFact.mercury', '水星虽然离太阳最近，但并非太阳系最热的行星——金星由于温室效应比水星更热。', 'Although closest to the Sun, Mercury is NOT the hottest planet — Venus is hotter due to its runaway greenhouse effect.');
  add('planetObserve.mercury', '水星观测难度较大，因为它总是靠近太阳。最佳观测时机是"大距"前后——此时水星在天空中离太阳最远。日出前或日落后的半小时内，在低空寻找。用小型望远镜可看到类似月球的相位变化。', 'Mercury is challenging to observe as it never strays far from the Sun. Best viewed during greatest elongation. Look low on the horizon within 30 minutes of sunrise or sunset. A small telescope reveals Moon-like phases.');
  add('planetDesc.venus',    '金星是太阳系中最亮的行星，常被称为"启明星"或"长庚星"。它的大小和质量与地球相近，但环境却天差地别——浓密的二氧化碳大气层产生了极端的温室效应，使表面温度高达 465°C，足以熔化铅。金星表面被厚厚的硫酸云层覆盖，自转方向与其他行星相反。', 'The brightest planet in our sky, often called the Morning Star or Evening Star. Similar in size to Earth but hostile in every other way — a thick CO₂ atmosphere creates a runaway greenhouse effect, heating the surface to 465°C, hot enough to melt lead. It rotates backward compared to most planets.');
  add('planetFunFact.venus', '金星的一天（自转周期 243 天）比它的一年（公转周期 225 天）还要长！而且是太阳系中唯一自转方向与公转方向相反的行星。', 'A day on Venus (243 Earth days) is LONGER than its year (225 days)! It is also the only planet that rotates backward relative to its orbit.');
  add('planetObserve.venus', '金星是夜空中除月亮外最亮的天体，极易观测。最佳观测时间是日出前（东大距前后）或日落后（西大距前后）。用望远镜可以看到类似月球的相位变化（金星的盈亏）。在视宁度好的夜晚，甚至肉眼就能感知其明亮的光芒投下的影子。', 'The brightest object in the night sky after the Moon — impossible to miss. Best viewed before sunrise or after sunset during elongation. A telescope reveals Moon-like phases. Under excellent conditions, Venus can cast visible shadows.');
  add('planetDesc.earth',    '地球是太阳系中唯一已知存在生命的星球。它拥有液态水覆盖 71% 的表面、富含氧气的大气层和适中的温度——这一切得益于它恰好处在太阳的"宜居带"内。地球有一颗巨大的天然卫星——月球，后者稳定了地轴倾角，使气候保持相对稳定。地球的磁场保护着地表生命免受太阳风的伤害。', 'The only known planet to harbor life. Liquid water covers 71% of its surface, protected by an oxygen-rich atmosphere and a magnetic field that shields it from solar wind. Its large moon stabilizes the axial tilt, keeping the climate relatively steady. Perfectly positioned in the Sun\'s habitable zone.');
  add('planetFunFact.earth', '地球是太阳系中密度最大的天体——它巨大的铁镍核心占了地球质量的约 32%。月球正在以每年约 3.8 厘米的速度远离地球。', 'Earth is the densest body in the Solar System — its iron-nickel core makes up ~32% of its mass. The Moon is drifting away at ~3.8 cm per year.');
  add('planetObserve.earth', '从地面上观测地球的最佳方式是——抬头看！不过从太空看地球，国际空间站的直播流提供了实时地球影像。月球观测中，可以通过双筒望远镜看到"地照"现象——地球反射的阳光照亮了月球的暗面。', 'The best way to observe Earth is to look around you! From space, the ISS live stream provides real-time views. Through binoculars at the Moon, look for Earthshine — sunlight reflected from Earth illuminating the Moon\'s dark side.');
  add('planetDesc.mars',    '火星因其表面的红色氧化铁（铁锈）而被称为"红色星球"。它拥有太阳系中最大的火山——奥林帕斯山（高 21.9 km）和最大的峡谷——水手号峡谷（长 4,000 km）。多项证据表明火星曾经拥有液态水和较厚的大气层。如今它是一个寒冷的荒漠世界，但仍是太阳系中除地球外最可能存在生命的星球。', 'The Red Planet, colored by iron oxide (rust) across its surface. Home to Olympus Mons — the tallest volcano in the Solar System at 21.9 km — and Valles Marineris, a canyon stretching 4,000 km. Evidence strongly suggests Mars once had liquid water and a thicker atmosphere. Today it is a cold desert, yet remains the most likely place beyond Earth to have hosted life.');
  add('planetFunFact.mars', '火星上的奥林帕斯山如此巨大，如果你站在山顶，根本看不到山脚——山的边缘已经超出了火星的地平线。火星的日落是蓝色的（与地球相反）。', 'Olympus Mons is so enormous that if you stood on its summit, you couldn\'t see its base — it would be beyond the horizon. Martian sunsets are blue (the opposite of Earth).');
  add('planetObserve.mars', '火星每 26 个月到达一次"冲日"位置，此时离地球最近、最亮，呈现明显的橙红色。用小望远镜在冲日前后可以看到暗色的表面特征和白色的极冠。火星冲日是天文爱好者最重要的观测活动之一。', 'Mars reaches opposition every 26 months — its closest, brightest appearance with a distinct orange-red hue. A small telescope reveals dark surface markings and white polar caps during opposition. A highlight of the amateur astronomy calendar.');
  add('planetDesc.jupiter',    '木星是太阳系中最大的行星，质量是其他所有行星总和的 2.5 倍。它是一个气态巨行星，没有固体表面——你看到的是它的云层顶部。木星著名的大红斑是一个持续了至少 350 年的巨大反气旋风暴，比地球还大。木星有 101 颗已知卫星，包括四颗伽利略卫星——木卫一、木卫二、木卫三和木卫四。', 'The largest planet in the Solar System — 2.5 times the mass of all other planets combined. A gas giant with no solid surface: what you see are cloud tops. The Great Red Spot is an anticyclonic storm larger than Earth, raging for at least 350 years. Jupiter has 101 known moons, including the four Galilean moons — Io, Europa, Ganymede, and Callisto.');
  add('planetFunFact.jupiter', '木星的自转速度极快——一天仅约 10 小时（太阳系中最短的一天）。木星的强大磁场是地球的 20,000 倍，产生的极光比整个地球还大。', 'Jupiter spins incredibly fast — a day lasts just ~10 hours, the shortest in the Solar System. Its magnetic field is 20,000 times stronger than Earth\'s, producing auroras larger than our entire planet.');
  add('planetObserve.jupiter', '木星是夜空中的明星之一，全年大部分时间可见。即使小型双筒望远镜也能看到四颗伽利略卫星（它们看起来像一排小星星）。用 4 英寸以上的望远镜，在视宁度好的夜晚可以看到云带和大红斑。观测木星卫星的凌、掩、食现象是很有趣的观测项目。', 'One of the brightest objects in the night sky, visible most of the year. Even small binoculars reveal the four Galilean moons as a line of tiny stars. A 4-inch+ telescope shows cloud belts and the Great Red Spot under good seeing. Watching moon transits, occultations, and eclipses is endlessly fascinating.');
  add('planetDesc.saturn',    '土星以其壮观的环系统闻名于世，主要由数十亿个冰粒和岩石碎片组成。虽然环系统直径超过 280,000 km，但其厚度仅约 10-100 米。土星是一颗气态巨行星，密度只有 0.69 g/cm³——比水还轻。它有 285 颗已知卫星，是太阳系中卫星最多的行星。最大的卫星土卫六拥有浓厚的大气层和液态甲烷湖泊。', 'Famed for its magnificent ring system, composed of billions of ice particles and rock fragments. The rings span over 280,000 km in diameter but are only ~10–100 meters thick. Saturn is a gas giant with a density of just 0.69 g/cm³ — it would float in water! It holds the record with 285 known moons, including Titan with its thick nitrogen atmosphere and liquid methane lakes.');
  add('planetFunFact.saturn', '土星的密度比水还小——理论上，如果能找到一个足够大的水池，土星会浮在水面上！土星的北极有一个奇特的六角形云层结构，每一边都比地球直径还长。', 'Saturn is less dense than water — if you could find a big enough bathtub, it would float! Its north pole features a bizarre hexagonal cloud pattern whose sides are each longer than Earth\'s diameter.');
  add('planetObserve.saturn', '土星是望远镜中最令人震撼的天体。几乎任何小口径望远镜（3-4 英寸，30× 以上倍率）都能看到美丽的环。在视宁度好的夜晚，8 英寸以上望远镜可以分辨卡西尼环缝和土星的云带。环的倾斜角度随季节变化，每个冲日周期都有不同的面貌。', 'Saturn is the most breathtaking sight in any telescope. Even a small 3–4 inch scope at 30×+ reveals the rings. Under good seeing, an 8-inch+ telescope resolves the Cassini Division and cloud bands. The ring tilt changes with the seasons, offering a different view at each opposition.');
  add('planetDesc.uranus',    '天王星是一颗冰巨行星，与木星和土星不同，它主要由水、甲烷和氨的"冰"组成。天王星最引人注目的特征是它的自转轴几乎平躺在公转平面上（倾斜约 98°）——这使得它看起来像一个在轨道上"滚动"的球。这种极端的倾斜可能是很久以前一次巨大撞击造成的。天王星有 28 颗已知卫星和暗淡的环。', 'An ice giant composed primarily of water, methane, and ammonia ices rather than hydrogen and helium. Its most striking feature is an axial tilt of ~98° — it essentially rolls around the Sun on its side, likely the result of an ancient giant impact. Uranus has 28 known moons and a faint ring system.');
  add('planetFunFact.uranus', '天王星是被"偶然"发现的——1781 年，威廉·赫歇尔用自制的望远镜扫描天空时发现了它，最初还以为是一颗彗星。它是第一颗用望远镜发现的行星。', 'Uranus was discovered by accident — William Herschel spotted it in 1781 while scanning the sky with his homemade telescope, initially thinking it was a comet. It was the first planet discovered with a telescope.');
  add('planetObserve.uranus', '天王星在极暗的天空下肉眼勉强可见（约 5.7 等），但需要极好的视力。用双筒望远镜或小型望远镜可以看到一个淡蓝绿色的小圆点。在 8 英寸以上望远镜中，高倍率下可以分辨出其小小的圆面。天王星的位置每年变化很慢（公转周期 84 年），是测试视力的有趣目标。', 'Uranus is barely visible to the naked eye (~5.7 mag) under extremely dark skies with excellent vision. Binoculars or a small telescope show a tiny pale blue-green dot. An 8-inch+ scope at high power resolves its small disk. Its slow 84-year orbit means it barely moves year to year — a fun test of visual acuity.');
  add('planetDesc.neptune',    '海王星是太阳系中离太阳最远的行星，也是一颗深蓝色的冰巨行星。它拥有太阳系中速度最快的风——风速可达 2,100 km/h 以上。海王星是通过数学预测而非直接观测发现的第一颗行星——天文学家注意到天王星的轨道异常，推测存在一颗未知行星的引力影响，计算结果最终引导了海王星的发现。', 'The farthest planet from the Sun, a deep blue ice giant with the fastest winds in the Solar System — over 2,100 km/h. Neptune was the first planet discovered through mathematical prediction rather than direct observation. Astronomers noticed anomalies in Uranus\'s orbit, calculated where an unseen planet must be, and found Neptune exactly there.');
  add('planetFunFact.neptune', '海王星是太阳系中唯一通过数学预测发现的行星。法国数学家勒维烈和英国天文学家亚当斯独立计算出了它的位置——这是牛顿力学的伟大胜利。', 'Neptune is the only planet discovered through mathematical prediction. French mathematician Le Verrier and English astronomer Adams independently calculated its position — a triumph of Newtonian mechanics.');
  add('planetObserve.neptune', '海王星太远太暗，肉眼不可见（约 7.8 等）。需要用双筒望远镜或小型望远镜才能看到，但看起来只是一个微弱的蓝点。在 8 英寸以上望远镜中，可以看到一个非常小但明显蓝色的圆面。找到它需要一份好的星图——海王星看起来和恒星几乎没有区别。', 'Neptune is too faint for the naked eye (~7.8 mag). Binoculars or a small telescope show it as a faint blue dot. An 8-inch+ scope reveals a tiny but distinctly blue disk. Finding it requires a good star chart — it looks nearly identical to a star.');
  add('page.missions.title',   '探测任务',         'SPACE MISSIONS');
  add('page.missions.sub',     'SPACE MISSIONS',   '探测任务');
  add('page.missions.desc',    '人类探索宇宙的壮丽征程 · 从近地轨道到星际空间', 'Humanity\'s grand journey of exploration · from low Earth orbit to interstellar space');
  add('page.missions.heroTitle','人类已向太空发射了超过 250 次探测任务', 'Humanity has launched over 250 space missions');
  add('page.missions.heroDesc', '从 1957 年第一颗人造卫星 Sputnik 1，到 2021 年发射的詹姆斯·韦伯空间望远镜，人类的足迹已遍布太阳系的每一颗行星，探测器正朝着星际空间进发。以下是最具里程碑意义的探测任务。', 'From Sputnik 1 in 1957 to the James Webb Space Telescope in 2021, humanity has visited every planet in the Solar System. Our probes now journey toward interstellar space. Here are the most significant milestones.');
  add('kbHeading.solar', 'solar', 'solar');
  add('kbHeading.stars', 'stars', 'stars');
  add('kbHeading.galaxies', 'galaxies', 'galaxies');
  add('kbHeading.cosmology', 'cosmology', 'cosmology');
  add('kbHeading.exoplanets', 'exoplanets', 'exoplanets');
  add('kbHeading.phenomena', 'phenomena', 'phenomena');
  add('kbHeading.scale', 'scale', 'scale');
  add('kbHeading.solar',  '太阳系', 'The Solar System');
  add('kbSub.solar',    'THE SOLAR SYSTEM', 'THE SOLAR SYSTEM');
  add('kbHeading.stars',  '恒星演化', 'Stellar Evolution');
  add('kbSub.stars',    'STELLAR EVOLUTION', 'STELLAR EVOLUTION');
  add('kbHeading.galaxies',  '星系', 'Galaxies');
  add('kbSub.galaxies',    'GALAXIES', 'GALAXIES');
  add('kbHeading.cosmology',  '宇宙学', 'Cosmology');
  add('kbSub.cosmology',    'COSMOLOGY', 'COSMOLOGY');
  add('kbHeading.exoplanets',  '系外行星', 'Exoplanets');
  add('kbSub.exoplanets',    'EXOPLANETS', 'EXOPLANETS');
  add('kbHeading.phenomena',  '天文现象', 'Celestial Phenomena');
  add('kbSub.phenomena',    'CELESTIAL PHENOMENA', 'CELESTIAL PHENOMENA');
  add('kbHeading.scale',  '宇宙尺度', 'Cosmic Scale');
  add('kbSub.scale',    'COSMIC SCALE', 'COSMIC SCALE');
  add('page.observe.title', '观测指南',         'OBSERVING GUIDE');
  add('page.observe.sub',   'OBSERVING GUIDE',  '观测指南');
  add('page.observe.desc',  '从裸眼入门到望远镜选购，四季星空亮点、进阶观测技巧', 'From naked-eye astronomy to telescope selection — seasonal highlights and advanced techniques');
  add('page.links.title',   '资源导航',           'ASTRONOMY LINKS');
  add('page.links.sub',     'ASTRONOMY LINKS',    '资源导航');
  add('page.links.desc',    '精选全球 30+ 天文网站，涵盖航天机构、望远镜、媒体与社区', 'Curated 30+ global astronomy websites — space agencies, telescopes, media & community');
  add('page.about.title',   '关于',             'ABOUT FLY2SUN');
  add('page.about.sub',     'ABOUT FLY2SUN',    '关于');

  // ═══════════════════════════════════════
  //  LANGUAGE SWITCH LABELS
  // ═══════════════════════════════════════
  add('lang.switchTo',      'English',          '中文');
  add('lang.label',         '中',               'EN');

  // ── Public API ──
  window._t = function (key) {
    var parts = key.split('.');
    var target = currentLang === 'en' ? dict.en : dict.zh;
    for (var i = 0; i < parts.length; i++) {
      if (!target || !target.hasOwnProperty(parts[i])) return key;
      target = target[parts[i]];
    }
    return typeof target === 'string' ? target : key;
  };

  window._lang = function () { return currentLang; };

  window._setLang = function (lang) {
    currentLang = lang;
    localStorage.setItem('fly2sun-lang', lang);
    applyTranslations();
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  };

  window._toggleLang = function () {
    _setLang(currentLang === 'zh' ? 'en' : 'zh');
  };

  // ── Apply translations to DOM ──
  function applyTranslations() {
    // data-i18n elements: replace text content
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      els[i].textContent = _t(key);
    }
    // data-i18n-html elements: replace inner HTML
    var htmlEls = document.querySelectorAll('[data-i18n-html]');
    for (var j = 0; j < htmlEls.length; j++) {
      var k = htmlEls[j].getAttribute('data-i18n-html');
      htmlEls[j].innerHTML = _t(k).replace(/\n/g, '<br>');
    }
    // data-i18n-placeholder
    var phEls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var p = 0; p < phEls.length; p++) {
      phEls[p].setAttribute('placeholder', _t(phEls[p].getAttribute('data-i18n-placeholder')));
    }
    // data-i18n-title (tooltip)
    var titleEls = document.querySelectorAll('[data-i18n-title]');
    for (var t = 0; t < titleEls.length; t++) {
      titleEls[t].setAttribute('data-info', _t(titleEls[t].getAttribute('data-i18n-title')));
    }
    // lang="zh|en" visibility (skip html tag with full locale like zh-CN)
    var langEls = document.querySelectorAll('[lang="zh"], [lang="en"]');
    for (var l = 0; l < langEls.length; l++) {
      var el = langEls[l];
      el.style.display = el.getAttribute('lang') === currentLang ? '' : 'none';
    }
    // Update document title for all pages
    updateDocTitle();
  }

  function updateDocTitle() {
    var path = window.location.pathname;
    var page = path.split('/').pop().replace('.html', '') || 'index';
    var titles = {
      index:    [_t('home.subtitle') + ' | Fly2Sun.eu.org'],
      planets:  [_t('nav.planets') + ' | Fly2Sun.eu.org'],
      gallery:  [_t('nav.gallery') + ' | Fly2Sun.eu.org'],
      missions: [_t('nav.missions') + ' | Fly2Sun.eu.org'],
      knowledge:[_t('nav.knowledge') + ' | Fly2Sun.eu.org'],
      observe:  [_t('nav.observe') + ' | Fly2Sun.eu.org'],
      links:    [_t('nav.links') + ' | Fly2Sun.eu.org'],
      about:    [_t('nav.about') + ' | Fly2Sun.eu.org']
    };
    if (titles[page]) document.title = titles[page][0];
  }

  // ── Expose for re-trigger by other scripts ──
  window._applyTranslations = applyTranslations;

  // ── Auto-apply on load ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }
})();
