import GetawaysLink from "./GetawaysLink";

const GetawaysLinks: React.FC = () => {
  const linksText = [{ city: 'Phoenix', state: 'Arizona' }, { city: 'Hot Springs', state: 'Arkansas' }, { city: 'Los Angeles', state: 'California' }, { city: 'San Diego', state: 'California' }, { city: 'San Francisco', state: 'California' }, { city: 'Barcelona', state: 'Catalonia' }, { city: 'Prague', state: 'Czechia' }, { city: 'Washington', state: 'District of Columbia' }, { city: 'Keswick', state: 'England' }, { city: 'London', state: 'England' }, { city: 'Scarborough', state: 'England' }];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 ml-2">
      {linksText.map((link, index) => (
        <GetawaysLink key={index} city={link.city} state={link.state} />
      ))}
      <p className="py-4 underline font-medium cursor-pointer">Show More</p>
    </div>
  )
}

export default GetawaysLinks;