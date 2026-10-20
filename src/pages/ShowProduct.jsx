import Product from "./../components/Product";
import Hero from "./../assets/hero.png";
import { AiFillBug } from "react-icons/ai";
export default function ShowProduct() {
  return(
    <>
      <div>
        <h2 className="text-center text-4xl font-bold font-charm text-blue-500 mt-10">
          แสดงข้อมูลสินค้า Show Product
        </h2>

        <hr className="mt- mb-10 w-[80%] mx-auto h-2 bg-black border-none"/>

        {/* Product */}
         <p className="flex justify-center items-center text-3xl text-blue-500"><AiFillBug /></p>
        <div flex justify-center gap-5>
          {/* Product 1 */}
          <Product pName="iPhone" pPrice={35000.5} pQuan={100} pImg={Hero}/>

          {/* Product 2 */}
          <Product pName="Samsung" pPrice={23000.75} pQuan={50} pImg={Hero}/>

          {/* Product 3 */}
          <Product pName="Vivo" pPrice={15000.25} pQuan={55} pImg={Hero}/>

          {/* Product 4 */}
          <Product pName="Oppo" pPrice={25000.50} pQuan={299} pImg={Hero}/>
        </div>
        
      </div>
    </> 
  )
    
}