import styled from "styled-components";
import Theme from "../../assert/theme.js";

const TabContainer = styled.div`
  .activity-tab {
    .tab-container {
      .ant-tabs-nav-list {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .ant-tabs-tab {
        width: 100%;
        justify-content: center !important;
        font-size: 17px;
        font-weight: bold;
        padding: 16px 10px;
        color: ${Theme.grey};
        &:hover {
          background: ${Theme.greyBackground};
          color: ${Theme.black};
        }
        &:focus {
          color: ${Theme.black};
        }
        &:visited {
          background: ${Theme.greyBackground};
          color: ${Theme.black};
        }
      }
      .ant-tabs-tab-btn:focus, .ant-tabs-tab-remove:focus, .ant-tabs-tab-btn:active, .ant-tabs-tab-remove:active{
        color: ${Theme.black};
      }
      .ant-tabs-ink-bar {
        background: ${Theme.black};
      }
      .ant-tabs-tab + .ant-tabs-tab {
        margin: 0 0 0 15px;
      }
      .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
        color: ${Theme.black};
      }
    }
  }
`;

export { TabContainer };
