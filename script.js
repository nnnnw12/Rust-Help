/* ============================================================
   RUST ПОМОЩНИК — script.js
   Автор: Hell Bro
   ============================================================ */

// ===== DATA =====
const raidTargets = [
  { id:"wood_door", name:"Деревянная дверь", category:"Двери", hp:200, icon:"🚪", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:1,sulfur:1400,time:6},{tool:"Сатчели",amount:2,sulfur:960,time:20},{tool:"Разрывные",amount:19,sulfur:475,time:12}]},
  { id:"sheet_metal_door", name:"Металлическая дверь", category:"Двери", hp:250, icon:"🚪", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:2,sulfur:2800,time:12},{tool:"Сатчели",amount:4,sulfur:1920,time:40},{tool:"Разрывные",amount:63,sulfur:1575,time:40}]},
  { id:"armored_door", name:"Бронированная дверь", category:"Двери", hp:800, icon:"🚪", methods:[
    {tool:"С4",amount:2,sulfur:4400,time:20},{tool:"Ракеты",amount:4,sulfur:5600,time:24},{tool:"Сатчели",amount:12,sulfur:5760,time:120},{tool:"Разрывные",amount:200,sulfur:5000,time:128}]},
  { id:"garage_door", name:"Гаражная дверь", category:"Двери", hp:600, icon:"🏗️", methods:[
    {tool:"С4",amount:2,sulfur:4400,time:20},{tool:"Ракеты",amount:3,sulfur:4200,time:18},{tool:"Сатчели",amount:9,sulfur:4320,time:90},{tool:"Разрывные",amount:150,sulfur:3750,time:96}]},
  { id:"double_door", name:"Двойная дверь (метал)", category:"Двери", hp:250, icon:"🚪", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:2,sulfur:2800,time:12},{tool:"Сатчели",amount:4,sulfur:1920,time:40},{tool:"Разрывные",amount:63,sulfur:1575,time:40}]},
  { id:"wood_hatch", name:"Деревянный люк", category:"Люки", hp:250, icon:"⬛", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:1,sulfur:1400,time:6},{tool:"Сатчели",amount:3,sulfur:1440,time:30},{tool:"Разрывные",amount:26,sulfur:650,time:17}]},
  { id:"metal_hatch", name:"Металлический люк", category:"Люки", hp:250, icon:"⬛", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:2,sulfur:2800,time:12},{tool:"Сатчели",amount:4,sulfur:1920,time:40},{tool:"Разрывные",amount:63,sulfur:1575,time:40}]},
  { id:"armored_hatch", name:"Бронированный люк", category:"Люки", hp:800, icon:"⬛", methods:[
    {tool:"С4",amount:2,sulfur:4400,time:20},{tool:"Ракеты",amount:4,sulfur:5600,time:24},{tool:"Сатчели",amount:12,sulfur:5760,time:120},{tool:"Разрывные",amount:200,sulfur:5000,time:128}]},
  { id:"wooden_ladder_hatch", name:"Деревянный лестничный люк", category:"Люки", hp:250, icon:"🪜", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:1,sulfur:1400,time:6},{tool:"Сатчели",amount:3,sulfur:1440,time:30},{tool:"Разрывные",amount:26,sulfur:650,time:17}]},
  { id:"twig_wall", name:"Соломенная стена", category:"Стены", hp:10, icon:"🧱", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:1,sulfur:1400,time:6},{tool:"Сатчели",amount:1,sulfur:480,time:10},{tool:"Разрывные",amount:1,sulfur:25,time:1}]},
  { id:"wood_wall", name:"Деревянная стена", category:"Стены", hp:250, icon:"🧱", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:2,sulfur:2800,time:12},{tool:"Сатчели",amount:3,sulfur:1440,time:30},{tool:"Разрывные",amount:49,sulfur:1225,time:31}]},
  { id:"stone_wall", name:"Каменная стена", category:"Стены", hp:500, icon:"🧱", methods:[
    {tool:"С4",amount:2,sulfur:4400,time:20},{tool:"Ракеты",amount:4,sulfur:5600,time:24},{tool:"Сатчели",amount:10,sulfur:4800,time:100},{tool:"Разрывные",amount:185,sulfur:4625,time:118}]},
  { id:"metal_wall", name:"Металлическая стена", category:"Стены", hp:1000, icon:"🧱", methods:[
    {tool:"С4",amount:4,sulfur:8800,time:40},{tool:"Ракеты",amount:8,sulfur:11200,time:48},{tool:"Сатчели",amount:23,sulfur:11040,time:230},{tool:"Разрывные",amount:400,sulfur:10000,time:256}]},
  { id:"armored_wall", name:"Бронированная стена", category:"Стены", hp:2000, icon:"🧱", methods:[
    {tool:"С4",amount:8,sulfur:17600,time:80},{tool:"Ракеты",amount:15,sulfur:21000,time:90},{tool:"Сатчели",amount:46,sulfur:22080,time:460},{tool:"Разрывные",amount:799,sulfur:19975,time:511}]},
  { id:"stone_foundation", name:"Каменный фундамент", category:"Фундаменты", hp:500, icon:"🏠", methods:[
    {tool:"С4",amount:2,sulfur:4400,time:20},{tool:"Ракеты",amount:4,sulfur:5600,time:24},{tool:"Сатчели",amount:10,sulfur:4800,time:100},{tool:"Разрывные",amount:185,sulfur:4625,time:118}]},
  { id:"metal_foundation", name:"Металлический фундамент", category:"Фундаменты", hp:1000, icon:"🏠", methods:[
    {tool:"С4",amount:4,sulfur:8800,time:40},{tool:"Ракеты",amount:8,sulfur:11200,time:48},{tool:"Сатчели",amount:23,sulfur:11040,time:230},{tool:"Разрывные",amount:400,sulfur:10000,time:256}]},
  { id:"metal_window_bars", name:"Металлические решётки", category:"Окна", hp:250, icon:"🪟", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:2,sulfur:2800,time:12},{tool:"Сатчели",amount:4,sulfur:1920,time:40},{tool:"Разрывные",amount:63,sulfur:1575,time:40}]},
  { id:"strengthened_glass", name:"Укреплённое стекло", category:"Окна", hp:350, icon:"🪟", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:2,sulfur:2800,time:12},{tool:"Сатчели",amount:5,sulfur:2400,time:50},{tool:"Разрывные",amount:80,sulfur:2000,time:51}]},
  { id:"high_ext_wood", name:"Высокая деревянная стена", category:"Внешние стены", hp:500, icon:"🏰", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:2,sulfur:2800,time:12},{tool:"Сатчели",amount:3,sulfur:1440,time:30},{tool:"Разрывные",amount:49,sulfur:1225,time:31}]},
  { id:"high_ext_stone", name:"Высокая каменная стена", category:"Внешние стены", hp:500, icon:"🏰", methods:[
    {tool:"С4",amount:2,sulfur:4400,time:20},{tool:"Ракеты",amount:4,sulfur:5600,time:24},{tool:"Сатчели",amount:10,sulfur:4800,time:100},{tool:"Разрывные",amount:185,sulfur:4625,time:118}]},
  { id:"gate_wood", name:"Деревянные ворота", category:"Внешние стены", hp:500, icon:"🚧", methods:[
    {tool:"С4",amount:2,sulfur:4400,time:20},{tool:"Ракеты",amount:3,sulfur:4200,time:18},{tool:"Сатчели",amount:6,sulfur:2880,time:60},{tool:"Разрывные",amount:99,sulfur:2475,time:63}]},
  { id:"gate_stone", name:"Каменные ворота", category:"Внешние стены", hp:500, icon:"🚧", methods:[
    {tool:"С4",amount:2,sulfur:4400,time:20},{tool:"Ракеты",amount:4,sulfur:5600,time:24},{tool:"Сатчели",amount:10,sulfur:4800,time:100},{tool:"Разрывные",amount:185,sulfur:4625,time:118}]},
  { id:"tool_cupboard", name:"Шкаф (ТС)", category:"Прочее", hp:250, icon:"🗄️", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:1,sulfur:1400,time:6},{tool:"Сатчели",amount:3,sulfur:1440,time:30},{tool:"Разрывные",amount:26,sulfur:650,time:17}]},
  { id:"vending_machine", name:"Торговый автомат", category:"Прочее", hp:150, icon:"🏪", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:1,sulfur:1400,time:6},{tool:"Сатчели",amount:3,sulfur:1440,time:30},{tool:"Разрывные",amount:49,sulfur:1225,time:31}]},
  { id:"metal_shop_front", name:"Металлическая витрина", category:"Прочее", hp:500, icon:"🏬", methods:[
    {tool:"С4",amount:1,sulfur:2200,time:10},{tool:"Ракеты",amount:2,sulfur:2800,time:12},{tool:"Сатчели",amount:4,sulfur:1920,time:40},{tool:"Разрывные",amount:63,sulfur:1575,time:40}]},
];

