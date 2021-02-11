import React from "react";

import ReactCalendarSrip from "./index.js";

export default {
  title: "Basic",
  component: ReactCalendarSrip
};

const Template = (args) => <ReactCalendarSrip {...args} />;

export const BasicExample = Template.bind({});
BasicExample.args = { minDate: "minDate" };
