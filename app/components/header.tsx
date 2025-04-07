import Link from 'next/link';

export default function Header(){
    const styledLink = "p-1 m-2 text-lg font-semibold text-gray-400 hover:text-gray-900 hover:underline";
    return(
        <header className="flex justify-between items-center h-20">
            <h2 className="text-4xl font-semibold p-4"> Three Tech </h2>
            <nav className="p-2 m-4">
                <ul className="flex flex-row justify-between items-center">
                    <li>
                        <Link href="/" className={styledLink}>
                            Home 
                        </Link>
                    </li>
                    <li>
                        <Link href="/stocks" className={styledLink}> 
                            Stocks 
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}