const buildingCosts = [
  { id:"foundation", name:"Фундамент", icon:"🏠", twig:50, wood:200, stone:300, metal:200, armored:25 },
  { id:"wall", name:"Стена", icon:"🧱", twig:50, wood:200, stone:300, metal:200, armored:25 },
  { id:"floor", name:"Пол / Потолок", icon:"⬜", twig:50, wood:200, stone:300, metal:200, armored:25 },
  { id:"doorframe", name:"Дверной проём", icon:"🚪", twig:40, wood:150, stone:225, metal:150, armored:20 },
  { id:"windowframe", name:"Оконный проём", icon:"🪟", twig:40, wood:150, stone:225, metal:150, armored:20 },
  { id:"stairs_l", name:"L-лестница", icon:"🪜", twig:50, wood:200, stone:300, metal:200, armored:25 },
  { id:"roof", name:"Крыша", icon:"🏗️", twig:50, wood:200, stone:300, metal:200, armored:25 },
  { id:"half_wall", name:"Полустена", icon:"🧱", twig:25, wood:100, stone:150, metal:100, armored:13 },
  { id:"triangle_foundation", name:"Треугольный фундамент", icon:"🔺", twig:25, wood:100, stone:150, metal:100, armored:13 },
  { id:"triangle_floor", name:"Треугольный пол", icon:"🔺", twig:25, wood:100, stone:150, metal:100, armored:13 },
];

