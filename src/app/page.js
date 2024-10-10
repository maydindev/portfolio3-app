import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#FFDD55] min-h-screen">
      <nav className="flex justify-between items-center rounded-bl-3xl rounded-br-3xl bg-black text-white px-8 py-4 md:px-[5em] md:py[1em] ">
        <a href="">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </a>
        <div className="hidden md:flex justify-center items-center text-xl font-extrabold">
          <ul className="flex gap-[20px] md:gap-[60px] text-xl md:text-3xl">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="md:hidden">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>
      </nav>

      <div className="flex flex-col md:flex-row justify-between my-10 mx-5 md:mx-10 items-start md:items-center">
        <div className="flex flex-col ml-2 mt-10 justify-start">
          <p className="text-5xl  md:text-6xl font-bold leading-[40px] md:leading-[50px]">
            Hello,
          </p>
          <p className="text-5xl md:text-6xl font-bold leading-[80px] md:leading-[100px]">
            I'm Namık.
          </p>

          <p className="text-3xl hidden md:block">
            UI/UX Designer , React developer
          </p>

          <p className="text-3xl block md:hidden">
            UI/UX Designer <br /> React developer
          </p>

          <div className="hidden md:flex justify-center md:justify-start mt-4 ">
            <button className="bg-black text-white font-bold m-2 px-5 py-2 md:px-7 md:py-2 text-md md:text-xl rounded-xl shadow-lg shadow-[#00c6ae]/50">
              Hire me
            </button>
            <button className="bg-black text-white font-bold m-2 px-5 py-2 md:px-7 md:py-2 text-md md:text-xl rounded-xl shadow-lg shadow-[#00c6ae]/50 customShadow">
              Download CV
            </button>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center mt-5 md:mt-0 ">
            <img src="/avatar.png" alt="My Picture" />
          </div>

          <div className="flex flex-col justify-end mt-4 ml-10 mb-10 gap-4 ">
            <img src="instagram.png" alt="Instagram" />
            <img src="facebook.png" alt="Facebook" />
            <img src="twitter.png" alt="Twitter" />
            <img src="youtube.png" alt="Youtube" />
          </div>
        </div>
      </div>

      <div className="flex ml-5 md:hidden">
        <div className="flex justify-center mt-4 ">
          <button className="bg-black text-white font-bold m-2 px-5 py-2 text-md rounded-xl shadow-lg shadow-[#00c6ae]/50">
            Hire me
          </button>
          <button className="bg-black text-white font-bold m-2 px-5 py-2 text-md rounded-xl shadow-lg shadow-[#00c6ae]/50 customShadow">
            Download CV
          </button>
        </div>
      </div>

      <div className="bg-[#106EE8] m-20 rounded-3xl flex">
        <div className="ml-10 mr-5 mt-20 mb-20">
          <img src="/avatar.png" alt="My Picture" />
        </div>
        <div className="ml-10 mt-20 mb-20 mr-20 p-5">
          <p className="text-4xl font-bold text-white">About me</p>
          <p className="text-2xl font-bold text-[#FFDD55] leading-[50px]">
            UI/UX Designer
          </p>
          <p className="text-2xl font-bold text-[#FFDD55] leading-[50px]">
            {" "}
            React Developer
          </p>
          <p className="text-xl font-bold text-[#FFDD55] leading-[50px]">
            Hello! I'm a UI/UX designer and React developer. Dive into my
            portfolio to discover a fusion of elegant design and seamless react
            development. Welcome to a world where creativity meets
            functionality!
          </p>

          <div className="flex justify-start mt-4 ">
            <button className="bg-black text-white font-bold m-2 px-5 py-2 text-md rounded-xl shadow-lg shadow-[#00c6ae]/50">
              Hire me
            </button>
            <button className="bg-black text-white font-bold m-2 px-5 py-2 text-md rounded-xl shadow-lg shadow-[#00c6ae]/50 customShadow">
              Download CV
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#EB7711] p-10">
        <div className="flex flex-col justify-center items-center p-5">
          <h1 className="text-5xl font-bold text-center">Services</h1>
          <p className="text-white text-center w-[700px] m-7">
            Embark on a journey of digital transformation with services that
            blend design brilliance with cutting-edge development. Let's create
            experiences that resonate and applications that captivate.
          </p>
        </div>
        <div className="flex justify-evenly ">
          <div className="relative bg-purple-500 p-6 rounded-lg shadow-lg text-white border border-black w-[256px] flex flex-col justify-between items-left">
            <div className="absolute -top-5 left-[110px]  w-10 h-10 bg-green-500 flex items-center justify-center rounded-full text-xl font-bold">
              1
            </div>
            <h3 className="text-2xl font-semibold mb-2">UI/UX Designer</h3>
            <p className="mb-4">
              Crafting captivating interfaces that resonate. From wireframes to
              polished designs, I make sure your digital presence stands out
              with user-centric creativity.
            </p>
            <button className="bg-[#FFDD55] text-black  font-bold py-2 px-14 rounded">
              Learn More
            </button>
          </div>
          <div className="relative bg-purple-500 p-6 rounded-lg shadow-lg text-white border border-black w-[256px] flex flex-col justify-between items-left">
            <div className="absolute -top-5 left-[110px]  w-10 h-10 bg-green-500 flex items-center justify-center rounded-full text-xl font-bold">
              2
            </div>
            <h3 className="text-2xl font-semibold mb-2">React Developer </h3>
            <p className="mb-4">
              Turning app ideas into reality. As a React developer, I build
              sleek, cross-platform applications for a seamless user experience
              and efficient performance.
            </p>
            <button className="bg-[#FFDD55] text-black font-bold py-2 px-14 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className=" mb-[200px]"></div>

      <div className="bg-[#0ACF83] p-40 flex flex-col justify-center items-center">
        <h6 className="text-white text-4xl mb-20">
          If You have any Query or Project ideas feel free to
        </h6>
        <button className="bg-[#FFDD55] rounded-xl shadow-2xl text-5xl px-20 py-4 font-extrabold customShadow">
          Contact me
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center items-center">
          <img src="/logo.png" alt="" />
          <h5 className="text-xl font-bold ml-7">Namık Korona</h5>
        </div>

        <p classname="flex justify-center items-center font-bold text-sm">
          I Make as soon as Possible .You really like my work contact me and
          let’s Work Together.
        </p>

        <div className="flex justify-center items-center gap-4 ">
          <img src="instagram.png" alt="Instagram" />
          <img src="facebook.png" alt="Facebook" />
          <img src="twitter.png" alt="Twitter" />
          <img src="youtube.png" alt="Youtube" />
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <div className="flex">
          <img src="/location.png" alt="Location" />
          <p>Türkiye</p>
        </div>
        <p>© 2024, All Rights By Figma Design.</p>
        <nav className="flex">
          <ul className="flex gap-6">
            <li>Guides</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </nav>
      </div>



    </div>
  );
}
