import aboutImg from "../assets/img/about-shoes_files/53753aa8-bbcc-45f1-b951-2ceb6600fefd.png";

function About() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-md-6 mb-4">
          <img
            src={aboutImg}
            alt="Shoe Store"
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2 className="mb-3 fw-bold">Shoe Store</h2>

          <p>
            Shoe Store là cửa hàng chuyên cung cấp các dòng giày chính hãng,
            chất lượng cao với thiết kế hiện đại và phong cách trẻ trung.
          </p>

          <p>
            Chúng tôi cam kết mang đến cho khách hàng những sản phẩm tốt nhất
            với giá cả hợp lý cùng dịch vụ chăm sóc khách hàng tận tâm.
          </p>

          <p>
            Với phương châm <strong>"Chất lượng tạo nên thương hiệu"</strong>,
            Shoe Store luôn không ngừng cải tiến và phát triển để phục vụ
            khách hàng ngày càng tốt hơn.
          </p>

          <div className="mt-4">
            <p><strong>Email:</strong> support@shoestore.com</p>
            <p><strong>Hotline:</strong> 0123 456 789</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
