import HTMLFlipBook from "react-pageflip";

const MenuFlipbook = () => {
     const menuPages = [
  { id: 1, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071338/WhatsApp_Image_2025-12-30_at_03.47.53_agqfnm.jpg" },
{id: 2, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071336/WhatsApp_Image_2025-12-30_at_03.47.53_1_oavekz.jpg" },
{id: 3, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071336/WhatsApp_Image_2025-12-30_at_03.47.54_lhkj7e.jpg" },
{id: 4, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071335/WhatsApp_Image_2025-12-30_at_03.47.54_1_n5xccy.jpg" },
{id: 5, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071335/WhatsApp_Image_2025-12-30_at_03.47.55_gc5fha.jpg" },
{id: 6, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071332/WhatsApp_Image_2025-12-30_at_03.47.55_1_dt2inr.jpg" },
{id: 7, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071331/WhatsApp_Image_2025-12-30_at_03.47.55_2_q38nsr.jpg" },
{id: 8, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071330/WhatsApp_Image_2025-12-30_at_03.47.56_oo0cgs.jpg" },
{id: 9, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071330/WhatsApp_Image_2025-12-30_at_03.47.56_2_gwrubb.jpg" },
{id: 10, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071330/WhatsApp_Image_2025-12-30_at_03.47.56_1_uqaqm8.jpg" },
{id: 11, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071330/WhatsApp_Image_2025-12-30_at_03.47.57_xkyyqw.jpg" },
{id: 12, image: "https://res.cloudinary.com/dod1dviie/image/upload/v1767071330/WhatsApp_Image_2025-12-30_at_03.47.57_1_zgba7l.jpg" },]
  return (
    <section id="menu" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-yellow-400">
          Restaurant Menu
        </h2>
        <p className="text-muted-foreground mb-8">
          Swipe or click to flip pages
        </p>

        <div className="flex justify-center">
          <HTMLFlipBook
            width={420}
            height={600}
            size="stretch"
            minWidth={300}
            maxWidth={600}
            maxHeight={800}
            showCover
            drawShadow
            mobileScrollSupport
            className="shadow-2xl"
          >
            {menuPages.map((page) => (
              <div key={page.id} className="bg-white">
                <img
                  src={page.image}
                  alt={`Menu Page ${page.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </section>
  );
};

export default MenuFlipbook;