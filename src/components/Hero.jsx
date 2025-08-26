import Dataimage from "../data";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="hero grid md:grid-cols-2 items-center md:pt-10 pt-0 xl:gap-0 gap-6 grid-cols-1">
      <div data-aos="fade-right">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={Dataimage.HeroImage} alt="Hero" className="w-10 rounded-md" />
          <q>Kata orang, proses nggak akan mengkhianati hasil.</q>
        </div>
        <h1 className="md:text-5xl/tight text-4xl/tight font-bold">
          Hi, Saya M. Dzaky Azzam
        </h1>
        <div className="text-yellow-400 font-semibold md:text-4xl text-3xl mb-2">
          <TypeAnimation
            sequence={[
              "Photography", 2000,
              "Videography", 2000,
              "Broadcasting", 2000,
              "Event Documentation", 2000,
              "Fullstack Developer", 2000,
              "Drone Pilot", 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-base/loose mb-6 opacity-50">
          Saya pelajar SMK Telkom Malang jurusan RPL, aktif di fotografi,
            videografi, broadcasting, dan pengembangan perangkat lunak. Terampil
            menggunakan software multimedia, sekarang di kelas 11 dengan
            expertise Fullstack, serta berpengalaman dalam kerja tim dan
            kepemimpinan melalui peran sebagai pengurus OSIS.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="https://github.com/JACKQQQ-xyz"
            className="bg-yellow-500 p-4 rounded-2xl hover:bg-yellow-400 transition delay-150 duration-300 ease-in-out hover:scale-105">
            <i className="ri-github-fill"></i> GitHub
          </a>
          <a href="#proyek"
            className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition delay-150 duration-300 ease-in-out hover:scale-105">
            Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
          </a>
        </div>
      </div>
      <img data-aos="fade-left" src={Dataimage.HeroImage} alt="Hero"
        className="w-[500px] md:ml-auto rounded-4xl" loading="lazy" />
    </div>
  );
};

export default Hero;
