import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => setShowSidebar(!showSidebar);

  return (
    <div>
      <button className="sidebar-toggle-btn" onClick={handleSidebarToggle}>
        <Image src="/images/bars.svg" alt="Menu" width={30} height={20} />
      </button>
      {showSidebar && (
        <div className="sidebar-div">
          <div className="sidebar-header">
            <button className="close-btn" onClick={handleSidebarToggle}>
              <Image src="/images/close.svg" alt="Close" width={30} height={20} />
            </button>
          </div>
          <div className="sidebar-menus">
            <div className="menu-div">
              <Link href="/services">
                <Image src="/images/Live-chat.svg" alt="Live Chat" width={30} height={20} />
                <p>Live Chat</p>
              </Link>
            </div>
            <div className="menu-div">
              <Link href="/services">
                <Image src="/images/Live-chat.svg" alt="Phone" width={30} height={20} />
                <p>+1 888 374 5088</p>
              </Link>
            </div>
            <div className="menu-div">
              <Link href="/services">
                <Image src="/images/Live-chat.svg" alt="Help" width={30} height={20} />
                <p>Help</p>
              </Link>
            </div>
            <div className="menu-div">
              <Link href="/services">
                <Image src="/images/Live-chat.svg" alt="Track Order" width={30} height={20} />
                <p>Track Order</p>
              </Link>
            </div>
            <div className="menu-div">
              <Link href="/services">
                <Image src="/images/Live-chat.svg" alt="My Account" width={30} height={20} />
                <p>My Account</p>
                <p>20% OFF</p>
                <p>Sign in</p>
              </Link>
            </div>
            <div className="menu-div">
              <Link href="/services">
                <Image src="/images/Live-chat.svg" alt="About Us" width={30} height={20} />
                <p>About Us</p>
              </Link>
            </div>
            <div className="menu-div">
              <Link href="/services">
                <Image src="/images/Live-chat.svg" alt="Blog" width={30} height={20} />
                <p>Blog</p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
