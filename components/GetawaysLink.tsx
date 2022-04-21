interface GetawaysLinkProps {
  city: string;
  state: string;
}

const GetawaysLink: React.FC<GetawaysLinkProps> = (props) => {
  const { city, state } = props;
  return (
    <div className='py-4 cursor-pointer'>
      <p>{city}</p>
      <p className='text-gray-500'>{state}</p>
    </div>
  );
};

export default GetawaysLink;
