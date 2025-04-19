import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import {
  SiBootstrap,
  SiCss3,
  SiDjango,
  SiDocker,
  SiNginx,
  SiFlask,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            As a software engineer, I don’t just write code — I solve problems. My focus is on building automation
            systems and digital solutions that eliminate repetitive work, optimize workflows, and create real impact in
            industries. Whether it's through scripting, APIs, integration tools, or full custom platforms, I aim to make
            things faster, smarter, and more efficient. I enjoy breaking down complex problems and designing clean,
            scalable solutions that save time and reduce errors. My goal is to help teams and businesses shift from
            manual chaos to automated clarity. Let’s connect if you’re interested in automation, process optimization,
            or building tools that actually solve problems.
          </p>
          <Button className="mt-5">Download CV</Button>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-4 text-[50px]">
          <SiPython color="#3776AB" />
          <SiDjango color="#092E20" />
          <SiFlask color="#000000" />
          <SiJavascript color="#F7DF1E" />
          <SiReact color="#61DAFB" />
          <SiNextdotjs color="#000000" />
          <SiRedux color="#764ABC" />
          <SiHtml5 color="#E34F26" />
          <SiCss3 color="#1572B6" />
          <SiTailwindcss color="#38BDF8" />
          <SiBootstrap color="#7952B3" />
          <SiPostgresql color="#336791" />
          <SiMysql color="#4479A1" />
          <SiRedis color="#DC382D" />
          <SiDocker color="#2496ED" />
          <SiNginx color="#009639" />
          <SiGithub color="#181717" />
          <SiGitlab color="#FC6D26" />
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">30+</h2>
            <p className="mt-1">Cup of Coffee</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">15+</h2>
            <p className="mt-1">Satisfied clients</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">7+</h2>
            <p className="mt-1">Years of experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
