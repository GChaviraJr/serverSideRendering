import Link from 'next/link'
import Image from '../components/image'
import Robots from './robots';



const Index = () => (
    <div>
        <h1>SSR Magician</h1>
        <Link href='/about'>
            <button>About</button>
        </Link>
        <Link href='/robots'>
            <button>Robots</button>
        </Link>
        {/* <Image/> */}
        {/* <a href='./about'>About</a> */}
    </div>
)


export default Index