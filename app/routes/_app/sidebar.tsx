import { Link, NavLink } from "@remix-run/react";


type MenuProps = {
    title: string;
    url: string;
}[]


export function NavBar({items}:{items:MenuProps}) {
  return (
<nav className="flex flex-col gap-4 bg-zinc-700 text-white p-4">
 <Link to='/'>Logo</Link>
 <ul className="space-y-4">
    {items.map((item)=><li key={item.title}>
        <NavLink to={item.url}>{item.title}</NavLink>
    </li>)}
 </ul>
</nav>
  )
}