const monumentLoot = [
  { name:"Лаунч-сайт", tier:"T3", icon:"🚀", desc:"Лучший лут. Нужна радзащита. Зелёная + красная карта. Крейт с военкой.", danger:"Высокая" },
  { name:"Нефтяная вышка (Large)", tier:"T3", icon:"🛢️", desc:"Морской монумент. Тяжёлые учёные. Крейт наверху. Лучший морской лут.", danger:"Очень высокая" },
  { name:"Военные туннели", tier:"T3", icon:"🪖", desc:"Подземный монумент. Много учёных. Нужна зелёная карта. Крейт с военкой.", danger:"Высокая" },
  { name:"Аэродром", tier:"T2-T3", icon:"✈️", desc:"Большой монумент. Зелёная + синяя карта. Хороший лут в ангарах.", danger:"Средняя" },
  { name:"Купольное здание", tier:"T2", icon:"🏛️", desc:"Нужна синяя карта. Хороший лут наверху. Радиация.", danger:"Средняя" },
  { name:"Водоочистка", tier:"T2", icon:"💧", desc:"Синяя карта. Средний лут. Несколько учёных.", danger:"Средняя" },
  { name:"Электростанция", tier:"T2", icon:"⚡", desc:"Зелёная карта. Средний лут. Мало учёных.", danger:"Низкая" },
  { name:"Суперморг", tier:"T2", icon:"🏥", desc:"Хирургический стол. Зелёная карта. Медицинский лут.", danger:"Низкая" },
  { name:"Лесопилка", tier:"T1", icon:"🪓", desc:"Много дерева. Простой лут. Мало опасности.", danger:"Низкая" },
  { name:"Маяк", tier:"T1", icon:"🗼", desc:"Базовый лут. Хорошо для начала вайпа.", danger:"Низкая" },
  { name:"Газозаправка", tier:"T1", icon:"⛽", desc:"Верстак 1 ур. Рециклер. Базовый лут.", danger:"Низкая" },
];

const wipeChecklist = [
  { id:"1", title:"Найди место для базы", desc:"Ищи у монументов, рядом с ресурсами. Избегай открытых полей.", priority:"high", icon:"📍" },
  { id:"2", title:"Поставь верстак 1 ур.", desc:"Как можно скорее крафти верстак для изучения предметов.", priority:"high", icon:"🔧" },
  { id:"3", title:"Построй стартовую базу 2x1", desc:"Минимальная база с шкафом, спальником, ящиком и печкой.", priority:"high", icon:"🏠" },
  { id:"4", title:"Фарми камень и серу", desc:"Камень для апгрейда до каменных стен, сера для оружия.", priority:"high", icon:"⛏️" },
  { id:"5", title:"Апгрейдни базу до камня", desc:"Дерево легко рейдят. Камень — минимальная защита.", priority:"high", icon:"🧱" },
  { id:"6", title:"Поставь замки на все двери", desc:"Кодовые замки лучше ключевых. Раздай код тиммейтам.", priority:"high", icon:"🔒" },
  { id:"7", title:"Исследуй важные чертежи", desc:"Приоритет: оружие, боеприпасы, мед, броня.", priority:"medium", icon:"📜" },
  { id:"8", title:"Поставь верстак 2 ур.", desc:"Позволяет крафтить серьёзное оружие и взрывчатку.", priority:"medium", icon:"🔧" },
  { id:"9", title:"Сделай внешний периметр", desc:"Высокие стены вокруг базы значительно усложняют рейд.", priority:"medium", icon:"🏰" },
  { id:"10", title:"Фарми компоненты", desc:"Road signs, springs, pipes — для крафта оружия.", priority:"medium", icon:"🔩" },
  { id:"11", title:"Электричество и турели", desc:"Авто-турели и ловушки для защиты базы офлайн.", priority:"low", icon:"⚡" },
  { id:"12", title:"Набери серу для рейда", desc:"Начинай копить серу для рейда на соседей.", priority:"low", icon:"💣" },
];

