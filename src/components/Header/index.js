import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img
        src="https://avatars2.githubusercontent.com/u/31460144?v=4"
        alt="Avatar"
      />
      Lucas Ayrton
    </User>
  </Container>
);

export default Header;
