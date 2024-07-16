import React from "react";
import { Heading } from "../../components";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { Checkbox } from "../../components/ui/checkbox";

const Components: React.FC = () => {
  return (
    <div>
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
    </div>
  );
};

export default Components;
