import { Polygon } from './components/Polygon.tsx';
import banner from './assets/banner.jpg';
import { IconChevronDown } from '@tabler/icons-react';

function App() {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-background">
      <Polygon
        bgImage={banner}
        borderColor="bg-text"
        borderWidth={{ top: 0, left: 0, right: 0 }}
        className="h-[200px] w-full"
        clipPath="polygon(0 0, 100% 0, 100% 78%, 97% 100%, 3% 100%, 0 80%)"
      >
        <div className="h-[200px] w-full bg-no-repeat bg-cover"></div>
      </Polygon>

      <div className="flex flex-col-reverse items-center w-[800px] mt-[-125px]">
        <Polygon
          className="p-8 w-full h-[150px] mt-[-50px] flex items-end justify-center text-text"
          borderColor="bg-content-1"
          bgColor="bg-content-2"
        >
          <p className="font-bold max-w-[300px] text-center">Haul your imagination to uncharted territories</p>
        </Polygon>
        <Polygon className="p-4 flex items-center h-[100px] justify-center" borderColor="bg-text" bgColor="bg-content-1">
          <div className="font-extrabold text-4xl">
            <span className="text-accent">&lt;</span>
            <span className="text-text">gr</span>
            <span className="text-accent">.</span>
            <span className="text-text">inner</span>
            <span className="text-accent">&gt;Development</span>
          </div>
        </Polygon>
      </div>

      <Polygon
        bgColor="bg-background"
        borderColor="bg-text"
        className="flex items-center justify-center h-[150px] w-[700px] mt-[-4px]"
        clipPath="polygon(0 0, 100% 0, 100% 78%, 95% 100%, 5% 100%, 0 80%)"
        borderWidth={{ top: 0 }}
      >
        <p className="text-text font-bold">principle</p>
      </Polygon>
      <div className="flex items-center gap-8 mt-[-25px] h-[50px]">
        <Polygon className="p-4 flex items-center justify-center w-[250px]" bgColor="bg-content-1" borderColor="bg-text/10" stretch={10}>
          <p className="text-accent font-extrabold text-xl flex items-center gap-2">
            regeneration
            <IconChevronDown />
          </p>
        </Polygon>
        <Polygon className="p-4 flex items-center justify-center w-[100px]" bgColor="bg-content-1" borderColor="bg-text/10" stretch={25}>
          <span className="text-accent font-extrabold text-xl flex items-center gap-2">
            fx
            <IconChevronDown />
          </span>
        </Polygon>
      </div>
    </div>
  );
}

export default App;
