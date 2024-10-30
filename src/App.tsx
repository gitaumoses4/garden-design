import { Polygon } from './components/polygon.tsx';
import banner from './assets/banner.jpg';
import { IconChevronDown, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Flower } from './components/flower.tsx';
import { Steps } from './components/steps.tsx';

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

      <div className="flex flex-col-reverse items-center w-full max-w-[800px] mt-[-125px] z-10">
        <Polygon
          className="p-8 w-full h-[150px] mt-[-50px] flex items-end justify-center text-text"
          borderColor="bg-content-1"
          bgColor="bg-content-2"
        >
          <p className="font-bold max-w-[300px] text-center">Haul your imagination to uncharted territories</p>
        </Polygon>
        <Polygon className="p-4 flex items-center h-[100px] justify-center" borderColor="bg-text" bgColor="bg-content-1">
          <div className="font-extrabold flex text-4xl">
            <span className="text-accent mr-[-10px]">
              <IconChevronLeft size={40} />
            </span>
            <span className="text-text">gr</span>
            <span className="text-accent">.</span>
            <span className="text-text">inner</span>
            <span className="text-accent flex">
              <IconChevronRight size={40} className="mx-[-10px]" />
              Development
            </span>
          </div>
        </Polygon>
      </div>
      <div className="w-[70vw] min-w-[900px] h-[300px] flex flex-col items-center mt-[-75px] border-l-text border-r-text border-l-2 border-r-2 relative border-l-accent">
        <Flower className="absolute top-[-35px] left-[-35px]" />
        <Polygon
          type="octagon"
          className={'absolute top-[-35px] right-[-35px] w-[70px] h-[70px] items-center justify-center'}
          bgColor="bg-content-1"
          borderColor="bg-accent"
        >
          <div className="flex flex-col gap-0 items-center justify-center brightness-0 invert">
            <h2 className="m-0 p-0 font-extrabold text-2xl mb-[-5px]">20</h2>
            <span className="text-xs">pts</span>
          </div>
        </Polygon>

        <Polygon
          bgColor="bg-background"
          borderColor="bg-text"
          className="flex items-center justify-center h-[150px] w-[700px] mt-[75px]"
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
      <Polygon
        className="w-[70vw] h-[100px] min-w-[900px]"
        borderColor="bg-text"
        borderWidth={{ top: 0 }}
        borderLeftColor="bg-accent"
        bgColor="bg-background"
        clipPath="polygon(0 0, 100% 0, 100% 70%, 97% 100%, 3% 100%, 0 70%)"
      />
      <Steps
        className="mt-[-40px]"
        steps={[
          { title: 'cultivate', description: 'your mind' },
          { title: 'mulch', description: 'your mind' },
          { title: 'prune', description: 'your emotions' },
          { title: 'fertilize', description: 'your dreams' },
        ]}
      />

      <Polygon className="max-w-[800px] w-full h-[150px] mt-[50px] flex items-center justify-center" bgColor="bg-content-2" borderColor="bg-content-1">
        <Polygon className="w-[200px] h-[70px] flex items-center justify-center" bgColor="bg-accent" stretch={10}>
          <span className="text-content-2 font-extrabold text-lg">reveal</span>
        </Polygon>
      </Polygon>
    </div>
  );
}

export default App;
