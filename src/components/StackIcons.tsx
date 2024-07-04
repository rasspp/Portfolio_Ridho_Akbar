import { FaJsSquare, FaReact, FaNode, FaHtml5, FaCss3Alt, FaBootstrap, FaVuejs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTailwindcss, SiTypescript, SiFirebase, SiExpress, SiDaisyui, SiMui } from 'react-icons/si';

const StackIcons: { [key: string]: JSX.Element } = {
  tailwind: <SiTailwindcss />,
  mongodb: <SiMongodb />,
  typescript: <SiTypescript />,
  javascript: <FaJsSquare />,
  firebase: <SiFirebase />,
  react: <FaReact />,
  node: <FaNode />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  bootstrap: <FaBootstrap />,
  vue: <FaVuejs />,
  git: <FaGitAlt />,
  mysql: <SiMysql />,
  express: <SiExpress />,
  daisyui: <SiDaisyui />,
  mui: <SiMui />
};

export default StackIcons;
