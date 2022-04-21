interface FooterColProps {
  heading: string;
  links: string[];
}

const FooterCol: React.FC<FooterColProps> = (props) => {
  const { heading, links } = props;
  return (
    <div className="flex flex-col flex-grow mt-12">
      <p className="font-medium">{heading}</p>
      {links.map((link, index) => (
        <a key={index} className='py-2 cursor-pointer hover:underline'>{link}</a>
      ))}
    </div>
  )
}

export default FooterCol;