import {
  ShoppingCart,
  Utensils,
  Truck,
  Link,
  Wrench,
  Monitor,
  GraduationCap,
  Palette,
} from "lucide-vue-next";

export const services = [
  {
    icon: ShoppingCart,
    title: "Savdoni avtomatlashtirish",
    desc: [
      "Sotuv va omborni boshqarish endi oson!",
      "Kassa va ombor nazorati",
      "Maxsulotlarni sotuvi tahlili",
      "Set dukonlar boshqaruvi",
      "Mijozlar va sodiqlik dasturi (bonus, cashback)",
      "Mobil ilova va masofadan nazorat imkoni",
    ],
    gradient: "from-pink-500 via-red-500 to-yellow-500",
  },
  {
    icon: Utensils,
    title: "Kafe avtomatlashtirish",
    desc: [
      "Buyurtma, menyu va yetkazib berish tizimi bitta joyda!",
      "Telefon orqali buyurtma qabul qilish",
      "Menyu boshqaruvi (dinamik narxlar, aksiya)",
      "Yetkazib berish va stol rezervatsiyasi",
      "Hisob-kitob va to‘lov tizimlari bilan integratsiya",
    ],
    gradient: "from-orange-400 via-pink-500 to-red-500",
  },
  {
    icon: Truck,
    title: "Distribyutorlar",
    desc: [
      "Buyurtmalar, agentlar va logistika to‘liq nazorat ostida!",
      "Buyurtmalarni boshqarish",
      "Agent va haydovchi monitoringi (GPS, mobil ilova)",
      "KPI tizimi",
      "Ombor va logistika tizimi",
      "Sotuv hisobotlari",
    ],
    gradient: "from-green-400 via-emerald-500 to-teal-500",
  },
  {
    icon: Link,
    title: "TopSavdo.uz",
    desc: [
      "Distribyutor va do‘kon egalarini bog‘laydigan B2B platforma!",
      "Optovik va Dukonchilarni hamkorligi",
      "Do‘kon egasi uchun imkoniyatlar",
      "Distribyutorlar uchun imkoniyatlar",
      "Ishlash jarayoni (Buyurtma – Yetkazib berish – To‘lov)",
    ],
    gradient: "from-violet-500 via-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "TopRaqam",
    desc: [
      "Kundalik xizmatlarni topish imkoniyati",
      "Xizmat taklif qilish imkoniyati",
      "Ishonchli ustalar, kurslar va mutaxassislar",
      "Bo’sh ish o‘rinlarini topish imkoniyati",
    ],
    gradient: "from-blue-500 via-sky-500 to-cyan-500",
  },
  {
    icon: Monitor,
    title: "Veb sayt yaratish",
    desc: [
      "Biznesingizni yangi bosqichga olib chiqing!",
      "Landing page, internet do‘kon, CRM integratsiya",
    ],
    gradient: "from-indigo-500 via-blue-600 to-cyan-600",
  },
  {
    icon: Palette,
    title: "Mobilografiya & Grafik dizayn",
    desc: [
      "Biznesingiz uchun zamonaviy reklama video!",
      "Social media kontent, brand dizayn, reklama bannerlar",
    ],
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    icon: GraduationCap,
    title: "IT Academy",
    desc: [
      "IT kurslari (Frontend, Backend, SMM, AI)",
      "Til kurslari (Ingliz, Rus, Nemis, Arab)",
    ],
    gradient: "from-fuchsia-500 via-purple-600 to-indigo-600",
  },
];
