import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { Button, ButtonGroup } from "@nextui-org/button";


export default function UserDropDown() {
    const items = [
        {
            key: "new",
            label: "New file",
        },
        {
            key: "copy",
            label: "Copy link",
        },
        {
            key: "edit",
            label: "Edit file",
        },
        {
            key: "delete",
            label: "Delete file",
        }
    ];

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="bordered"
                >
                    Open Menu
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Dynamic Actions" items={items}>
                {(item) => (
                    <DropdownItem
                        key={item.key}
                        color={item.key === "delete" ? "danger" : "default"}
                        className={item.key === "delete" ? "text-danger" : ""}
                    >
                        {item.label}
                    </DropdownItem>
                )}
            </DropdownMenu>
        </Dropdown>
    );
}
