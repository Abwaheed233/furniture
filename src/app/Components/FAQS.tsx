export default function FAQS(){

    const Questions =[
        {
            id:1,
            question:"What types of chairs do you offer?",
            comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum vitae dolore ducimus nihil beatae nostrum, ipsum libero, aspernatur mollitia neque porro molestiae rem voluptates pariatur labore ipsam dolor voluptatem.",
        },
        {
            id:2,
            question:"How can we get in touch with you?",
            comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum vitae dolore ducimus nihil beatae nostrum, ipsum libero, aspernatur mollitia neque porro molestiae rem voluptates pariatur labore ipsam dolor voluptatem.",
        },
        {
            id:3,
            question:"Do your chairs come with a warranty?",
            comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum vitae dolore ducimus nihil beatae nostrum, ipsum libero, aspernatur mollitia neque porro molestiae rem voluptates pariatur labore ipsam dolor voluptatem.",
        },
        {
            id:4,
            question:"What will be delivered? And When?",
            comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum vitae dolore ducimus nihil beatae nostrum, ipsum libero, aspernatur mollitia neque porro molestiae rem voluptates pariatur labore ipsam dolor voluptatem.",
        },
        {
            id:5,
            question:"Can I try a chair before purchasing?",
            comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum vitae dolore ducimus nihil beatae nostrum, ipsum libero, aspernatur mollitia neque porro molestiae rem voluptates pariatur labore ipsam dolor voluptatem.",
        },
        {
            id:6,
            question:"How do I clean and maintain my Comforty chair?",
            comment:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla rerum vitae dolore ducimus nihil beatae nostrum, ipsum libero, aspernatur mollitia neque porro molestiae rem voluptates pariatur labore ipsam dolor voluptatem.",
        },
    ]

    return(
        <>
            <main className="bg-white w-full h-full px-5 md:px-10 lg:px-28 xl:px-48 py-20">
                <h1 className="text-[28px] md:text-[38px] lg:text-[48px] text-[#333333] font-bold text-center">Questios Looks Here</h1>
                <p className="text-[#4F4F4F] text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum id, placeat expedita est mollitia deserunt aliquid cupiditate ratione excepturi, reiciendis</p>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
                    {Questions.map((question) => (
                        <div key={question.id} className="p-7 bg-[#F7F7F7] rounded-lg shadow-md">
                            <div className="flex justify-between items-center">
                            <h2 className="text-[18px] text-[#333333] font-bold">{question.question}</h2>
                            <button className="text-[24px] text-[#333333]">+</button>
                            </div>
                            <p className="text-[#4F4F4F] py-4">{question.comment}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}