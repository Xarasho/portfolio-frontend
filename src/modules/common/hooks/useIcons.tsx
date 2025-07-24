import LaptopIcon from "@mui/icons-material/Laptop";
import CodeIcon from "@mui/icons-material/Code";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import JavascriptIcon from "@mui/icons-material/Javascript";
// import NestjsIcon from "../components/nestjs.component";
// import NodeJsIcon from "../components/nodejs.component";
// import TypescriptIcon from "../components/typescript.component";
// import NextJsIcon from "../components/nextjs.component";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

export const useIcons = () => {
  const icons = new Map([
    ["laptop", <LaptopIcon key={0} className="text-yellow-200 h-8 w-8" />],
    ["code", <CodeIcon key={1} className="text-yellow-200 h-8 w-8" />],
    ["user", <PersonIcon key={2} className="text-yellow-200 h-8 w-8" />],
    ["lightning", <BoltIcon key={3} className="text-yellow-200 h-8 w-8" />],
    ["js", <JavascriptIcon key={4} className="text-yellow-200 h-8 w-8" />],
    [
      "js-lg",
      <JavascriptIcon key={5} sx={{ color: '#fff085', fontSize: 100}} className="text-yellow-200 h-20 w-20 scale-150" />,
    ],
    ["code-lg", <CodeIcon key={6} sx={{ color: '#fff085', fontSize: 100}} className="text-yellow-200 h-20 w-20" />],
    // ["nestjs", <NestjsIcon key={7} className="h-20 w-20 scale-75" color={false} />],
    // ["node", <NodeJsIcon key={8} className="h-20 w-20" color={false} />],
    // ["ts", <TypescriptIcon key={9} className="h-20 w-20 scale-75" color={false} />],
    // ["nextjs", <NextJsIcon key={10} className="h-20 w-20 scale-90" color={false} />],
    ["book", <BookOutlinedIcon key={11} className="h-6 w-6 text-yellow-200" />],
  ]);
  return {
    icons,
  };
};
