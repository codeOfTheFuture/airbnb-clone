import GetawaysTab from "./GetawaysTab";

const GetawaysTabs: React.FC = () => {
  const tabsText = ['Destinations for arts & culture', 'Destinations for outdoor adventures', 'Mountain Cabins', 'Beach destination', 'Popular destinations', 'Unique Stays'];

  return (
    <div className="flex py-2">
      {tabsText.map((tabText, index) => (
        <GetawaysTab tabText={tabText} key={index} />
      ))}
    </div>
  )
}

export default GetawaysTabs