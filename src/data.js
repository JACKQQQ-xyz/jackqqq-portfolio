import HeroImage from "/assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/java.png";
import Tools3 from "/assets/tools/html.png";
import Tools4 from "/assets/tools/css.png";
import Tools5 from "/assets/tools/js.png";
import Tools6 from "/assets/tools/reactjs.png";
import Tools7 from "/assets/tools/tailwind.png";
import Tools8 from "/assets/tools/vite.png";
import Tools9 from "/assets/tools/npm.png";
import Tools10 from "/assets/tools/github.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/canva.png";
import Tools13 from "/assets/tools/capcut.png";
import Tools14 from "/assets/tools/obs.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "95",
  },

  // Programming Languages
  {
    id: 2,
    gambar: Tools2,
    nama: "Java",
    ket: "Programming Language",
    dad: "75",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "HTML",
    ket: "Web Language",
    dad: "75",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "CSS",
    ket: "Web Language",
    dad: "78",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "82",
  },

  // Framework / Library
  {
    id: 6,
    gambar: Tools6,
    nama: "React JS",
    ket: "JavaScript Framework",
    dad: "45",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Tailwind CSS",
    ket: "CSS Framework",
    dad: "75",
  },

  {
    id: 9,
    gambar: Tools9,
    nama: "NPM",
    ket: "Package Manager",
    dad: "65",
  },

  // Version Control & Hosting
  {
    id: 10,
    gambar: Tools10,
    nama: "GitHub",
    ket: "Repository",
    dad: "78",
  },

  // Design Tools
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "UI/UX Design Tool",
    dad: "30",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Canva",
    ket: "Design Tool",
    dad: "80",
  },

  // Multimedia & Broadcasting
  {
    id: 13,
    gambar: Tools13,
    nama: "CapCut",
    ket: "Video Editing Software",
    dad: "80",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "OBS Studio",
    ket: "Live Streaming Tool",
    dad: "85",
  },
];

import Proyek1 from "/assets/proyek/web-fake-lbwk-store.png";
import Proyek2 from "/assets/proyek/web-tonton-kode.PNG"
import Proyek3 from "/assets/proyek/pxl-toxifrog.jpg";
import Proyek4 from "/assets/proyek/pxl-gr86.jpg";
import Proyek5 from "/assets/proyek/ui-remake-web-yakult-indonesia.PNG";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website E-commerce Bodykit",
    desk: "Website E-commerce Bodykit adalah proyek RPL kelas 10 yang saya buat untuk menjual bodykit mobil LBWK (Liberty Walk), sekaligus melatih keterampilan pengembangan website.",
    tools: ["HTML", "CSS", "TailwindCSS"],
    demo: "https://fake-lbwk-store.vercel.app/home.html",
    github: "https://github.com/JACKQQQ-xyz/fake-lbwk-store",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Website Tonton Kode",
    desk: "Website Tonton Kode adalah proyek RPL JavaScript untuk menampilkan video pembelajaran coding melalui embed YouTube.",
    tools: ["HTML","CSS","TailwindCSS","JavaScript"],
    demo: "https://www.instagram.com/p/DGJG0jHSPg4/?utm_source=ig_web_copy_link&igsh=aHo3ZHM4cWU5ZnZl",
    github: "",
    dad: "200",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Pixel Art ToxiFrog",
    desk: "Mr. ToxiFrog adalah karakter 2D bergaya pixel art yang saya buat sebagai tugas mata pelajaran Seni Budaya, dengan tujuan melatih kreativitas dan keterampilan desain karakter digital.",
    tools: ["Aseprite"],
    demo: "https://www.instagram.com/p/DGJG0jHSPg4/?utm_source=ig_web_copy_link&igsh=aHo3ZHM4cWU5ZnZl",
    github: "",
    dad: "200",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Pixel Art Toyota GR-86",
    desk: "Toyota GR86 adalah karya pixel art 2D yang saya buat di waktu luang, bukan sebagai tugas sekolah, dengan tujuan menyalurkan hobi sekaligus melatih ketelitian dan keterampilan digital art.",
    tools: ["Aseprite"],
    demo: "https://www.instagram.com/p/DGnzdYzy0wH/?utm_source=ig_web_copy_link&igsh=N3hnbHRkMHFod3U5",
    github: "",
    dad: "200",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Remake UI/UX Website Yakult",
    desk: "Remake UI/UX Website Yakult adalah proyek P5 pada mata pelajaran UI/UX, dengan tujuan merancang ulang website industri yang dikunjungi agar lebih modern, menarik, dan mudah digunakan.",
    tools: ["Figma"],
    demo: "https://www.figma.com/proto/Xgmd2qA17s7O3KNxvyGj0X/Remake-UI-UX-Website-Yakult-Indonesia?page-id=155%3A948&node-id=155-949&p=f&viewport=118%2C548%2C0.04&t=CvPdzTQiindstM5i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=155%3A949",
    github: "",
    dad: "200",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Remake UI/UX Website Yakult",
    desk: "Remake UI/UX Website Yakult adalah proyek P5 pada mata pelajaran UI/UX, dengan tujuan merancang ulang website industri yang dikunjungi agar lebih modern, menarik, dan mudah digunakan.",
    tools: ["Figma"],
    demo: "https://www.figma.com/proto/Xgmd2qA17s7O3KNxvyGj0X/Remake-UI-UX-Website-Yakult-Indonesia?page-id=155%3A948&node-id=155-949&p=f&viewport=118%2C548%2C0.04&t=CvPdzTQiindstM5i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=155%3A949",
    github: "",
    dad: "200",
  },
  
].reverse();