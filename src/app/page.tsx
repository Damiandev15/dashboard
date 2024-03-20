import React from "react";
import { CardUsageExample } from "@/components/Card";
import { ListUsageExample } from "@/components/List";
import { BarChartExampleWithGroups } from "@/components/Area";
import { TableUsageExample } from "@/components/Table";
import { Card } from "@tremor/react";

function page() {
  return (
    <div className="container mx-auto pt-10">
      <div className="grid grid-cols-4 gap-2">
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
        <CardUsageExample />
      </div>

      <div className="grid grid-cols-4 mt-10">
        <div className="col-span-2 px-7">
          <ListUsageExample />
          <div className="pt-10">
            <TableUsageExample />
          </div>
        </div>
        <div className="col-span-2 px-7">
          <Card>
            <BarChartExampleWithGroups />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default page;
