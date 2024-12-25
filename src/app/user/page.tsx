"use client";
import Section from "@/components/user/homePage/section";
import SectionNav from "@/components/user/homePage/sectionNav";
import ProductCol from "@/components/user/product/productCol";
import ProductRow from "@/components/user/product/productRow";
import HomePageStyle from "@/styles/user/user.homepage.module.css";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowTrendUp,
  FaArrowUpLong,
} from "react-icons/fa6";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import SpecialSectionHeader from "@/components/user/homePage/specialSectionHeader";
import SectionHeader from "@/components/user/homePage/sectionHeader";

function HomePage() {
  return (
    <div className={HomePageStyle["user-container"]}>
      {/* Carousels */}
      <div className={HomePageStyle["carousels-container"]}>
        <div className={HomePageStyle["carousels-left"]}>
          <Carousel
            interval={1000}
            prevIcon={
              <div className={HomePageStyle["carousels-back-button"]}>
                <FaAngleLeft size={24} color="rgba(0, 0, 0, 0.6)" />
              </div>
            }
            nextIcon={
              <div className={HomePageStyle["carousels-next-button"]}>
                <FaAngleRight size={24} color="rgba(0, 0, 0, 0.6)" />
              </div>
            }
          >
            <Carousel.Item>
              <Image
                src={"/slide1.png"}
                layout="responsive"
                width={0}
                height={0}
                alt="Carousel"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={"/slide2.png"}
                layout="responsive"
                width={0}
                height={0}
                alt="Carousel"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={"/slide3.png"}
                layout="responsive"
                width={0}
                height={0}
                alt="Carousel"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={"/slide4.png"}
                layout="responsive"
                width={0}
                height={0}
                alt="Carousel"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={HomePageStyle["carousels-right"]}>
          <Image
            src={"/qc1.png"}
            layout="responsive"
            width={0}
            height={0}
            alt="Carousel"
          />
          <Image
            src={"/qc2.png"}
            layout="responsive"
            width={0}
            height={0}
            alt="Carousel"
          />
        </div>
      </div>

      <Section HeaderComponent={<SectionHeader title="Danh mục sản phẩm" />}>
        {/* Section Nav */}
        <SectionNav
          items={[
            "Văn học",
            "Kinh tế",
            "Tâm lý - Kỹ năng sống",
            "Thiếu nhi",
            "Văn học",
            "Kinh tế",
            "Tâm lý - Kỹ năng sống",
            "Thiếu nhi",
          ]}
        />

        {/* Section Body */}
        <ProductRow productsTest={5} showArrow={true} showMore={true} />
      </Section>

      <Section
        HeaderComponent={
          <SpecialSectionHeader
            title="Xu hướng mua sắm"
            Icon={FaArrowTrendUp}
          />
        }
      >
        <ProductRow productsTest={10} showArrow={false} showMore={true} />
      </Section>

      <Section HeaderComponent={<SectionHeader title="Giới thiệu sách" />}>
        {/* Section Nav */}
        <SectionNav
          items={[
            "Văn học",
            "Kinh tế",
            "Tâm lý - Kỹ năng sống",
            "Thiếu nhi",
            "Văn học",
            "Kinh tế",
            "Tâm lý - Kỹ năng sống",
            "Thiếu nhi",
          ]}
        />

        {/* Section Body */}
        <ProductCol />
      </Section>
      <div
        style={{
          position: "fixed",
          bottom: 50,
          right: 60,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          padding: 10,
          borderRadius: 100,
        }}
      >
        <FaArrowUpLong size={30} color="#FFF" />
      </div>
    </div>
  );
}

export default HomePage;
