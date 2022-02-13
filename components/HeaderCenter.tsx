
const HeaderCenter: React.FC = () => {
  return (
    <div className='flex justify-center sm:col-span-2 2xl:col-span-1 2xl:col-start-2 gap-5 text-white text-lg'>
      <a className="hover:text-gray-100 cursor-pointer">Places to stay</a>
      <a className="hover:text-gray-100 cursor-pointer">Experiences</a>
      <a className="hover:text-gray-100 cursor-pointer">Online Experiences</a>
    </div>
  )
}

export default HeaderCenter