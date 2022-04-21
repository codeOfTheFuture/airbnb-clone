import FooterCol from "./FooterCol";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { VscGlobe } from "react-icons/vsc";

const Footer: React.FC = () => {
  const footerLinks = [{ heading: 'Support', links: ['Help Center', 'Safety information', 'Cancellation options', 'Our COVID-19 Response', 'Supporting people with disabilities', 'Report a neighborhood concern'] }, { heading: 'Community', links: ['Airbnb.org: disaster relief housing', 'Support Afghan refugees', 'Combating discrimination'] }, { heading: 'Hosting', links: ['Try hosting', 'AirCover: protection for Hosts', 'Explore hosting resources', 'Visit to host responsibly'] }, { heading: 'About', links: ['Newsroom', 'Learn about new features', 'Letter from our founders', 'Careers', 'Investors', 'Airbnb Luxe'] }];

  return (
    <footer className="bg-gray-200 w-full h-[400px]">
      <div className="flex w-5/6 mx-auto">
        {footerLinks.map((footerLink, index) => (
          <FooterCol key={index} heading={footerLink.heading} links={footerLink.links} />
        ))}
      </div>

      <div className="flex w-5/6 mx-auto justify-between mt-10">
        <div className="flex gap-2">
          <p>© Airbnb Inc.</p>
          &middot;
          <a className="hover:underline cursor-pointer">Privacy</a>
          &middot;
          <a className="hover:underline cursor-pointer">Terms</a>
          &middot;
          <a className="hover:underline cursor-pointer">Site map</a>
        </div>
        <div className="flex gap-4 items-center">
          <a className="flex gap-2 items-center underline cursor-pointer">
            <span>
              <VscGlobe />
            </span>
            English(US)
          </a>
          <a className="underline cursor-pointer">$ USD</a>
          <div className="flex gap-4">
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <ImInstagram className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;