const tips = [
  { cat:"⚔️ Бой", items:["Всегда стреляй присев — отдача меньше, особенно с AK","Используй медпены перед тем как выходить на перестрелку","Не стой на месте — strafe (A/D) во время стрельбы","Пистолет Eoka — лучшее оружие для самого старта","Двустволка (DB) одна из лучших пушек для ближнего боя","Всегда носи с собой минимум 3 бинта и 1 медкит"] },
  { cat:"🏠 Строительство", items:["Ставь шкаф (TC) сразу — без него стены гниют","Airlock (двойной шлюз) обязателен — не дай доорить","Honeycomb (хонейкомб) — стены вокруг стен, +50% серы на рейд","Ставь несколько спальных мешков на разных этажах","Металлические двери дешевле бронированных, но хуже ненамного","Гаражная дверь = лучшее соотношение стоимости к прочности","Всегда ставь shotgun trap в шлюзе"] },
  { cat:"⛏️ Фарм", items:["Нажимай по горячей точке на ноде — в 2 раза больше ресов","Киркой Жаккард (Jackhammer) фармить в 3 раза быстрее","Серные ноды (жёлтые) — приоритет для рейда","Чайный стол даёт бонус к фарму до +50%","Рециклер на газозаправке — безопасный скрап","Дорожные знаки = лучший источник металла через рециклер","Фарми ночью — меньше игроков, те же ресурсы"] },
  { cat:"🛡️ Защита", items:["Auto turret + камера = лучшая защита от офлайн рейда","Snap traps перед дверями отнимают 50 хп","Разбрасывай лут по нескольким шкафам","Не храни всё в одном ТС — рейдеры будут рады","Ставь window bars на все окна","Ловушки с дробью в коридорах задержат рейдеров","Свет + камеры = можешь следить за базой из телефона"] },
  { cat:"💡 Полезное", items:["F1 → kill — респаун, если застрял","Зажми E на замке — поставить код, а не открывать","Alt + клик — быстрый перенос предметов","Shift + правой кнопкой — разделить стак пополам","Зажми S на лестнице чтобы спуститься","Крафт чертёж стоит скрап, но экономит время на T3 вещи","Используй небольшие тайники в лесу как запас"] },
];

const basePresets = [
  { name:"2x1 (стартовая)", icon:"🏚️", parts:[{id:"foundation",qty:2},{id:"wall",qty:8},{id:"doorframe",qty:2},{id:"floor",qty:2},{id:"roof",qty:2}] },
  { name:"2x2 (основная)", icon:"🏠", parts:[{id:"foundation",qty:4},{id:"wall",qty:12},{id:"doorframe",qty:3},{id:"floor",qty:4},{id:"roof",qty:4}] },
  { name:"2x2 с хонейкомбом", icon:"🏡", parts:[{id:"foundation",qty:4},{id:"triangle_foundation",qty:12},{id:"wall",qty:12},{id:"half_wall",qty:12},{id:"doorframe",qty:3},{id:"floor",qty:4},{id:"triangle_floor",qty:12},{id:"roof",qty:4}] },
  { name:"3x3 (большая)", icon:"🏰", parts:[{id:"foundation",qty:9},{id:"wall",qty:20},{id:"doorframe",qty:4},{id:"floor",qty:9},{id:"roof",qty:9}] },
];

// ===== STATE =====
let raidList = [];
let selectedTool = "С4";
let selectedCategory = "Все";
let searchQuery = "";

let baseParts = [];
let baseTier = "stone";

let sulfurAmount = 10000;
let checkedItems = new Set();
let activeSection = "home";

// ===== HELPERS =====
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const fmt = n => n.toLocaleString('ru-RU');
function formatTime(s) {
  if (s < 60) return s + ' сек';
  return Math.floor(s/60) + ' мин ' + (s%60) + ' сек';
}
const toolEmoji = { "С4":"💥", "Ракеты":"🚀", "Сатчели":"🎒", "Разрывные":"🔫" };

// ===== NAVIGATION =====
function navigateTo(section) {
  const el = document.getElementById('section-' + section);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  } else if (section === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  closeMobileMenu();
}

function updateActiveNav() {
  $$('.nav-btn, .mobile-menu button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === activeSection);
  });
}

function closeMobileMenu() {
  const menu = $('.mobile-menu');
  if (menu) menu.classList.remove('open');
}

