import { NavbarMenu } from './navbar-menu';

const Navbar = () => {
  return (
    <div className="bg-background border-y border-border mb-5 lg:mb-8">
      <div className="container-fluid flex flex-wrap justify-between items-center gap-2">
        <NavbarMenu />
      </div>
    </div>
  );
};

export { Navbar };
