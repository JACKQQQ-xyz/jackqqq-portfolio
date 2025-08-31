  const Image = {
    HeroImage: "https://i.imgur.com/cwj2ohX.jpeg"
  };

  export default Image;

  import Tools1 from "../public/assets/tools/vscode.png";
  import Tools2 from "../public/assets/tools/java.png";
  import Tools3 from "../public/assets/tools/html.png";
  import Tools4 from "../public/assets/tools/css.png";
  import Tools5 from "../public/assets/tools/js.png";
  import Tools6 from "../public/assets/tools/reactjs.png";
  import Tools7 from "../public/assets/tools/tailwind.png";
  import Tools9 from "../public/assets/tools/npm.png";
  import Tools10 from "../public/assets/tools/github.png";
  import Tools11 from "../public/assets/tools/figma.png";
  import Tools12 from "../public/assets/tools/canva.png";
  import Tools13 from "../public/assets/tools/capcut.png";
  import Tools14 from "../public/assets/tools/obs.png";

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
      id: 8,
      gambar: Tools9,
      nama: "NPM",
      ket: "Package Manager",
      dad: "65",
    },

    // Version Control & Hosting
    {
      id: 9,
      gambar: Tools10,
      nama: "GitHub",
      ket: "Repository",
      dad: "78",
    },

    // Design Tools
    {
      id: 10,
      gambar: Tools11,
      nama: "Figma",
      ket: "UI/UX Design Tool",
      dad: "30",
    },
    {
      id: 11,
      gambar: Tools12,
      nama: "Canva",
      ket: "Design Tool",
      dad: "80",
    },

    // Multimedia & Broadcasting
    {
      id: 12,
      gambar: Tools13,
      nama: "CapCut",
      ket: "Video Editing Software",
      dad: "80",
    },
    {
      id: 13,
      gambar: Tools14,
      nama: "OBS Studio",
      ket: "Live Streaming Tool",
      dad: "85",
    },
  ];

  export const listProyek = [
    {
      id: 1,
      gambar: "https://i.imgur.com/D5Wg8eg.png",
      nama: "Website E-commerce Bodykit",
      desk: "Website E-commerce Bodykit adalah proyek RPL kelas 10 yang saya buat untuk menjual bodykit mobil LBWK (Liberty Walk), sekaligus melatih keterampilan pengembangan website.",
      tools: ["HTML", "CSS", "TailwindCSS"],
      demo: "https://fake-lbwk-store.vercel.app/home.html",
      github: "https://github.com/JACKQQQ-xyz/fake-lbwk-store",
      dad: "200",
    },
    {
      id: 2,
      gambar: "https://i.imgur.com/kR0Hs0v.png",
      nama: "Website Tonton Kode",
      desk: "Website Tonton Kode adalah proyek RPL JavaScript untuk menampilkan video pembelajaran coding melalui embed YouTube.",
      tools: ["HTML","CSS","TailwindCSS","JavaScript"],
      demo: "https://www.instagram.com/p/DGJG0jHSPg4/?utm_source=ig_web_copy_link&igsh=aHo3ZHM4cWU5ZnZl",
      github: "",
      dad: "200",
    },
    {
      id: 3,
      gambar: "https://i.imgur.com/vOwm0NQ.jpeg",
      nama: "Pixel Art ToxiFrog",
      desk: "Mr. ToxiFrog adalah karakter 2D bergaya pixel art yang saya buat sebagai tugas mata pelajaran Seni Budaya, dengan tujuan melatih kreativitas dan keterampilan desain karakter digital.",
      tools: ["Aseprite"],
      demo: "https://www.instagram.com/p/DGJG0jHSPg4/?utm_source=ig_web_copy_link&igsh=aHo3ZHM4cWU5ZnZl",
      github: "",
      dad: "200",
    },
    {
      id: 4,
      gambar: "https://i.imgur.com/z6KsgXD.jpeg",
      nama: "Pixel Art Toyota GR-86",
      desk: "Toyota GR86 adalah karya pixel art 2D yang saya buat di waktu luang, bukan sebagai tugas sekolah, dengan tujuan menyalurkan hobi sekaligus melatih ketelitian dan keterampilan digital art.",
      tools: ["Aseprite"],
      demo: "https://www.instagram.com/p/DGnzdYzy0wH/?utm_source=ig_web_copy_link&igsh=N3hnbHRkMHFod3U5",
      github: "",
      dad: "200",
    },
    {
      id: 5,
      gambar: "https://i.imgur.com/Xmak2ow.png",
      nama: "Remake UI/UX Website Yakult",
      desk: "Remake UI/UX Website Yakult adalah proyek P5 pada mata pelajaran UI/UX, dengan tujuan merancang ulang website industri yang dikunjungi agar lebih modern, menarik, dan mudah digunakan.",
      tools: ["Figma"],
      demo: "https://www.figma.com/proto/Xgmd2qA17s7O3KNxvyGj0X/Remake-UI-UX-Website-Yakult-Indonesia?page-id=155%3A948&node-id=155-949&p=f&viewport=118%2C548%2C0.04&t=CvPdzTQiindstM5i-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=155%3A949",
      github: "",
      dad: "200",
    },
    {
      id: 5,
      gambar: "https://i.imgur.com/xJKDlq3.png",
      nama: "Website Portfolio",
      desk: "Web portfolio pribadi yang menampilkan profil, keterampilan, dan proyek saya, dibangun dengan React.js, TailwindCSS, dan Vite untuk tampilan modern dan responsif.",
      tools: ["TailwindCSS","ReactJS","Vite",],
      demo: "https://jackqqq-portfolio.vercel.app/",
      github: "https://github.com/JACKQQQ-xyz/jackqqq-portfolio",
      dad: "200",
    },
    
  ];

  export const achievements = [
  {
    id: 1,
    title: "1st Place - Web Design Competition",
    year: "2024",
    desc: "Won first place in a national-level web design competition.",
    img: "/images/achievements/web-design.jpg",
  },
  {
    id: 2,
    title: "Best Multimedia Project",
    year: "2023",
    desc: "Awarded for creating the best multimedia project in school.",
    img: "/images/achievements/multimedia.jpg",
  },
  {
    id: 3,
    title: "Top 5 Finalist - Hackathon",
    year: "2023",
    desc: "Reached top 5 in a city-wide hackathon competition.",
    img: "/images/achievements/hackathon.jpg",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Attendance Pelatihan Cyber Security",
    issuer: "SMK Telkom Malang",
    year: "2024",
    img: "https://i.imgur.com/v1ExqPn.png",
  },
  {
    id: 2,
    title: "Kelulusan Pelatihan Cyber Security",
    issuer: "SMK Telkom Malang",
    year: "2024",
    img: "https://i.imgur.com/e4ncE7k.png",
  },
  {
    id: 3,
    title: "Talkshow AMD Classroom",
    issuer: "AMD Indonesia",
    year: "2024",
    img: "https://i.imgur.com/H0tPikj.png",
  },
  {
    id: 4,
    title: "Workshop NextGen Creators",
    issuer: "Politeknik Elektronika Negeri Surabaya",
    year: "2024",
    img: "https://i.imgur.com/bSDylvJ.jpeg",
  },
  {
    id: 5,
    title: "Finalis Drone Piloting Battle ASEAN",
    issuer: "Steam Nexus Asean Regional",
    year: "2025",
    img: "https://i.imgur.com/77Om6Ss.jpeg",
  },
];