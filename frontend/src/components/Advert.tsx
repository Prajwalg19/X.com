import {FaSpotify} from "react-icons/fa";
export default function Advert() {
    return (
        <main className="bg-white rounded-xl w-full h-auto p-5 ">
            <span className="flex flex-row items-center justify-between p-2">
                <p className="flex items-center gap-3"><span>Sponsored </span><FaSpotify className="text-lg text-green-500 " /></p>
                <p className="text-gray-500 text-sm">Advertise your content</p>
            </span>
            <img src="http://localhost:4000/assets/advertisement.jpeg" className="object-cover rounded-xl w-full h-[26rem]" />
            <p className="p-2 flex items-center justify-between font-serif text-base"><span className="">AFTER HOURS</span> <span className="text-xs">XO Records<sup>&copy;</sup></span></p>
            <p className="text-sm text-gray-500 p-2">Listen to the latest studio album from the weeknd on spotify</p>

        </main >
    )
}
