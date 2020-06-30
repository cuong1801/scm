import React, {  } from "react";
import { PageHeader} from "antd";
const OrderPageHeader = (): JSX.Element => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Danh sách đơn hàng"
        subTitle="Đơn hàng / Danh sách đơn hàng"
      ></PageHeader>
    </div>
  );
};

export default OrderPageHeader;
