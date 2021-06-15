import React from "react";
import {
  Image,
  Button,
  Dropdown,
  DropdownType,
  ButtonGroup,
  idx,
} from "react-bootstrap";

export default function SignedIn({ signOut }) {
  return (
    <div>
      <Image
        width="40px"
        src="https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png"
        roundedCircle
      />
      <Dropdown className="justify-content-end">
        <Dropdown.Toggle  variant="info" id="dropdown-basic">
            Ahmet
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={signOut}
            text="Çıkış Yap"
          >Çıkış Yap</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Bilgilerim</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
