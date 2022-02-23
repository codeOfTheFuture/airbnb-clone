import GuestsInput from "./GuestsInput";

enum GuestsInputs {
  Adults,
  Children,
  Infants,
  Pets
}

const GuestsDropdown: React.FC = () => {

  return (
    <div
      className='flex flex-col justify-between w-[375px] h-[400px] bg-white rounded-full p-5'
    >
      <GuestsInput id={GuestsInputs.Adults} label={"Adults"} description={'Ages 13 or above'} />
      <GuestsInput id={GuestsInputs.Children} label={"Children"} description={'Ages 2-12'} />
      <GuestsInput id={GuestsInputs.Infants} label={'Infants'} description={'Under 2'} />
      <GuestsInput id={GuestsInputs.Pets} label={'Pets'} description={'Bringing an assistance animal?'} />
      <div className='p-2'>
        <p>If you&apos;re lucky enough to have more than 2 pets with you, be sure to let your host know.</p>
      </div>
    </div>
  )
}

export default GuestsDropdown;