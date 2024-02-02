import { FaSearch } from 'react-icons/fa';

export default function Header_one() {
    return (
        <div className="bg-black shadow py-3">
            <div className="flex justify-center">
                <div className="w-[78%]">
                    <div className="text-gray-300 text-xs flex justify-end">
                        <a href="https://untirta.ac.id" target="_blank" className="hover:text-white">
                            UNTIRTA.ac.id
                        </a>
                        <span className="pt-0.5 ml-4 cursor-pointer hover:text-white">
                            <FaSearch />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}