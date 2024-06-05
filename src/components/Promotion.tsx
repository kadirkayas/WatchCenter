interface PrompProps {
    header:string,
    body:string
}
function Promp({header,body}:PrompProps) {
    return (
        <>
            <div className="md:m-4 md:mx-20  items-center justify-between ">
                <h1 className="text-3xl mb-3 font-mono ">{header}</h1>
                <div className="w-60 border border-gray-500"></div>
                <p className="mt-4 text-lg font-light">{body}</p>
            </div>
        </>
    )
}

export default function Promotion() {
    return (
       <>   
            <div className="md:grid grid-cols-12">
                <div className="col-span-4">
                    <Promp header="MODERN" body="It is a long established tracted by the readable content of a page when looking at its layout."/>
                    <Promp header="ESTETHIC" body="It is a long established fact that a reader will ed by the readable content of a page when looking at its layout."/>
                </div>
                <div className="col-span-4 h-96">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8dB5IiOPLqRNFrEecyuM4bI0PeuOQ3MpGg&s" alt="" />
                </div>
                <div className="col-span-4">
                    <Promp header="STRONG" body="It is a long established fact that a reader will be distracted by the readablking at its layout."/>
                    <Promp header="TEST?" body="It is a long established fact that a reader withe readable content of a page when looking at its layout."/>
                </div>
            </div>

       </>
    );
}