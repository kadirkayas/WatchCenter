import data from "../../data/data.json";
import Card from "@/components/Card";

export default function News() {
    const filteredData= data.filter(item => item.category.includes('new'));
    
    return (
        <>
            <div className="mt-10">
                <div  className="flex justify-center">
                    <h1 className="text-3xl md:text-4xl border-b-2 border-black mb-10">NEW PRODUCT</h1>

                </div>
                <div className="grid grid-cols-12 md:mx-10 gap-2 rounded-lg">
                    {
                        filteredData.map((item, index) => (
                            <Card productId={item.productId} name={item.name} imgUrl={item.imgUrl} price={item.price} star={item.star}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}