// ===== SCROLL SPY =====
function setupScrollSpy() {
  const sections = $$('[data-spy]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection = entry.target.dataset.spy;
        updateActiveNav();
        const btn = $('.scroll-top');
        if (btn) btn.classList.toggle('show', activeSection !== 'home');
      }
    });
  }, { threshold: 0.15, rootMargin: '-80px 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
}

// ===== ANIMATION ON SCROLL =====
function setupAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  $$('.anim, .anim-left, .anim-right, .anim-scale').forEach(el => observer.observe(el));
}

// ===== RAID CALCULATOR =====
function getCategories() {
  const cats = new Set(raidTargets.map(t => t.category));
  return ["Все", ...cats];
}

function renderRaidTargets() {
  const grid = $('#raid-targets');
  if (!grid) return;
  const filtered = raidTargets.filter(t => {
    const catMatch = selectedCategory === "Все" || t.category === selectedCategory;
    const searchMatch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    return catMatch && searchMatch;
  });

  grid.innerHTML = filtered.map(target => {
    const method = target.methods.find(m => m.tool === selectedTool);
    const inList = raidList.find(i => i.id === target.id);
    return `<div class="target-card ${inList ? 'in-list' : ''}" onclick="addToRaid('${target.id}')">
      <div class="target-top">
        <div class="target-info">
          <span class="emoji">${target.icon}</span>
          <div><h4>${target.name}</h4><span class="cat">${target.category}</span></div>
        </div>
        ${inList ? `<span class="target-badge">×${inList.qty}</span>` : ''}
      </div>
      ${method
        ? `<div class="target-stats">
            <span class="sulfur">🟡 ${fmt(method.sulfur)} серы</span>
            <span class="amount">×${method.amount}</span>
            <span class="time">⏱ ${formatTime(method.time)}</span>
          </div>`
        : `<span class="target-stats"><span class="no-method">Нельзя ${selectedTool}</span></span>`
      }
    </div>`;
  }).join('');
}

function addToRaid(id) {
  const existing = raidList.find(i => i.id === id);
  if (existing) existing.qty++;
  else raidList.push({ id, qty: 1 });
  renderRaidTargets();
  renderRaidSummary();
}

function updateRaidQty(id, delta) {
  const item = raidList.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) raidList = raidList.filter(i => i.id !== id);
  renderRaidTargets();
  renderRaidSummary();
}

function removeRaidItem(id) {
  raidList = raidList.filter(i => i.id !== id);
  renderRaidTargets();
  renderRaidSummary();
}

function clearRaid() {
  raidList = [];
  renderRaidTargets();
  renderRaidSummary();
}

function calcRaidTotals() {
  let sulfur = 0, amount = 0, time = 0;
  raidList.forEach(item => {
    const target = raidTargets.find(t => t.id === item.id);
    if (!target) return;
    const method = target.methods.find(m => m.tool === selectedTool);
    if (!method) return;
    sulfur += method.sulfur * item.qty;
    amount += method.amount * item.qty;
    time += method.time * item.qty;
  });
  return { sulfur, amount, time };
}

function renderRaidSummary() {
  const el = $('#raid-summary-content');
  if (!el) return;
  if (raidList.length === 0) {
    el.innerHTML = '<p class="summary-empty">Нажмите на цель, чтобы добавить в рейд</p>';
    return;
  }
  const t = calcRaidTotals();
  const gunpowder = Math.ceil(t.sulfur / 2);
  const charcoal = gunpowder * 2;
  el.innerHTML = `
    <div class="summary-totals">
      <div class="total-box"><p class="num sulfur-color">${fmt(t.sulfur)}</p><p class="label">🟡 Серы всего</p></div>
      <div class="total-box"><p class="num accent-color">${fmt(t.amount)}</p><p class="label">${toolEmoji[selectedTool]||''} ${selectedTool}</p></div>
    </div>
    <div class="time-box"><p class="num">⏱ ${formatTime(t.time)}</p><p class="label">Время рейда</p></div>
    <div class="ore-info">
      <p class="title">📊 Для добычи нужно:</p>
      <div class="ore-row"><span>Серная руда</span><span class="val s-color">${fmt(t.sulfur)}</span></div>
      <div class="ore-row"><span>Порох</span><span class="val w-color">${fmt(gunpowder)}</span></div>
      <div class="ore-row"><span>Уголь (для пороха)</span><span class="val g-color">${fmt(charcoal)}</span></div>
    </div>
    <div class="raid-list">
      ${raidList.map(item => {
        const target = raidTargets.find(t => t.id === item.id);
        if (!target) return '';
        const method = target.methods.find(m => m.tool === selectedTool);
        return `<div class="raid-item">
          <span class="emoji">${target.icon}</span>
          <div class="raid-item-info">
            <div class="name">${target.name}</div>
            ${method ? `<div class="cost">🟡 ${fmt(method.sulfur * item.qty)}</div>` : ''}
          </div>
          <div class="raid-item-controls">
            <button class="qty-btn minus" onclick="event.stopPropagation();updateRaidQty('${item.id}',-1)">−</button>
            <span class="qty-num">${item.qty}</span>
            <button class="qty-btn plus" onclick="event.stopPropagation();updateRaidQty('${item.id}',1)">+</button>
            <button class="qty-btn del" onclick="event.stopPropagation();removeRaidItem('${item.id}')">✕</button>
          </div>
        </div>`;
      }).join('')}
    </div>
    <button class="clear-btn" onclick="clearRaid()">🗑️ Очистить список</button>`;
}

