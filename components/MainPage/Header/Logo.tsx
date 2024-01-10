import { Link } from '../../../navigation';
import { GiCoffeeBeans } from 'react-icons/gi';

const Logo = () => {
    return (
        <Link href="/" className="flex justify-center items-center gap-x-1">
            <GiCoffeeBeans className="text-white font-medium" />
            <div className="text-white font-medium">OPENKAVA</div>
        </Link>
    );
};

export default Logo;
