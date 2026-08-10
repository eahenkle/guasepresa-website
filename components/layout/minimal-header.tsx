import Image from "next/image";
import Link from "next/link";

export function MinimalHeader() {
  return (
    <header className="site-header band-ink wm-camo">
      <div className="container nav-bar">
        <Link href="/" className="brand">
          <Image src="/assets/logo-64.png" alt="" width={40} height={40} />
          <span>Guasepresa</span>
        </Link>
      </div>
    </header>
  );
}
