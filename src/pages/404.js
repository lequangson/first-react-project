import React from 'react';
import { Link } from 'react-router';

const PageNotFound = () => (
  <div className="ymc-hero ymc-hero--2">
    <div className="ymc-hero__content">
      <h1 className="ymc-hero__heading">Trang này không tồn tại</h1>
      <p className="ymc-hero__text mblg">
        Liên kết bạn truy cập có thể bị hỏng hoặc trang có thể đã bị xóa.
      </p>
      <Link className="btn btn--primary btn--block" to="/">
        <i className="fa fa-arrow-left mrsm"></i>Quay lại danh sách chat
      </Link>
    </div>
  </div>
);

export default PageNotFound;
