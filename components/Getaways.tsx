import GetawaysLinks from "./GetawaysLinks";
import GetawaysTabs from "./GetawaysTabs";

const Getaways: React.FC = () => {
  return (
    <div className="flex flex-col">
      <GetawaysTabs />
      <hr />
      <GetawaysLinks />
    </div>
  )
}

export default Getaways;