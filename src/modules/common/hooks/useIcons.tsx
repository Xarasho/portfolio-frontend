import LaptopIcon from "@mui/icons-material/Laptop";
import CodeIcon from "@mui/icons-material/Code";

export const useIcons = () => {
  
  const icons = new Map([
    ['laptop', <LaptopIcon key={0} className="text-yellow-200 h-8 w-8" />],
    ['code', <CodeIcon key={1} className="text-yellow-200 h-8 w-8" />]

  ])
  return {
    icons
  }
} 