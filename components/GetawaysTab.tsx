interface GetawaysTabProps {
  tabText: string;
}

const GetawaysTab: React.FC<GetawaysTabProps> = (props) => {
  const { tabText } = props;
  return (
    <div className='p-2 text-black hover:bg-gray-100 rounded-xl hover:text-black'>
      {tabText}
    </div>
  );
};

export default GetawaysTab;
