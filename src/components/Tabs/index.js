import React from "react";
import { useTranslation } from "react-i18next";
import { Tabs } from "antd";
import { TabContainer } from "./tabs";

const CustomTab = ({ tabList, onChange }) => {
  const { t } = useTranslation();
  const { TabPane } = Tabs;

  return (
    <TabContainer>
      <div className="activity-tab">
        <Tabs
          defaultActiveKey="0"
          onChange={(key) => onChange(key)}
          className="tab-container"
        >
          {tabList.map((data, index) => {
            return (
              <TabPane
                tab={
                  <span>
                    {data.icon}
                    {t(data.title)}
                  </span>
                }
                key={index}
              >
                {data.content}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </TabContainer>
  );
};
export default CustomTab;
