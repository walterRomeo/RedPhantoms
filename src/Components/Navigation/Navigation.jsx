import React,  { useState } from "react";

const Navigation = () => {
    const [selectedNavigationItem, setSelectedNavigationItem] = useState("About");
    const navigationItems = [
        {id: 1, title: "About", name: "About"},
        {id: 2, title: "News", name: "News"},
        {id: 3, title: "Videos", name: "Videos"},
        {id: 4, title: "League", name: "League"},
        {id: 5, title: "Contact Us", name: "ContactUs"},
        {id: 6, title: "Merchandise", name: "Merchandise"},
        ];
    return(
        <div className="Navigation">
            <ul className="NavigationMenus">
                {navigationItems.map((item) => {
                return (
            <li
              key={item.id}
              onClick={() => setSelectedNavigationItem(item.name)}
              className={selectedNavigationItem === item.name ? `activeNavItem` : ""}
            >
              <a href={`#${item.name}`}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
    );
};

export default Navigation;