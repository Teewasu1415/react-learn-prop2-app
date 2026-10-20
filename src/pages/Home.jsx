import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <div>

                <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', color: 'red', fontFamily: 'Kanit', marginTop: '30px' }}>
                    เรียน Props ใน React
                </h2>
                <p className="text-center mt-7.5 text-3x1 font-bold text-blue-500 font-itim">
                    Props คือ การส่งข้อมูลจาก Component แม่ไปยัง Component ลูก
                </p>

                <hr className="mt-5 w-[80%] mx-auto h-3 bg-red-500 border-none" />

                <div className="mt-10 flex justify-center gap-10">
                    <Link to="/ShowProduct"
                        className="bg-rose-200 text-amber-800 py-5 px-10 rounded-xl font-bold hover:bg-rose-500">
                        เปิด Show Product
                    </Link>

                    <Link to="/ShowPerson"
                        className="bg-orange-200 text-amber-800 py-5 px-10 rounded-xl font-bold hover:bg-orange-500">
                        เปิด Show Person
                    </Link>
                </div>

            </div>
        </>
    )

}