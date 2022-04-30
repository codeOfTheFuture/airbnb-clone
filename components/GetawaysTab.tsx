interface GetawaysTabProps {
  tabText: string;
  active?: boolean;
}

const GetawaysTab: React.FC<GetawaysTabProps> = (props) => {
  const { tabText, active } = props;
  return (
    <div className="flex flex-col justify-center">
      <div className={`${active ? 'text-black cursor-default' : 'text-gray-500 cursor-pointer'} relative p-2 text-black hover:bg-gray-100 rounded-xl`}>
        {tabText}
        <div className={`absolute -bottom-2 w-[92%] h-[2px] bg-black ${!active && 'hidden'}`}></div>
      </div>
    </div>
  );
};

export default GetawaysTab;
