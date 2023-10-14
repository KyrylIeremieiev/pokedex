import {React} from 'react';
import Image from 'next/image';

const Sprite = (props) => {
    const { data } = props;
    return (
        <div className='spriteSec'>
            <div className='sprite'>
                <Image
                    alt='sprite of this pokemon could not be found'
                    className='spriteImg'
                    src={data.sprites.front_default}
                    width={300}                     // Width of the image
                    height={200}
                 />
            </div>
        </div>
    );
  };
  
  export default Sprite;