import watch from "@/public/watch.jpg"
interface PrompProps {
    header:string,
    body:string
}
function Promp({header,body}:PrompProps) {
    return (
        <>
            <div className="md:m-4 md:mx-20 items-center justify-between text-center mt-8">
                <h1 className="text-3xl mb-3 font-mono ">{header}</h1>
                <div className="md:w-60 border border-gray-500"></div>
                <p className="mt-4 text-lg font-light">{body}</p>
            </div>
        </>
    )
} 
export default function Promotion() {
    return (
       <>   
            <div className="md:grid grid-cols-12 mt-20 mx-10 md:mx-0 ">
                <div className="col-span-4">
                    <Promp header="MODERN" body="It is a long established tracted by the readable content of a page when looking at its layout."/>
                    <Promp header="ESTETHIC" body="It is a long established fact that a reader will ed by the readable content of a page when looking at its layout."/>
                </div>
                <div className="mt-6 md:mt-0 col-span-4 flex justify-center align-center ">
                    <img src={watch.src} alt="" className="h-96 w-96" />
                </div>
                <div className="col-span-4">
                    <Promp header="STRONG" body="It is a long established fact that a reader will be distracted by the readablking at its layout."/>
                    <Promp header="TEST?" body="It is a long established fact that a reader withe readable content of a page when looking at its layout."/>
                </div>
            </div>

       </>
    );
}