function setTool(tool) {
  selectedTool = tool;
  $$('.tool-btn').forEach(b => b.classList.toggle('active', b.dataset.tool === tool));
  renderRaidTargets();
  renderRaidSummary();
}

function setCategory(cat) {
  selectedCategory = cat;
  $$('#raid-categories .filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === cat));
  renderRaidTargets();
}

function onRaidSearch(val) {
  searchQuery = val;
  renderRaidTargets();
}

// ===== BASE CALCULATOR =====
function setBaseTier(tier) {
  baseTier = tier;
  $$('.tier-btn').forEach(b => b.classList.toggle('active', b.dataset.tier === tier));
  renderBaseParts();
  renderBaseSummary();
}

function loadPreset(idx) {
  baseParts = basePresets[idx].parts.map(p => ({ id: p.id, qty: p.qty }));
  renderBaseParts();
  renderBaseSummary();
}

function addBasePart(id) {
  const existing = baseParts.find(p => p.id === id);
  if (existing) existing.qty++;
  else baseParts.push({ id, qty: 1 });
  renderBaseParts();
  renderBaseSummary();
}

function updateBaseQty(id, delta) {
  const p = baseParts.find(x => x.id === id);
  if (!p) return;
  p.qty += delta;
  if (p.qty <= 0) baseParts = baseParts.filter(x => x.id !== id);
  renderBaseParts();
  renderBaseSummary();
}

function clearBase() {
  baseParts = [];
  renderBaseParts();
  renderBaseSummary();
}

function getPartCost(building) {
  const tierMap = { twig:'twig', wood:'wood', stone:'stone', metal:'metal', armored:'armored' };
  return building[tierMap[baseTier]];
}

function getPartCostLabel(building) {
  const cost = getPartCost(building);
  const labels = { twig:'дерева', wood:'дерева', stone:'камня', metal:'метала', armored:'HQM' };
  return cost + ' ' + labels[baseTier];
}

const tierColorMap = { twig:'text-yellow', wood:'text-amber', stone:'text-gray', metal:'text-blue', armored:'text-purple' };
const tierResLabel = { twig:'🪵 Дерева', wood:'🪵 Дерева', stone:'🪨 Камня', metal:'⚙️ Метал. фрагментов', armored:'💎 HQM' };

function renderBaseParts() {
  const grid = $('#base-parts');
  if (!grid) return;
  grid.innerHTML = buildingCosts.map(b => {
    const inList = baseParts.find(p => p.id === b.id);
    const colorClass = tierColorMap[baseTier];
    return `<div class="part-card ${inList ? 'in-list' : ''}" onclick="addBasePart('${b.id}')">
      <span class="emoji">${b.icon}</span>
      <h4>${b.name}</h4>
      <p class="cost ${colorClass}">${getPartCostLabel(b)}</p>
      ${inList ? `<div class="part-qty">
        <button onclick="event.stopPropagation();updateBaseQty('${b.id}',-1)">−</button>
        <span>${inList.qty}</span>
        <button onclick="event.stopPropagation();updateBaseQty('${b.id}',1)">+</button>
      </div>` : ''}
    </div>`;
  }).join('');
}

function calcBaseTotals() {
  let total = 0;
  baseParts.forEach(p => {
    const b = buildingCosts.find(x => x.id === p.id);
    if (b) total += getPartCost(b) * p.qty;
  });
  return total;
}

function renderBaseSummary() {
  const el = $('#base-summary-content');
  if (!el) return;
  if (baseParts.length === 0) {
    el.innerHTML = '<p class="summary-empty">Выберите части для расчёта</p>';
    return;
  }
  const total = calcBaseTotals();
  const upkeep = Math.ceil(total * 0.1);
  const colorClass = tierColorMap[baseTier];
  const upkeepLabels = { twig:'дерева', wood:'дерева', stone:'камня', metal:'метала', armored:'HQM' };
  el.innerHTML = `
    <div class="total-box" style="margin-bottom:12px">
      <p class="base-total-num ${colorClass}">${fmt(total)}</p>
      <p class="base-total-label">${tierResLabel[baseTier]}</p>
    </div>
    <div class="upkeep-box">
      <p class="title">🔄 Примерный аптайм (в час):</p>
      <p class="num ${colorClass}">${fmt(upkeep)} ${upkeepLabels[baseTier]}</p>
    </div>
    <div class="parts-summary">
      ${baseParts.map(p => {
        const b = buildingCosts.find(x => x.id === p.id);
        if (!b) return '';
        return `<div class="part-sum-row"><span class="label">${b.icon} ${b.name}</span><span class="val">×${p.qty}</span></div>`;
      }).join('')}
    </div>
    <button class="clear-btn" onclick="clearBase()">🗑️ Очистить</button>`;
}

// ===== SULFUR CALCULATOR =====
function setSulfur(val) {
  sulfurAmount = Math.max(0, parseInt(val) || 0);
  const input = $('#sulfur-input');
  const range = $('#sulfur-range');
  if (input && input.value != sulfurAmount) input.value = sulfurAmount;
  if (range && range.value != sulfurAmount) range.value = sulfurAmount;
  $$('.quick-btn').forEach(b => b.classList.toggle('active', parseInt(b.dataset.amount) === sulfurAmount));
  renderSulfurResults();
}

function renderSulfurResults() {
  const s = sulfurAmount;
  const gp = Math.floor(s / 2);
  const charcoal = gp * 2;
  const explosives = Math.floor(gp / 50);
  const c4 = Math.floor(s / 2200);
  const rockets = Math.floor(s / 1400);
  const satchels = Math.floor(s / 480);
  const expAmmo = Math.floor(s / 25);
  const stoneWalls = Math.floor(c4 / 2);
  const metalDoors = c4;
  const armoredDoors = Math.floor(c4 / 2);
  const garageDoors = Math.floor(c4 / 2);
  const nodes = Math.ceil(s / 300);
  const woodForCharcoal = Math.round(charcoal * 1.33);

  const el = $('#sulfur-results');
  if (!el) return;
  el.innerHTML = `
    <div class="sulfur-result-card anim-left visible">
      <h3>🔥 Крафт из серы</h3>
      <div class="sulfur-row"><div class="left"><span class="emoji">⚫</span>Порох</div><div class="right text-gray">${fmt(gp)}</div></div>
      <div class="sulfur-row"><div class="left"><span class="emoji">🪵</span>Уголь нужен</div><div class="right text-amber">${fmt(charcoal)}</div></div>
      <div class="sulfur-row"><div class="left"><span class="emoji">🧨</span>Взрывчатка</div><div class="right text-red">${fmt(explosives)}</div></div>
    </div>
    <div class="sulfur-result-card anim-right visible">
      <h3>💣 Можно скрафтить</h3>
      <div class="sulfur-row"><div class="left"><div><span class="emoji">💥</span> С4</div><div class="sub">2200 серы / шт</div></div><div class="right text-red">${c4}</div></div>
      <div class="sulfur-row"><div class="left"><div><span class="emoji">🚀</span> Ракет</div><div class="sub">1400 серы / шт</div></div><div class="right" style="color:#fb923c">${rockets}</div></div>
      <div class="sulfur-row"><div class="left"><div><span class="emoji">🎒</span> Сатчелей</div><div class="sub">480 серы / шт</div></div><div class="right text-yellow">${satchels}</div></div>
      <div class="sulfur-row"><div class="left"><div><span class="emoji">🔫</span> Разрывных</div><div class="sub">25 серы / шт</div></div><div class="right text-blue">${expAmmo}</div></div>
    </div>
    <div class="sulfur-result-card anim visible">
      <h3>🎯 Что можно зарейдить (С4)</h3>
      <div class="sulfur-row-sm"><span class="label">🧱 Каменных стен</span><span class="val">${stoneWalls}</span></div>
      <div class="sulfur-row-sm"><span class="label">🚪 Металлических дверей</span><span class="val">${metalDoors}</span></div>
      <div class="sulfur-row-sm"><span class="label">🏗️ Гаражных дверей</span><span class="val">${garageDoors}</span></div>
      <div class="sulfur-row-sm"><span class="label">🛡️ Бронированных дверей</span><span class="val">${armoredDoors}</span></div>
    </div>
    <div class="sulfur-result-card anim visible">
      <h3>⛏️ Нужно нафармить</h3>
      <div class="sulfur-row-sm"><span class="label">🟡 Серной руды</span><span class="val text-sulfur">${fmt(s)}</span></div>
      <div class="sulfur-row-sm"><span class="label">⛏️ Серных нод (~300/нода)</span><span class="val">${fmt(nodes)}</span></div>
      <div class="sulfur-row-sm"><span class="label">🪵 Дерева (на уголь)</span><span class="val text-amber">${fmt(woodForCharcoal)}</span></div>
      <div class="sulfur-tip">💡 С киркой Жаккард ноды дают больше серы. Используй чайный стол для бонуса к фарму.</div>
    </div>`;
}

// ===== WIPE CHECKLIST =====
function toggleCheck(id) {
  if (checkedItems.has(id)) checkedItems.delete(id);
  else checkedItems.add(id);
  renderChecklist();
}

function resetChecklist() {
  checkedItems.clear();
  renderChecklist();
}

function renderChecklist() {
  const progress = Math.round((checkedItems.size / wipeChecklist.length) * 100);
  const fill = $('.progress-fill');
  const pct = $('.progress-pct');
  const sub = $('.progress-sub');
  if (fill) fill.style.width = progress + '%';
  if (pct) pct.textContent = progress + '%';
  if (sub) sub.textContent = checkedItems.size + ' из ' + wipeChecklist.length + ' выполнено';

  const list = $('#checklist');
  if (!list) return;
  list.innerHTML = wipeChecklist.map(item => {
    const done = checkedItems.has(item.id);
    const priClass = done ? 'check-done-bg' : ('pri-' + item.priority);
    const badgeClass = 'pri-badge-' + item.priority;
    const priLabel = { high:'Важно', medium:'Средне', low:'Не спешно' }[item.priority];
    return `<div class="check-item ${priClass} ${done ? 'done' : ''}" onclick="toggleCheck('${item.id}')">
      <div class="check-circle">${done ? '✓' : ''}</div>
      <div class="check-body">
        <div class="check-header">
          <span class="emoji">${item.icon}</span>
          <span class="check-title">${item.title}</span>
          <span class="pri-badge ${badgeClass}">${priLabel}</span>
        </div>
        <p class="check-desc">${item.desc}</p>
      </div>
    </div>`;
  }).join('');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const toggle = $('.mobile-toggle');
  if (toggle) toggle.addEventListener('click', () => {
    const menu = $('.mobile-menu');
    if (menu) menu.classList.toggle('open');
  });

  // Nav buttons
  $$('.nav-btn, .mobile-menu button').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.section));
  });

  // Scroll top
  const scrollTop = $('.scroll-top');
  if (scrollTop) scrollTop.addEventListener('click', () => navigateTo('home'));

  // Raid: Categories
  const catContainer = $('#raid-categories');
  if (catContainer) {
    catContainer.innerHTML = getCategories().map(cat =>
      `<button class="filter-btn ${cat === 'Все' ? 'active' : ''}" data-cat="${cat}" onclick="setCategory('${cat}')">${cat}</button>`
    ).join('');
  }

  // Raid: Tool buttons
  $$('.tool-btn').forEach(b => {
    b.addEventListener('click', () => setTool(b.dataset.tool));
  });

  // Raid: Search
  const searchInput = $('#raid-search');
  if (searchInput) searchInput.addEventListener('input', e => onRaidSearch(e.target.value));

  // Render initial raid
  renderRaidTargets();
  renderRaidSummary();

  // Base: Tier buttons
  $$('.tier-btn').forEach(b => {
    b.addEventListener('click', () => setBaseTier(b.dataset.tier));
  });

  // Base: Presets
  $$('.preset-btn').forEach(b => {
    b.addEventListener('click', () => loadPreset(parseInt(b.dataset.idx)));
  });

  // Render initial base
  renderBaseParts();
  renderBaseSummary();

  // Sulfur: Input
  const sulfurInput = $('#sulfur-input');
  if (sulfurInput) sulfurInput.addEventListener('input', e => setSulfur(e.target.value));
  const sulfurRange = $('#sulfur-range');
  if (sulfurRange) sulfurRange.addEventListener('input', e => setSulfur(e.target.value));
  $$('.quick-btn').forEach(b => {
    b.addEventListener('click', () => setSulfur(b.dataset.amount));
  });
  renderSulfurResults();

  // Checklist
  renderChecklist();

  // Scroll spy
  setupScrollSpy();

  // Animations
  setTimeout(setupAnimations, 100);

  // Generate particles
  const heroParticles = $('#hero-particles');
  if (heroParticles) {
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.setProperty('--dur', (3 + Math.random() * 4) + 's');
      p.style.setProperty('--delay', (Math.random() * 3) + 's');
      heroParticles.appendChild(p);
    }
  }
});
