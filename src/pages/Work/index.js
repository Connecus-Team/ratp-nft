import React from 'react';
import HeadingLayer from '../../layouts/HeadingLayer';
import Footer from '../../components/Footer';
import Icon from '../../constants/icons';
import './styles.scss';

function Work(props) {
  return (
    <HeadingLayer>
      <div className="work-page">
        <div className="work-page__container">
          <div className="work-page__col">
            <label className="content__label">1. Đặt vấn đề</label>
            <div>
              <p>Hiện nay, nạn hàng giả, hàng nhái, hàng kém chất lượng là một trong những vấn đề nhức nhối của xã hội. Hệ lụy tiêu cực mà nó mang lại cho xã hội là không nhỏ như ảnh hưởng đến sức khỏe, tài chính của người tiêu dùng, làm suy giảm niềm tin của người tiêu dùng đến tính minh bạch của thị trường hàng hóa, làm giảm uy tín của các nhà sản xuất chân chính….
                Vậy với thực trạng về nạn hàng giả, hàng nhái, hàng kém chất lượng hiện nay thì có cách nào để giải quyết vấn đề nêu trên?
              </p>
            </div>
          </div>
          <div className="work-page__col">
            <label className="content__label">2. Tóm tắt tổng quan</label>
            <div>
              <p>Để giải quyết vấn đề hàng giả, hàng nhái, hàng kém chất lượng chúng tôi đã tạo ra một ứng dụng cho phép bất kỳ ai cũng có thể truy xuất được nguồn gốc xuất xứ của món hàng một cách minh bạch mà không thông qua một cơ quan tổ chức lưu trữ cụ thể nào dựa vào những ưu điểm của Blockchain.
                Nhờ vậy mà quyền lợi người sử dụng sản phẩm được đảm bảo và cũng giúp cho doanh nghiệp hay người bán giữ được uy tín hay quan trọng nhất là doanh thu, lợi nhuận của mình.
                Việc thực hiện truy xuất dễ dàng thông qua việc quét mã QR thân thiện với người dùng. Ứng dụng cũng cung cấp nền tảng để doanh nghiệp hay cá nhân đăng ký quyền sở hữu sản phẩm thật dưới dạng tài sản kỹ thuật số (NFT) nhờ Smartcontract trên Blockchain như một cách để bảo vệ sản phẩm của mình.
                Ngoài ra việc người dùng có thể thực hiện giao dịch tài sản (NFT) cũng được xử lý ngay trên ứng dụng.
              </p>
            </div>
          </div>
          <div className="work-page__col content">
            <label className="content__label">3. RATP</label>
            <div>
              <p>RATP - Real-world Assets Trading Platform là một Dapp ứng dụng công nghệ Blockchain và NF. RATP có 3 tính năng chính là:</p>
              <div>
                <p>1.	Đăng ký quyền sở hữu sản phẩm</p>
                <p>Doanh nghiệp hay người bán sẽ cung cấp các thông tin về sản phẩm gửi lên RATP, ứng dụng thực thi smartcontract để tạo ra NFT và trả về cho sản phẩm một mã QR ngẫu nhiên duy nhất dựa trên request ID được trả về của sản phẩm.
                  Sản phẩm khi đó cũng sẽ được tạo ở trong ví của doanh nghiệp và cá nhân đăng ký.
                  Việc tạo NFT này được ghi lại hoàn toàn trên blockchain nên sẽ được đảm bảo sự minh bạch và tin cậy.</p>
                <img src={Icon.ratp1}/>

              </div>
              <div style={{margin: '20px'}}>
                <p>2. Truy xuất nguồn gốc xuất xứ</p>
                <p>Khi người dùng cần truy xuất một sản phẩm bất kỳ. RATP sẽ quét mã QR được tạo ra từ Request ID của NFT. Ứng dụng sẽ gửi request đến APIs để lấy thông tin về lịch sử giao dịch cũng như chủ sỡ hữu của NFT.
                  Lịch sử giao dịch được lấy từ Blockchain nên có thể đảm bảo được sự minh bạch và tin cậy</p>
                <img src={Icon.ratp2}/>
              </div>

              <div>
                <p>3. Thực hiện giao dịch</p>
                <p>Người sở hữu NFT có thể giao dịch dễ dàng chỉ với vài thao tác đơn giản trên giao diện người dùng của RATP.
                  Việc giao dịch NFT song song với trao đổi sản phẩm ngoài đời thực giúp đảm bảo cho giao dịch, tăng độ tin cậy và lưu trữ thông tin minh bạch.</p>
                <img src={Icon.ratp3}/>
              </div>
            </div>
          </div>
          <div className="work-page__col">
            <label className="content__label">4. Roadmap</label>
            <div>
              <img src={Icon.ratp4} />
              <ul>
                <li>Giai đoạn 1: Hoàn thiện sản phẩm và giao diện cho người cùng cuối</li>
                <li>Giai đoạn 2: Phát hành sản phẩm testnet cho người dùng (lấy thông số, để đo lường thị trường)</li>
                <li>Giai đoạn 3: Phát hành sản phẩm mainet và đẩy mạnh marketing kết nối khách hàng</li>
                <li>Giai đoạn 4: Xây dựng chức năng thanh toán và giao dịch online</li>
              </ul>
            </div>
          </div>

          <div className="work-page__col">
            <label className="content__label">4. Đội ngũ và cố vấn</label>
            <div>
              <ul>
                <li>Mentor Lê Thanh Hưng - Community Organizer tại Product School</li>
                <li>Huỳnh Phú Đạt - Product Manager - Thành viên của VBI lab, có kinh nghiệm trong vị trí phát triển sản phẩm tại cty tnhh VietFunLed.</li>
                <li>Nguyễn Đình Hưởng - Web Developer - Lập trình fullstack. Hiện nay đang nghiên cứu và học tập Thạc sỹ bên Hàn Quốc với lĩnh vực Blockchain.</li>
                <li>Nguyễn Mạnh Dũng - Blockchain Developer - Thành viên của VBI lab.</li>
                <li>Phan Kế Hiển - DevOps Engineer - Lập trình nhúng, lập trình App, sử dụng AWS, Azure, GCP. Trên 3 năm kinh nghiệm làm Software developer tại Hàn Quốc.</li>
                <li>Lê Văn Ninh - Blockchain Architect - Có kinh nghiệm nhiều năm trong lĩnh vực blockchain, đã và đang tham gia nhiều dự án về blockchain với nhiều vị trí.</li>
              </ul>
            </div>
          </div>

          <div className="work-page__col">
            <label className="content__label">6. Kết luận</label>
            <div>
              <p>Việc giúp bảo vệ doanh nghiệp cũng như người tiêu dùng trước mối đe dọa từ hàng giả, hàng nhái là nhiệm vụ cốt lõi của RATP.
              Ứng dụng Blockchain vào việc truy xuất nguồn gốc giúp cho tính minh bạch và tin cậy của sản phẩm được đảm bảo đồng thời uy tín của người bán hàng được nâng cao. Niềm tin vào sản phẩm của người mua cũng được củng cố thay vì lòng tin mù quáng.
              Với sứ mệnh “Đảm bảo niềm tin cho khách hàng“ RATP mong muốn trở thành tấm lá chắn vững chắc và mang những giá trị đích thực đến với nhà sản xuất và người tiêu dùng/p>
              </p>
            </div>
          </div>

          <div className="work-page__col">
            <label className="content__label">7. Liên hệ</label>
            <div>
              <ul>
                <li>Email : hi@ratp.link</li>
                <li>Telegram : https://t.me/joinchat/awkHSfjXaHkwMjA1</li>
                <li>Discord : https://discord.gg/MPrrd6eE</li>
                <li>Twitter : https://twitter.com/ratp_link</li>
              </ul>
            </div>
          </div>

          <div className="work-page__col">
            <h2 style={{textAlign: 'center'}}>Xin chân thành cảm ơn phần đọc hiểu nội dung !!!</h2>
          </div>


        </div>
      </div>
      <Footer />
    </HeadingLayer>
  );
}

export default Work;

