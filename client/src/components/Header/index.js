import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
    const [activeItem, setActiveItem] = useState();
    const handleItemClick = (e, { name }) => setActiveItem({ activeItem: name });
    return (
        <Menu color="blue" inverted fluid>
            <Menu.Item header>Google Books</Menu.Item>
            <Menu.Item
                as={Link} to="/search"
                name="Search"
                active={activeItem === "Search"}
                onClick={handleItemClick}
            />
            <Menu.Item
                as={Link} to="/saved"
                name="Saved"
                active={activeItem === "Saved"}
                onClick={handleItemClick}
            />
        </Menu>

    );
}

export default Header;