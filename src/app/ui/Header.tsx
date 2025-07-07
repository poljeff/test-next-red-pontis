import Link from "next/link";
import { WishlistIcon } from "./icons";

const Header = () => {
  return (
    <header className="flex justify-between p-4 sticky top-0 bg-white z-10 text-gray-800">
      <div>
        <Link href="/"> Tienda </Link>
      </div>
      <div>
        <Link href="/wishlist">
          <WishlistIcon />
        </Link>
      </div>
    </header>
  )
}

export default Header