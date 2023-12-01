import { Link, NavLink } from "@remix-run/react";
import logo from './logo.svg'

type MenuProps = {
    title: string;
    url: string;
}[]


export function NavBar({items}:{items:MenuProps}) {
  return (
<nav className="flex flex-col gap-4 bg-zinc-700 text-white p-4">
 <Link to='/'>
  <img  src={logo} alt="" />
  </Link>
 <ul className="space-y-4">
    {items.map((item)=><li key={item.title}>
        <NavLink to={item.url}>{item.title}</NavLink>
    </li>)}
 </ul>
</nav>
  )
}

