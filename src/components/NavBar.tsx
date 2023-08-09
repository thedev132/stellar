import Image from "next/image"

export default function NavBar() {
    return (
        <header className="fixed top-0 z-10 w-full backdrop-blur-lg">
            <div className="mx-auto max-w-6xl pl-4 pr-4 md:pl-8 md:pr-8">
                <div className="flex h-16 items-center justify-between h-20">

                    {/* <!-- Site branding --> */}
                    <div className="mr-4 shrink-0">
                        {/* <!-- Logo --> */}
                        <a className="block" href="index.html" aria-label="Cruip">
                            <Image src="/images/logo.svg" width="38" height="38" alt="Stellar"/>
                        </a>
                    </div>

                    {/* <!-- Desktop navigation --> */}
                    <nav className="flex grow">

                        {/* <!-- Desktop sign in links --> */}
                        <ul className="flex grow flex-wrap items-center justify-end">
                            <li>
                                <a className="text-sm leading-[1.5715] font-medium lighttext transition-colors transition-bg transition-border transition-text-decoration transition-fill transition-stroke transition-opacity transition-shadow transition-transform transition-filter transition-backdrop-filter duration-150 ease-in" href="signin.html">Sign in</a>
                            </li>
                            <li className="ml-6">
                                <a className="clnk2 relative w-full lighttext transition-colors transition-bg transition-border transition-text-decoration transition-fill transition-stroke transition-opacity transition-shadow transition-transform transition-filter transition-backdrop-filter ease-in duration-150 cuogv cm39l cc4v0 cqez1 ch9g6 cypz5 cxxlx" href="signup.html">
                                    <span className="relative inline-flex items-center">
                                        Sign up <span className="ml-1 ct2xv cot2b duration-150 c8087">-&gt;</span>
                                    </span>
                                </a>
                            </li>
                        </ul>

                    </nav>

                </div>
            </div>
        </header>
    )
}