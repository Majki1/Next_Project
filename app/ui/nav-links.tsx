'use-client';
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { IconHome, IconSearch, IconMessage, IconSettings, IconMan, IconDoorExit } from "@tabler/icons-react";
import '../globals.css';

const links = [
    { name: "Profile", href: "/profile", icon: IconMan },
    { name: "Settings", href: "/settings", icon: IconSettings },
    { name: "Account preferences", href: "/prefs", icon: IconMan},
];

export default function NavLinks() {

    return (
        <>
        {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            >
            <p className="hidden md:block">{link.name}</p>
            <LinkIcon size={24} />
          </Link>
        );
      })}
        </>
    );
}