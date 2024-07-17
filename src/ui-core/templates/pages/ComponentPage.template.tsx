import React from "react";
import { Heading } from "../../components";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Checkbox } from "../../components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { cn } from "../../../lib/utils";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Components: React.FC = () => {
  const [isDDOpen, setIsDDOpen] = React.useState(false);
  const [isVDOpen, setIsVDOpen] = React.useState(false);
  const [isCBDDOpen, setCBDDOpen] = React.useState(false);
  const [showOption1, setShowOption1] = React.useState<Checked>(true);
  const [showOption2, setShowOption2] = React.useState<Checked>(false);
  const [showDisabledOption, setShowDisabledOption] =
    React.useState<Checked>(false);
  const [isRBDDOpen, setRBDDOpen] = React.useState(false);
  const [position, setPosition] = React.useState("bottom");

  return (
    <div className="mb-[10rem]">
      <div>
        <Heading variant="h2">Buttons</Heading>
        <div className="my-3 ml-[-100rem]">
          <Button variant="primary" disabled className="rounded-[0.45rem] mr-3">
            Cancel
          </Button>
          <Button variant="secondary" disabled className="rounded-[0.45rem]">
            Add User
          </Button>
        </div>

        <div className="my-3 ml-[-100rem]">
          <Button variant="primary" className="mt-3 rounded-[0.45rem] mr-3">
            Cancel
          </Button>
          <Button variant="secondary" className="mt-3 rounded-[0.45rem]">
            Add User
          </Button>
        </div>
      </div>
      <div>
        <Heading variant="h2">Input Fields</Heading>
        <div>
          <Input
            disabled
            isError={false}
            placeholder="Disabled"
            className="mx-14 w-550px my-5"
          />
          <Input isError placeholder="Error" className="mx-14 w-550px my-5" />
          <Input
            isError={false}
            placeholder="Normal"
            className="mx-14 w-550px my-5"
          />
        </div>
      </div>
      <div>
        <Heading variant="h2">Radio buttons</Heading>
        <div className="mx-14">
          <RadioGroup defaultChecked={false}>
            <RadioGroupItem
              disabled={true}
              value="option-one"
              id="option-one"
            />
            <RadioGroupItem value="option-two" id="option-two" />
          </RadioGroup>
        </div>
      </div>
      <div>
        <Heading variant="h2">Checkboxes</Heading>
        <div className="ml-[-112.5rem]">
          <div>
            <Checkbox disabled={true} />
          </div>
          <div>
            <Checkbox className="mt-3" />
          </div>
        </div>
      </div>
      <div>
        <Heading variant="h2">Dropdown Menu</Heading>
        <div className="ml-[-105rem] mb-[6rem]">
          <DropdownMenu onOpenChange={setIsDDOpen}>
            <DropdownMenuTrigger
              className={cn(
                "p-3 ring-2 hover:ring-hover hover:text-hover outline-none hover:bg-inverseHover",
                isDDOpen
                  ? "ring-selected text-selected"
                  : " text-normal ring-normal"
              )}
            >
              Global Action
              <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="text-activeBorder ">
                Delete Properties
              </DropdownMenuItem>
              <DropdownMenuItem disabled={true} className="text-inactiveBorder">
                Disabled Property
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <Heading variant="h2">Vertical Ellipsis Dropdown</Heading>
        <div className="ml-[-112rem] mb-[10rem]">
          <DropdownMenu onOpenChange={setIsVDOpen}>
            <DropdownMenuTrigger
              className={cn(
                "px-2 py-1 ring-2 hover:ring-none hover:text-hover outline-none hover:bg-inverseHover",
                isVDOpen
                  ? "ring-0 text-selected bg-inverseHoverClick outline-none"
                  : " text-normal ring-0"
              )}
            >
              <FontAwesomeIcon icon={faEllipsisV} className="mx-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem className="text-activeBorder ">
                View Property
              </DropdownMenuItem>
              <DropdownMenuItem className="text-activeBorder ">
                Delete
              </DropdownMenuItem>
              <DropdownMenuItem disabled={true} className="text-inactiveBorder">
                Disabled Property
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <Heading variant="h2">Button with Checkbox Dropdown</Heading>
        <div className="ml-[-108rem] mb-[9rem]">
          <DropdownMenu onOpenChange={setCBDDOpen}>
            <DropdownMenuTrigger
              asChild
              className={cn(
                "p-3 ring-2 hover:ring-hover hover:text-hover outline-none",
                isCBDDOpen
                  ? "ring-selected text-selected"
                  : " text-normal ring-normal"
              )}
            >
              <Button variant="primary">
                Open
                <FontAwesomeIcon
                  icon={isCBDDOpen ? faAngleUp : faAngleDown}
                  className="ml-2"
                ></FontAwesomeIcon>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuCheckboxItem
                className="text-activeBorder"
                checked={showOption1}
                onCheckedChange={setShowOption1}
              >
                Option 1
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                className="text-activeBorder"
                checked={showOption2}
                onCheckedChange={setShowOption2}
              >
                Option 2
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                className="text-inactiveBorder"
                checked={showDisabledOption}
                onCheckedChange={setShowDisabledOption}
                disabled={true}
              >
                Disabled Option
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div>
        <Heading variant="h2">Button with Radio Group Dropdown</Heading>
        <div className="ml-[-108rem] mb-[9rem]">
          <DropdownMenu onOpenChange={setRBDDOpen}>
            <DropdownMenuTrigger
              asChild
              className={cn(
                "p-3 ring-2 hover:ring-hover hover:text-hover outline-none",
                isRBDDOpen
                  ? "ring-selected text-selected"
                  : " text-normal ring-normal"
              )}
            >
              <Button variant="primary">
                Open
                <FontAwesomeIcon
                  icon={isRBDDOpen ? faAngleUp : faAngleDown}
                  className="ml-2"
                ></FontAwesomeIcon>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
              >
                <DropdownMenuRadioItem
                  className="text-activeBorder"
                  value="top"
                >
                  Top
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className="text-activeBorder"
                  value="bottom"
                >
                  Bottom
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  className="text-inactiveBorder"
                  value="right"
                  disabled={true}
                >
                  Right
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Components;
