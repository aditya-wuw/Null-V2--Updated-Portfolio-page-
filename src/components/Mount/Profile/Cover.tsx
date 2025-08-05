
import cover from '/cover_art_placeholder.webp'

const Cover = () => {

  return (
    <div className='w-full h-40 max-h-50 overflow-hidden rounded-2xl relative select-none'>
        <a href="https://wall.alphacoders.com/big.php?i=1364253" target='_black'>
            <img src={cover} alt="cover.png" className='object-cover w-full h-full object-center'/>
        </a>
    </div>
  )
}

export default Cover
