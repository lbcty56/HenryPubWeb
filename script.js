/* --- CONFIGURATION SETTINGS --- */
const CONFIG = {
  // Production Number: "85263889388"
  // Test Number: Input your test number below
  whatsappNumber: "85297406008", // Currently set to Test Number

  // HERO SLIDESHOW IMAGES
  // You can use local paths like 'sources/photo1.jpg' or external URLs
  heroImages: [
    "./sources/hero/bar.jpeg", // Bar Interior
    "./sources/hero/door.jpeg", // Cocktails
  ],
  slideInterval: 5000, // Time in ms (5 seconds)
  roomImages: {
    small: [
      "./sources/private_rooms/small1.jpeg", // Placeholder
      "./sources/private_rooms/small2.jpeg",
    ],
    medium: [
      "./sources/private_rooms/medium1.jpeg", // Placeholder
      "./sources/private_rooms/medium2.jpeg",
    ],
    grand: [
      "./sources/private_rooms/premium1.jpeg", // Placeholder
      "./sources/private_rooms/premium2.jpeg",
    ],
  },
};

/* --- TRANSLATION DATA --- */
const translations = {
  en: {
    nav_about: "The Space",
    nav_rooms: "Private Suites",
    nav_venue: "Venue Hire",
    nav_events: "Gallery",
    nav_contact: "Contact",
    hero_subtitle: "LUXURY PUB & VENUE • KWUN TONG",
    hero_cta: "Book A Room",
    about_title: "The Experience",
    about_sub: "Unrivaled Atmosphere",
    about_text:
      "HENRY PUB is an 8,500 sq. ft. multi-functional masterpiece designed for flexibility and luxury. Featuring a massive 12,000 sq. ft. rooftop event space, we provide the ultimate setting for social gatherings, concerts, and corporate prestige.",
    stat_1: "Interior Sq. Ft.",
    stat_2: "Rooftop Sq. Ft.",
    stat_3: "Guest Capacity",
    rooms_title: "Private Suites",
    rooms_sub: "Exclusive Karaoke Experience",
    room_s_title: "Small Suite",
    room_s_cap: "Up to 15 Guests",
    min_charge: "Minimum Charge",
    room_s_price: "HK$1,800",
    period: "Period: 19:00 - 02:00",
    feat_audio: "Professional Audio",
    feat_privacy: "Total Privacy",
    feat_service: "Premium Service",
    feat_lounge: "Lounge Seating",
    feat_light: "Mood Lighting",
    feat_vip: "VIP Interior",
    feat_dance: "Dance Floor Area",
    room_m_title: "Medium Suite",
    room_m_cap: "Up to 25 Guests",
    room_m_price: "HK$3,800",
    room_l_title: "Grand Suite",
    room_l_cap: "Up to 40 Guests",
    room_l_price: "HK$5,800",
    btn_reserve: "Reserve",
    venue_title: "Main Hall Buyout",
    venue_desc:
      "The ultimate choice for concerts, press conferences, and corporate functions. Equipped with a 5x2m LED Screen, VSING System, and Electronic Darts.",
    venue_wd: "Mon - Thu",
    venue_wd_p: "HK$300 / person",
    venue_we: "Fri - Sat",
    venue_we_p: "HK$380 / person",
    venue_feat_1: "Minimum 60 Guests / 4 Hours",
    venue_feat_2: "Includes Red/White Wine, Beer, Soft Drinks",
    venue_feat_3: "Stage & Professional Sound System",
    venue_feat_4: "Booking Required 7 Days in Advance",
    btn_inquire: "Inquire Availability",
    gal_1: "Live Bands",
    gal_2: "Private Parties",
    gal_3: "Corporate",
    gal_4: "Celebrations",
    footer_tag:
      "The premier destination for entertainment and luxury in Hong Kong.",
    contact_title: "Visit Us",
    address_1: "Flat B, 9/F, Hung To Centre",
    address_2: "94-96 How Ming Street, Kwun Tong",
    reserve_title: "Reservations",
    reserve_text: "Advance booking via WhatsApp required.",

    // Modal Text
    modal_title: "Reserve Your Suite",
    modal_desc: "Complete the details below to request your booking.",
    form_type: "Experience Type",
    opt_small: "Small Suite (Max 15)",
    opt_med: "Medium Suite (Max 25)",
    opt_grand: "Grand Suite (Max 40)",
    opt_hall: "Main Hall Buyout",
    form_date: "Date",
    form_time: "Time",
    form_name: "Guest Name",
    form_req: "Special Requests",
    btn_submit: "Request Reservation",
    form_note:
      "*Submission redirects to WhatsApp for final confirmation. Service charge applies.",
  },
  zh: {
    nav_about: "場地介紹",
    nav_rooms: "私人房間",
    nav_venue: "包場服務",
    nav_events: "活動相簿",
    nav_contact: "聯絡我們",
    hero_subtitle: "豪華酒吧及活動場地 • 觀塘",
    hero_cta: "立即預訂",
    about_title: "極致體驗",
    about_sub: "非凡氛圍",
    about_text:
      "HENRY PUB 為 8,500 呎多功能酒吧，樓上設 12,000 呎天台活動空間。我們為小型演唱會、發佈會、生日會、社交聚會及商務會議提供靈活之選。",
    stat_1: "室內面積 (呎)",
    stat_2: "天台面積 (呎)",
    stat_3: "可容納人數",
    rooms_title: "獨立卡拉OK房",
    rooms_sub: "尊貴私人體驗",
    room_s_title: "細房",
    room_s_cap: "容納 15 人",
    min_charge: "最低消費",
    room_s_price: "HK$1,800",
    period: "時段: 19:00 - 02:00",
    feat_audio: "專業音響系統",
    feat_privacy: "極高私隱度",
    feat_service: "尊貴服務",
    feat_lounge: "舒適梳化",
    feat_light: "氣氛燈光",
    feat_vip: "奢華裝潢",
    feat_dance: "舞池空間",
    room_m_title: "中房",
    room_m_cap: "容納 25 人",
    room_m_price: "HK$3,800",
    room_l_title: "大房",
    room_l_cap: "容納 40 人",
    room_l_price: "HK$5,800",
    btn_reserve: "預約房間",
    venue_title: "大廳包場服務",
    venue_desc:
      "大廳可容納 200 人，提供 5x2 米大型 LED 屏幕、VSING 系統及飛鏢機。適合小型演唱會、發佈會、生日會、社交聚會或商務會議。",
    venue_wd: "星期一至四",
    venue_wd_p: "每位 HK$300 起",
    venue_we: "星期五及六",
    venue_we_p: "每位 HK$380 起",
    venue_feat_1: "最低 60 人 / 4 小時",
    venue_feat_2: "提供紅/白酒、啤酒及汽水任飲",
    venue_feat_3: "舞台及專業音響設備",
    venue_feat_4: "需提前最少 7 天預約",
    btn_inquire: "查詢包場",
    gal_1: "現場樂隊",
    gal_2: "私人派對",
    gal_3: "商務聚會",
    gal_4: "節慶活動",
    footer_tag: "香港首屈一指的豪華娛樂及活動地標。",
    contact_title: "地址",
    address_1: "鴻圖中心 9 樓 B 室",
    address_2: "觀塘巧明街 94-96 號",
    reserve_title: "預訂",
    reserve_text: "所有房間請提前 WHATSAPP 預約。",

    // Modal Text
    modal_title: "預約您的體驗",
    modal_desc: "請填寫以下資料以發送預約請求。",
    form_type: "預約項目",
    opt_small: "細房 (最多15人)",
    opt_med: "中房 (最多25人)",
    opt_grand: "大房 (最多40人)",
    opt_hall: "大廳包場",
    form_date: "日期",
    form_time: "時間",
    form_name: "賓客稱呼",
    form_req: "特別要求",
    btn_submit: "確認預約",
    form_note: "*提交後將跳轉至 WhatsApp 進行最終確認。設加一服務費。",
  },
};

