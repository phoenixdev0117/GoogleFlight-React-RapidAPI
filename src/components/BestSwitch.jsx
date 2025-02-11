const BestSwitch = ({ switchBestToCheapest, setSwitchBestToCheapest }) => {
  


  return (
    <div className="lg:w-[900px] md:w-[734px] w-11/12 flex h-[52px] m-5">
      <div 
        onClick={()=>setSwitchBestToCheapest(true)}
        className={`w-1/2 flex justify-center items-center cursor-pointer rounded-l-lg border-2 ${ switchBestToCheapest? 'border-blue  bg-opacity-10 bg-blue border-b-4': 'border-r-0'}`}>
        BEST
      </div>
      <div 
        onClick={()=>setSwitchBestToCheapest(false)}
        className={`w-1/2 flex justify-center items-center cursor-pointer rounded-r-lg border-2 ${ !switchBestToCheapest? 'border-blue  bg-opacity-10 bg-blue border-b-4': 'border-l-0'}`}>
        Cheapest
      </div>
    </div>
  );
};

export default BestSwitch;
