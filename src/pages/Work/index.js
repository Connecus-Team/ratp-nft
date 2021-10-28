import React from 'react';
import HeadingLayer from '../../layouts/HeadingLayer';
import Footer from '../../components/Footer';
import './styles.scss';

function Work(props) {
  return (
    <HeadingLayer>
      <div className="work-page">
        <div className="work-page__container">
          <div className="work-page__col work-img">
            <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.15752-9/245036186_416844673402475_7893348428281964624_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=JPhQB2bA_6oAX8R0h_f&_nc_ht=scontent-ssn1-1.xx&oh=d5dab152c4d6428a0aec53c2633870a2&oe=619C9908"/>
            <label>Ảnh miêu tả cơ chế hoạt động</label>
          </div>
          <div className="work-page__col">
            <label className="content__label">1. Nêu vấn đề</label>
            <div>
              <p>Hiện nay, các ngành hàng sản xuất đang bị ảnh hưởng doanh thu rất nhiều bởi vấn nạn làm hàng giả,
                kém chất lượng. Các sản phẩm giả được làm ngày càng tinh vi và khó phát hiện khiến cho quyền lợi của khách hàng bị đe dọa cũng như uy tín của nhà sản xuất bị giảm sút.
                Việc trao đổi, mua bán các sản phẩm cũng trở nên vô cùng khó khăn và dựa hoàn toàn trên lòng tin của các bên giao dịch vì vậy tạo cơ hội để các sản phẩm giả thâm nhập và kiếm lợi bất chính
              </p>
            </div>
          </div>
          <div className="work-page__col">
            <label className="content__label">2. Lựa chọn công nghệ</label>
            <div>
              <p>Blockchain để lưu trữ thông tin về sản phẩm (nguồn gốc, lịch sử giao dịch) một cách minh bạch và bảo mật.
Kết hợp Smartcontract để thực hiện các giao dịch trên Blockchain.
              </p>
            </div>
          </div>
          <div className="work-page__col content">
            <label className="content__label">3. Giải quyết vấn đề</label>
            <div>
              <p>- Thông tin được lưu trữ trên blockchain và không thể bị sửa đổi kể cả đối với nhà sản xuất và bên cung cấp giải pháp</p>
              <p> - Người dùng có thể chứng thực quyền sở hữu của mình và được bảo vệ quyền lợi kể cả đối với những giao dịch giữa cá nhân hay giao dịch với các bên phân phối, đại lý</p>
              <p>- Doanh nghiệp có thể thu thập thông tin chính xác và giá trị về dòng đời của sản phẩm cũng như các thông tin feedback từ chính xác người sử dụng sở hữu sản phẩm</p>
              <p>- Có thể ứng dụng trên toàn cầu</p>
              <p>- Người dùng chỉ cần tin vào thông tin được lưu trữ cứng trên blockchain chứ không bắt buộc phải tin vào nhà cung cấp dịch vụ hay database tập trung nào khác</p>
            </div>
          </div>
          <div className="work-page__col">
            <label className="content__label">4. Kết luật</label>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </HeadingLayer>
  );
}

export default Work;