let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "zh" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) {
      // Add fade animation for smooth transition
      el.style.opacity = 0;
      setTimeout(() => {
        el.textContent = translations[currentLang][key];
        el.style.opacity = 1;
      }, 300);
    }
  });
}

/* --- ANIMATION LOGIC (Intersection Observer) --- */
document.addEventListener("DOMContentLoaded", () => {
  // Navbar Scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  // Scroll Reveal Elements
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe Headers
  document
    .querySelectorAll(".section-header")
    .forEach((el) => observer.observe(el));

  // Staggered Animations for Cards
  const cards = document.querySelectorAll(".room-card");
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add delay based on index
          setTimeout(() => {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          }, index * 200);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((card) => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";
    cardObserver.observe(card);
  });
});

/* --- MODAL FUNCTIONS --- */

function openModal(preselectType = null) {
  const modal = document.getElementById("bookingModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scrolling

  // Pre-select the room if clicked from a specific card
  if (preselectType) {
    const select = document.getElementById("bookingType");
    // Logic to match value based on simple text matching
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value.includes(preselectType)) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

function closeModal() {
  const modal = document.getElementById("bookingModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Close modal if clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("bookingModal");
  if (event.target == modal) {
    closeModal();
  }
};

/* --- BOOKING LOGIC (WHATSAPP BRIDGE) --- */
function handleBooking(e) {
  e.preventDefault();

  // 1. Gather Data
  const type = document.getElementById("bookingType").value;
  const date = document.getElementById("bookingDate").value;
  const time = document.getElementById("bookingTime").value;
  const name = document.getElementById("guestName").value;
  const req = document.getElementById("specialReq").value;

  // 2. Format Message
  let message = `HENRY PUB RESERVATION REQUEST\n\n`;
  message += `👤 Name: ${name}\n`;
  message += `🏠 Type: ${type}\n`;
  message += `📅 Date: ${date}\n`;
  message += `⏰ Time: ${time}\n`;
  if (req) message += `📝 Note: ${req}\n`;

  // 3. Encode & Redirect using Config
  const phone = CONFIG.whatsappNumber;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
  closeModal();
}

/* --- MOBILE MENU FUNCTION --- */
function toggleMobileMenu() {
  const nav = document.getElementById("mobileNav");
  const toggle = document.querySelector(".mobile-toggle");

  nav.classList.toggle("active");
  toggle.classList.toggle("active");

  // Prevent scrolling when menu is open
  if (nav.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

/* --- HERO SLIDESHOW LOGIC (FIXED) --- */
function initHeroSlideshow() {
  const container = document.getElementById("hero-slideshow");
  const images = CONFIG.heroImages;

  // Safety check
  if (!container || images.length === 0) return;

  // 1. Create Slide Elements
  images.forEach((imgSrc, index) => {
    const slide = document.createElement("div");
    slide.className = index === 0 ? "hero-slide active" : "hero-slide";
    slide.style.backgroundImage = `url('${imgSrc}')`;
    container.appendChild(slide);
  });

  // 2. Define slides variable ONCE (Performance fix)
  const slides = document.querySelectorAll(".hero-slide");
  let currentIndex = 0;

  // 3. Start Cycling
  setInterval(() => {
    // Identify current and next
    const currentSlide = slides[currentIndex];
    currentIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[currentIndex];

    // Swap classes
    currentSlide.classList.remove("active");
    nextSlide.classList.add("active");
  }, CONFIG.slideInterval);
}

/* --- ROOM SLIDER LOGIC --- */
function initRoomSliders() {
  // Select all slider containers
  const containers = document.querySelectorAll(".room-slider-container");

  containers.forEach((container) => {
    const type = container.getAttribute("data-room-type");
    const images = CONFIG.roomImages[type];

    if (!images || images.length === 0) return;

    // 1. Inject Images
    let html = "";
    images.forEach((src, index) => {
      // First image is active by default
      const activeClass = index === 0 ? "active" : "";
      html += `<img src="${src}" class="room-slide ${activeClass}" data-index="${index}">`;
    });

    // 2. Inject Controls (Arrows)
    html += `
      <div class="slider-nav prev" onclick="moveRoomSlide(this, -1)">&#10094;</div>
      <div class="slider-nav next" onclick="moveRoomSlide(this, 1)">&#10095;</div>
    `;

    container.innerHTML = html;
  });
}

function moveRoomSlide(btn, direction) {
  const container = btn.parentElement;
  const slides = container.querySelectorAll(".room-slide");
  let activeIndex = 0;

  // Find current active index
  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      activeIndex = index;
      slide.classList.remove("active");
    }
  });

  // Calculate new index (Looping)
  let newIndex = activeIndex + direction;
  if (newIndex < 0) newIndex = slides.length - 1;
  if (newIndex >= slides.length) newIndex = 0;

  // Show new slide
  slides[newIndex].classList.add("active");
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlideshow();
  initRoomSliders();
  // ... existing observers ...
});
